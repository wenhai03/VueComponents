<template>
    <el-dialog
        :visible.sync="selectAllVisible"
        size="tiny"
        :modal="true"
        :before-close="selectAllHandleClose"
    >
        <div style="padding: 16px 15px; display: flex; align-items: center;" >
            <div class="el-message-box__status el-icon-warning"></div>
            <div style="font-family: PingFangSC-Regular; font-size: 14px; color: #333333;padding-left: 10px">请选择导出内容</div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="selectAllVisible = false" size="small">取消</el-button>
            <el-button type="primary" @click="onExportAll" size="small">导出全部筛选信息</el-button>
            <el-button type="primary" @click="onExportPage" size="small">导出本页筛选信息</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "excelExportDialog",
        props: {
        },
        data () {
            return {
                selectAllVisible: false,
                url: "",
                urlAll: "",
                docnloadParmas: {}
            };
        },
        methods: {
            openSelectDialog (url, params, idsParams) {
                this.selectAllVisible = true;
                this.docnloadParmas = {
                    url: url,
                    params: params,
                    idsParams: idsParams
                };
            },
            //点击对话框确认选择全部导出
            onExportAll () {
                const urlAll = this.$utils.addParamsForUrl(this.docnloadParmas.url, this.docnloadParmas.params);
                this.$utils.downloadExcel(urlAll);
                this.selectAllHandleClose();
            },
            selectAllHandleClose() {
                this.selectAllVisible = false;
            },
            onExportPage () {
                const urlAll = this.$utils.addParamsForUrl(this.docnloadParmas.url, { ...this.docnloadParmas.params, ...this.docnloadParmas.idsParams });
                this.$utils.downloadExcel(urlAll);
                this.selectAllHandleClose();
            }
        },
        created: function () {
        },

        mounted: function () {
        }
    };
</script>
<style lang="css" scoped>
    .el-dialog__wrapper >>> .el-dialog {
        border-radius: 4px;
    }
    .el-dialog__wrapper >>> .el-dialog__header {
        border: none;
    }
    .el-dialog__wrapper >>> .el-dialog__footer {
        border: none;
    }
</style>
