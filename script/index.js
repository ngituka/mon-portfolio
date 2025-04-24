/*
function changeLocation()
{
    document.getElementsByID("contactsLocation").innerHTML = "in the footer";
}

var estimatedPhoneWidth = 900;

if (screen.width <= estimatedPhoneWidth || window.innerHeight <= estimatedPhoneWidth)
{
    changeLocation();
}
*/

var skillButton = document.getElementById("skill-revealer");

document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("skill-revealer").addEventListener("click", () => {
        animateProgressBar("html", 50);
        animateProgressBar("css", 50);
        animateProgressBar("sql", 20);
        animateProgressBar("cpp", 60);
        document.getElementById("skill-revealer").disabled = "true";
    
    });
});

function animateProgressBar(progressElementID, targetValue){
    const progress = document.getElementById(progressElementID);
    var value = 0;
    const TARGET_VALUE = targetValue;
  
    const interval = setInterval(() => {
      if (value >= TARGET_VALUE) {
        clearInterval(interval); // stop when done
      } else {
        value+=0.5;
        progress.value = value;
      }
    }, 5); // speed: smaller = faster
}



