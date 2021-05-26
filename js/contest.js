window.onload = function(){
	
	//Get the elements from the document
	var buttonSpin = document.getElementById("btnSpin");
	var calavera1 = document.getElementById("calavera-1");
	var calavera2 = document.getElementById("calavera-2");
	var calavera3 = document.getElementById("calavera-3");
	var clear = false;
	
	//Button listener
	buttonSpin.onclick = spin;
	
	//This function changes the color of the calaveras each time the button is clicked - the logic won't allow for the three of them to have the same color, so the user will never win the contest
	function spin(){
		//Change the text of the button
		buttonSpin.innerHTML = "Try again!";
		
		//Initialize 3 random numbers between 1 and 5 (colors available for the calaveras)
		var number1 = randomNumber();
		var number2 = randomNumber();
		var number3 = randomNumber();
		
		//This is where the logic checks if the numbers are the same, then generates random numbers again and only exits if at least one of them is different
		while(number1 === number2 && number2 === number3){
			//Console log so we know if there was a winning combination
			console.log("Watch out! Execute Order 66");
			var number1 = randomNumber();
			var number2 = randomNumber();
			var number3 = randomNumber();
		}
		
		//Once we know for sure that the three colors are not the same, display the calaveras on the site
		changeColor(calavera1, number1);
		changeColor(calavera2, number2);
		changeColor(calavera3, number3);	
	}
	
	//This function changes the color of the calaveras on the site, using the image element and a color ID as parameters
	function changeColor(calavera, colorID){
		if(colorID === 1){
			calavera.src = "images/calavera-blue.png";
		}
		else if(colorID === 2){
			calavera.src = "images/calavera-green.png";
		}
		else if(colorID === 3){
			calavera.src = "images/calavera-red.png";
		}
		else if(colorID === 4){
			calavera.src = "images/calavera-white.png";
		}
		else if(colorID === 5){
			calavera.src = "images/calavera-yellow.png";
		}
	}
	
	//This function reutrns a random number between 1 and 5
	function randomNumber(){
		var number = Math.floor(Math.random() * 5) + 1;
		return number;
	}
	
}