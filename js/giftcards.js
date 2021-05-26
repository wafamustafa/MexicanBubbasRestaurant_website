//onload function
window.onload = pageReady;
function pageReady(){
    //getting diiferent elements by its id attribute
    var submitForm = document.forms.booking_form;
    var giftcard = document.getElementById("giftcard");
    var hidden = document.getElementById("hidden");
    var receiver = document.getElementById("receiver");
    var sender = document.getElementById("sender");
    submitForm.onsubmit = buyCard;//event listener
    hidden.style.display = "none";//hidden message
    //function to buy gift card
    function buyCard(){
        
        //receivers email validation
        var emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if(!emailRegex.test(receiver.value)){
            receiver.style.background = "red";
            receiver.focus();
            return false;
        }
        else
        {
          receiver.style.background = "white";  
        }
        
        //Sender's email validation
        var emailRegex2 = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if(!emailRegex2.test(sender.value)){
            sender.style.background = "red";
            sender.focus();
            return false;
        }
        else
        {
          sender.style.background = "white";  
        }
        
        //Thanks message after ordering gift card
        submitForm.style.display = "none";
        hidden.style.display = "block";
        hidden.style.fontSize= "36px";
        hidden.style.fontStyle = "bold";
        return false;//prevent form to submit untill its not validated
    }//end of buyCard function
}//end of onload function