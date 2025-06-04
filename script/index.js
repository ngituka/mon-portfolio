function changeLocation() {
    const contact = document.getElementById("contactsLocation");
    if (contact) {
        contact.innerHTML = "in the footer";
    }
}

var estimatedPhoneWidth = 900;

if (screen.width <= estimatedPhoneWidth || window.innerHeight <= estimatedPhoneWidth) {
    changeLocation();
}

var skillButton = document.getElementById("skill-revealer");
var body = document.getElementsByTagName("body")[0];

document.addEventListener("DOMContentLoaded", () => {
  /*animation des competences*/  
  document.getElementById("skill-revealer").addEventListener("click", () => {
        animateProgressBar("html", 50);
        animateProgressBar("css", 50);
        animateProgressBar("sql", 20);
        animateProgressBar("cpp", 60);
        document.getElementById("skill-revealer").disabled = true;
    });

  /*apparition de la barre de navigation*/
  let previousPosition = window.scrollY;
  window.addEventListener('scroll', (event) => {
    console.log('Scroll event fired!');
    displayNavbar(previousPosition)
  });


});

// Animate progress bars
function animateProgressBar(progressElementID, targetValue) {
    const progress = document.getElementById(progressElementID);
    var value = 0;
    const TARGET_VALUE = targetValue;

    const interval = setInterval(() => {
        if (value >= TARGET_VALUE) {
            clearInterval(interval);
        } else {
            value += 0.5;
            progress.value = value;
        }
    }, 5);

    console.log("progress bars have been animated");
}

// Change background color
function switchPageTheme() {
    var Page = document.getElementsByTagName("body")[0];
    Page.style.backgroundColor = "red";
    console.log("color chanfged to red !");
}

function displayNavbar(previousPosition)
{
  let currentPosition = window.scrollY;
  if (previousPosition > currentPosition)
  {
    let navbar = document.getElementsByTagName("nav")[0];
    navbar.style.position = "fixed";
  }
  else
  {
    let navbar = document.getElementsByTagName("nav")[0];
    navbar.style.position = "sticky";
  }

  previousPosition = currentPosition;
}



