//onload function
window.onload = pageReady;
function pageReady(){
   
    // Getting diiferent elements by the Id attribute
    var hiddenMsg = document.getElementById("hiddenMsg");
    var submit = document.getElementById("submit");
    var booking_form = document.forms.booking_form;
    var bookingId = document.getElementById("bookingId");
    var clientName = document.getElementById("clientName");
    var bookingDate = document.getElementById("bookingDate");
    var section_2 = document.getElementsByClassName("section_2");
    var pastEvent = document.getElementById("pastEvent");
    var flexContainer = document.getElementById("flex-container");
    
    //hidden message
    hiddenMsg.style.display = "none";
    //hidden gallery
    flexContainer.style.display = "none";
    
    //function to submit form
    submit.onclick = formsubmit;
    function formsubmit(){
        //get diiferent values of form by Id attribute
        var getFname = document.getElementById("txt_1");
        var getLname = document.getElementById("txt_2");
        var getemail =document.getElementById("email");
        var getphone = document.getElementById("phone");
        var getdate = document.getElementById("date"); 
        var gettime = document.getElementById("time");
        var getguest = document.getElementById("guest");
        var getoccassion = document.getElementById("occassion");
        
        //First name validation
        if(getFname.value === "" || getFname.value === null){
            getFname.style.background = "red"; 
            getFname.focus();
            return false;
        } 
        else 
        {
            getFname.style.background = "white";
        }
        
        //last name validation 
        if(getLname.value === "" || getLname.value === null){
            getLname.style.background = "red"; 
            getLname.focus();
            return false;
        } 
        else 
        {
            getLname.style.background = "white";
        }
        
        //Email validation
        var emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if(!emailRegex.test(getemail.value)){
            getemail.style.background = "red";
            getemail.focus();
            return false;
        }
        else
        {
          getemail.style.background = "white";  
        }
        
        //Phone validation
        var phoneRegex = /^\(?([ 0-9]{3})\)?[-. ]?([ 0-9]{3})[-. ]?([ 0-9]{4})$/;
        if(!phoneRegex.test(getphone.value)){
            getphone.style.background = "red";
            getphone.focus();
            return false;
        }
        else
        {
          getphone.style.background = "white";  
        }
        
        //Event Date validation
        var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if(!dateRegex.test(getdate.value)){
            getdate.style.background = "red";
            getdate.focus();
            return false;
        }
        else
        {
          getdate.style.background = "white";  
        }
        
         //Time validation
        if(gettime.value === "" || gettime.value === null){
            gettime.style.background = "red"; 
            gettime.focus();
            return false;
        } 
        else 
        {
            gettime.style.background = "white";
        }
        
        //Guest validation
        var guestRegex = /^\d{3}$/;
        if(!guestRegex.test(getguest.value)){
            getguest.style.background = "red";
            getguest.focus();
            return false;
        }
        else
        {
          getguest.style.background = "white";  
        }
        
        //ocassion validation
        if(getoccassion.value === "" || getoccassion.value === null){
            getoccassion.style.background = "red"; 
            getoccassion.focus();
            return false;
        } 
        else 
        {
            getoccassion.style.background = "white";
        }
        
        //Thanks message after submission of the event booking form
        clientName.innerHTML = "#"+getFname.value + " "+ getLname.value;
        clientName.style.color = "red"
        bookingDate.innerHTML = "#"+getdate.value;
        bookingDate.style.color = "red";
        bookingId.innerHTML = "#"+Math.floor(Math.random() * 3000) + 1;
        bookingId.style.color = "red";
        hiddenMsg.style.display = "block";
        hiddenMsg.style.fontSize = "40px";
        booking_form.style.display = "none";
        return false;//Prevent form from submission untill its not validated
    }
    
    pastEvent.onclick = showEvent;
    //Function to display the past events
    function showEvent(){
        flexContainer.style.display = "flex";
    }//end of showEvent function
}//end of onload function