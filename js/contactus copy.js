window.onload= function(){

    //vars for form and confirm message
	var form_handle = document.forms.form_contact;
	var inquiry_msg = document.getElementById("customer_msg");

	form_handle.onsubmit = process_form;

	function process_form(){

		//variables for all filed sets
        var form_name = form_handle.customer_id;
        var form_email = form_handle.customer_email;
        var form_postal =form_handle.customer_postal;

		//variables for custom message
        var custom_name = document.getElementById("thanks-customer");
        
		//validating name
		var RegEx_name = /[A-Z]/i;
		if (RegEx_name.test(form_name.value)){
			form_name.style.background = "white";
			

		} else {
			form_name.style.background = "red";
			form_name.focus();
			return false;
			
		}

		//validating customer email
		var RegEx_email = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i;
		if (RegEx_email.test(form_email.value)){
			form_email.style.background ="white";

		} else {

			form_email.style.background ="red";
			form_email.focus();
			return false;
		}
		

		//validating postal code
		var RegEx_postal= /\w\d\w\s?\d\w\d/i;
		if (!RegEx_postal.test(form_postal.value)){
			form_postal.style.background ="red";
			form_postal.focus();
			return false;

		} else {
			form_postal.style.background ="white";

		}
		
		//thank you message if all fields are valid
        inquiry_msg.style.display = "flex";
        

		//custom message:: name and customer id
		custom_name.innerHTML =  " " + form_name.value + " ";
        custom_name.style.color = "red";
        

		return false;

	}


  
    


}