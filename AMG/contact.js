// JavaScript source code
function contactLoad(executionContext) {
    //get formContext
    var formContext = executionContext.getFormContext();

    //get attribute data

    var fname = formContext.getAttribute("firstname").getValue();

    //set attribute data
   formContext.getAttribute("description").setValue("firstname is"+fname); 
}

function onEmailChange(executionContext) {
    //get formContext
    var formContext = executionContext.getFormContext();

    //alert
    alert("you have changed the email");

}

function onSSNUpdate(executionContext) {
    //get formContext
    var formContext = executionContext.getFormContext();

    var ssn = formContext.getAttribute("shub_ssn").getValue();

  
        if (isNaN(ssn) || ssn.length != 10) {
            //show field notification
            formContext.getControl("shub_ssn").setNotification("Enter proper number", "ssn_msg1");
            formContext.ui.setFormNotification("SSN should be 10 digit number", "WARNING", "ssn_msg2");
        } else {
            formContext.getControl("shub_ssn").clearNotification("ssn_msg1");
            formContext.ui.clearFormNotification("ssn_msg2");
        }
}

