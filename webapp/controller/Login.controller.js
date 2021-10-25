sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/m/library"
], function(Controller, UIComponent, JSONModel, mobileLibrary) {
	"use strict";

	var URLHelper = mobileLibrary.URLHelper;

	return Controller.extend("sport.strafenApp.controller.Login", {
		onInit: function() {

			//this.getView().getModel().read("/Sentences",{
			var odataModel = this.getOwnerComponent().getModel();

		}
	});
});