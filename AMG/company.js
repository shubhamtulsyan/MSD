// JavaScript source code
var Sdk = window.Sdk || {};

(function () {

    this.accountLoad = function (execContext) {
        var formContext = execContext.getFormContext();
        //Get countries
        Xrm.WebApi.retrieveMultipleRecords("shub_country", "?$select=shub_name").then(
            function success(result) {
                var desc = "";
                for (var i = 0; i < result.entities.length; i++) {
                    desc += result.entities[i].shub_name + " ";  
                    formContext.getAttribute("description").setValue(desc);
                }
                // perform additional operations on retrieved records
            },
            function (error) {
                console.log(error.message);
                // handle error conditions
            }
        );
    }
}).call(Sdk)