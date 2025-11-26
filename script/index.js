document.addEventListener("DOMContentLoaded", () => {

  let isToggled = true;

  var skillButton = document.getElementById("skill-revealer");
  var body = document.getElementsByTagName("body")[0];
  var navbarMobile = document.getElementsByClassName("nav-mobile")[0];
  var navbarDesktop = document.getElementsByClassName("nav-cat-con")[0];

  /*animation des competences*/  
  document.getElementById("skill-revealer").addEventListener("click", () => {
        animateProgressBar("html", 50);
        animateProgressBar("css", 50);
        animateProgressBar("sql", 20);
        animateProgressBar("cpp", 60);
        document.getElementById("skill-revealer").disabled = true;
    });

  /*apparition de la barre de navigation*/
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function(){
    let currentPosition = window.scrollY;
    if (prevScrollpos > currentPosition)  
    {
      if(window.innerWidth <= 910){
        navbarMobile.style.top = "0";
      }
      else{
        navbarDesktop.style.top = "0";
      }
      
    }
    else
    {
      if(window.innerWidth <= 910){
        navbarMobile.style.top = "-80px";
      }
      else{
        navbarDesktop.style.top = "-80px";
      }
    }
    prevScrollpos = currentPosition;
  }

  /*gestion du menu hamburger*/
  document.getElementById("hamburgerMenu").addEventListener("click", ()=>{
    isToggled = toggleHamburgerMenu(isToggled);
  });

  /*desactivation du menu quand on agrandit l'écran*/
  var prevWidth = window.innerWidth;
  window.onresize = function(){
    let currentWidth = window.innerWidth;
    adjustNavBar(isToggled, prevWidth);
    prevScrollpos = currentWidth;
  }


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
};

function toggleHamburgerMenu(isToggled){
  let nav = document.getElementsByClassName("nav-cat-con")[0];
  if(isToggled){
    nav.style.visibility = "hidden";
    isToggled = false;
  }
  else{
    nav.style.visibility = "";
    isToggled = true;
  }

  return isToggled;
}

//manage screen size change
function adjustNavBar(isToggled, prevWidth){
  //when back to bigger width, if toggled untoggle)
  if(window.innerWidth > prevWidth && window.innerWidth>=910){
    let nav = document.getElementsByClassName("nav-cat-con")[0];
    nav.style.visibility = "";
    isToggled = false;
  } 
}





