sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
   "employeemanager/util/formatter" 
], function (Controller, JSONModel, MessageToast, formatter) {
  "use strict";

  return Controller.extend("employeemanager.controller.App", {
    formatter: formatter,

    onInit: function () {
      this._oModel = this.getView().getModel();
      this._aEmployees = JSON.parse(JSON.stringify(this._oModel.getProperty("/employees")));
    },

    onAdd: function () {
      const newId = Date.now().toString();

      // const newId = Math.floor(1000 + Math.random() * 9000).toString();

      this._aEmployees.push({ id: newId, name: "", department: "" });

      this._oModel.setProperty("/employees", this._aEmployees);
    },


    onSave: function () {

      MessageToast.show("Employee saved.");
    },


    onDelete: function (oEvent) {

      const oItem = oEvent.getSource().getParent().getParent();

      const oCtx = oItem.getBindingContext();

      const index = parseInt(
        oCtx.getPath().split("/")[2]);

      this._aEmployees.splice(index, 1);

      this._oModel.setProperty("/employees", this._aEmployees);
    },

    onSearch: function (oEvent) {
      const query = oEvent.getSource().getValue().toLowerCase();

      const filtered = this._aEmployees.filter(e => e.name.toLowerCase().includes(query));
      
      this._oModel.setProperty("/employees", filtered);
    },

    onFilter: function (oEvent) {
      const key = oEvent.getSource().getSelectedKey();

      const filtered = key ? this._aEmployees.filter(e => e.department === key) : this._aEmployees;

      this._oModel.setProperty("/employees", filtered);
      
    }
  });
});
