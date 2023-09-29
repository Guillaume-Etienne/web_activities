// Buger menu    /  Année automatique / / Toggle / 

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

// --------------------- année automatique
const date = new Date();
const year = date.getFullYear();
document.getElementById("activeyear").innerHTML = year;


// ---------------------- Toggle
// Récupérez tous les boutons et le texte supplémentaire
const toggleButtons = document.querySelectorAll('.toggle-button');
const additionalTexts = document.querySelectorAll('.additional-text');

// Ajoutez un gestionnaire d'événements de clic à chaque bouton
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Affichez ou masquez le texte supplémentaire en fonction de son état actuel
        if (additionalTexts[index].style.display === 'none' || additionalTexts[index].style.display === '') {
            additionalTexts[index].style.display = 'block';
            button.textContent = ' < ';
        } else {
            additionalTexts[index].style.display = 'none';
            button.textContent = ' > ';
        }
    });
});
