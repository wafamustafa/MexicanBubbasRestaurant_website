
// This Code was referenced from https://www.w3schools.com/howto/howto_js_slideshow.asp on December 12, 2020 //

// Set the initial slide index.
// This variable will be used to keep track of the current slide.
var slideIndex = 1;

// Call the function with the first slide index.
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// This function shows slide number n.
// n is the next slide to show.
function showSlides(n) {

    // Get all the divs for the slides. This will be an array.
    var slides = document.getElementsByClassName("pictures-fade");

    //  The dots show which slide you're on. They also act as little buttons for each slide.
    var dots = document.getElementsByClassName("dots");

    // If n is larger than the number of slides, loop back around to the first slide.
    if (n > slides.length) {slideIndex = 1}

    // If n is less than 1, loop around the other way to the last slide.
    if (n < 1) {slideIndex = slides.length}

    // Set the display of all the slides to none.
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Set all the dots to be inactive.
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show only the slide that was requested.
    slides[slideIndex-1].style.display = "block";

    // Make only the corresponding dot active.
    dots[slideIndex-1].className += " active";
}

window.onload = function () {
    // will go to next slide when the next button is clicked on
    var nextButton = document.getElementById("next");
    nextButton.onclick = function () {
        plusSlides( 1 );
    }
    // will go back 1 slide when the back button is clicked
    var backButton = document.getElementById("back");
    backButton.onclick = function () {
        plusSlides( -1 );
    }
  }