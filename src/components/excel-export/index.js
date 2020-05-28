import Vue from "vue";
import ExcelExport from "./index.vue";
const SelectExport = Vue.extend(ExcelExport);

let seed = 1;

const excelExportDialog = function (url, params, idsParams) {
    if (Vue.prototype.$isServer) return;
    const id = "excel-export-dialog_" + seed++;
    const instance = new SelectExport();
    instance.$mount();
    instance.id = id;
    document.body.appendChild(instance.$el);
    instance.openSelectDialog(url, params, idsParams);
    return instance;
};
export default excelExportDialog;
