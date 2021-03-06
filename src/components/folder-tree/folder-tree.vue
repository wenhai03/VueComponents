<template>
  <el-tree :data="folderTree" :render-content="renderContent"></el-tree>
</template>

<script>
  import { putFileInFolder, transferFolderToTree, expandSpecifiedFolder } from '@/libs/util'
  import clonedeep from 'clonedeep'
  export default {
    name: 'FolderTree',
    data () {
      return {
        folderTree: [],
        currentRenamingId: '',
        currentRenamingContent: '',
      }
    },
    props: {
      folderList: {
        type: Array,
        default: () => []
      },
      fileList: {
        type: Array,
        default: () => []
      },
      folderDrop: Array,
      fileDrop: Array,
      beforeDelete: Function
    },
    watch: {
      folderList () {
        this.transData()
      },
      fileList () {
        this.transData()
      }
    },
    methods: {
      renderContent(h, { node, data, store }) {
        return (
          div
          divPrecision(itemData.fee_rate, { symbol: itemData.token_name, cut: 0 })
        )
      },
      transData () {
        this.folderTree = transferFolderToTree(putFileInFolder(this.folderList, this.fileList))
      },
      isFolder (type) {
        return type === 'folder'
      },
      handleDelete (data) {
        const folderId = data.folder_id
        const isFolder = this.isFolder(data.type)
        let updateListName = isFolder ? 'folderList' : 'fileList'
        let list = isFolder ? clonedeep(this.folderList) : clonedeep(this.fileList)
        list = list.filter(item => item.id !== data.id)
        this.$emit(`update:${updateListName}`, list)
        this.$nextTick(() => {
          expandSpecifiedFolder(this.folderTree, folderId)
        })
      },
      handleDropdownClick (data, name) {
        if (name === 'rename') {
          this.currentRenamingId = `${data.type || 'file'}_${data.id}`
        } else if (name === 'delete') {
          this.$Modal.confirm({
            title: '提示',
            content: `您确定要删除${this.isFolder(data.type) ? '文件夹' : '文件'}《${data.title}》吗？`,
            onOk: () => {
              this.beforeDelete ? this.beforeDelete().then(() => {
                this.handleDelete(data)
              }).catch(() => {
                this.$Message.error('删除失败')
              }) : this.handleDelete(data)
            }
          })
        }
      },
      handleInput (value) {
        this.currentRenamingContent = value
      },
      updateList (list, id) {
        let i = -1
        let len = list.length
        while (++i < len) {
          let folderItem = list[i]
          if (folderItem.id === id) {
            folderItem.name = this.currentRenamingContent
            list.splice(i, 1, folderItem)
            break
          }
        }
        return list
      },
      saveRename (data) {
        const id = data.id
        const type = data.type
        if (type === 'folder') {
          const list = this.updateList(clonedeep(this.folderList), id)
          this.$emit('update:folderList', list)
        } else {
          const list = this.updateList(this.fileList, id)
          this.$emit('update:fileList', list)
        }
        this.currentRenamingId = ''
      }
    },
    mounted () {
      this.transData()
    }
  }
</script>

<style lang="less">
  .tree-item{
    display: inline-block;
    width: ~"calc(100% - 50px)";
    height: 30px;
    line-height: 30px;
    & > .ivu-dropdown{
      float: right;
    }
    ul.ivu-dropdown-menu{
      padding-left: 0;
    }
    li.ivu-dropdown-item{
      margin: 0;
      padding: 7px 16px;
    }
    .tree-rename-input{
      width: ~"calc(100% - 80px)";
    }
  }
</style>
