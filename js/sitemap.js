window.onload = function (){

    
    var x = document.querySelector('#mybutton');
    x.addEventListener('click', function shakeIt() {
        
  var element = document.getElementById("sitemap-wrapper");
  element.classList.add("effect");
  x.innerHTML = "STOP";
  
})
     var x = document.querySelector('#mybutton');   
    x.addEventListener('mouseleave', function stopIt(){
        
        var element = document.getElementById("sitemap-wrapper");
        element.classList.remove("effect");
        x.innerHTML = "SHAKE IT";
    });
    
}   