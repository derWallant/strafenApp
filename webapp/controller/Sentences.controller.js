sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/m/library"
], function(Controller, UIComponent, JSONModel, mobileLibrary) {
	"use strict";

	var URLHelper = mobileLibrary.URLHelper;

	return Controller.extend("sport.strafenApp.controller.Sentences", {
		onInit: function() {

			//this.getView().getModel().read("/Sentences",{
			var odataModel = this.getOwnerComponent().getModel();
			this.getView().setModel(odataModel);
			odataModel.read("/Sentences", {
				success: function(oRetrievedResult) { /* do something */ },
				error: function(oError) { /* do something */ }
			});

		}
	});
});