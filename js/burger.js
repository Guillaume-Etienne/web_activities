// Buger menu    /  Année automatique / / Toggle / Automatised Language Selector

// burger :

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
// var openBtn = document.getElementsByClassName("burger-icon")
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// année automatique
const date = new Date();
const year = date.getFullYear();
document.getElementById("activeyear").innerHTML = year;


// Toggle
const toggles = document.querySelectorAll('.toggle');
  toggles.forEach((toggle) => {
    const target = document.querySelector(toggle.getAttribute('data-target'));
    toggle.addEventListener('click', () => {
      target.classList.toggle('visible');
    });
  });


// language automatised selector

// Identifie and store selected language
const langSelector = document.getElementById('lang');
langSelector.addEventListener('click', function(event){
  // event.preventDefault()
  console.log('ça a cliqué ! la : '+ event.target)  
  var resultLang=event.target.toString() 

  if (resultLang.includes("es")){    
    localStorage.setItem("lang","es")
  }
  else if (resultLang.includes("en")){    
    localStorage.setItem("lang","en")
  }
  else{    
    localStorage.setItem("lang","fr")
  }
});

// detect and apply  -> on specific JS to work only on the index
