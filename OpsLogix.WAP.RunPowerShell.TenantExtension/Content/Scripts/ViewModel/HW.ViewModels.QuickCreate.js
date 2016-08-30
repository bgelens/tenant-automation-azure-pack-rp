﻿/// <disable>JS2076.IdentifierIsMiscased</disable>
(function (global, $, undefined) {
    "use strict";

    // Variables    
    var subscriptions;
    var subscriptionId ;
    var fileShareName;
    var size;
    var fileServerName;

    function QuickCreateViewModel() {
        this.subscriptions = this.getSubscriptions();
        this.subscriptionId = this.subscriptions.length ? this.subscriptions[0].id : null;
        _selectors = {
            container: "#rps-create-fileshare-container",
            fileShareName: "#fileShareName",
            size: "#size",
            subscriptions: "#subscriptions",
            fileServerName: "#fileServerName"
        }
    }
    
    function onOpened() {
        // using AppExtension subscription drop down as it handles disabled and single subscriptions properly
        global.AppExtension.UserContext.populateOrHideSubscriptionsDropDown("subscriptions", null, null, null, null, "runpowershell");
    }

    // Public Methods
    function onOkClicked() {
        global.RunPowerShellTenantExtension.Controller.createFileShare(this.subscriptionId, this.fileShareName, this.size, this.fileServerName);
    }

    function getSubscriptions() {
        return global.Exp.Rdfe.getSubscriptionsRegisteredToService(global.RunPowerShellTenantExtension.serviceName);
    }

    global.RunPowerShellTenantExtension = global.RunPowerShellTenantExtension || {};
    global.RunPowerShellTenantExtension.ViewModels = {
        QuickCreateViewModel: QuickCreateViewModel,
        onOpened: onOpened,
        onOkClicked: onOkClicked
    };
})(jQuery, this);