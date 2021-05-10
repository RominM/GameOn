function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn"); /*Sup du deuxieme btn dans html et sup du All*/
const formData = document.querySelectorAll(".formData");
const cross = document.querySelector('.close');

// launch modal event
modalBtn.addEventListener("click", launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form 'X Button'
const closeModal = () => {
  modalbg.style.display = "none";
}
cross.addEventListener("click", closeModal);

//form
function validate() {

  var first = document.forms["reserve"]["first"].value;
  var last = document.forms["reserve"]["last"].value;
  var mail = document.forms["reserve"]["email"].value;
  var date = document.forms["reserve"]["birthdate"].value;
  var quantity = document.forms["reserve"]["quantity"].value;

  //PRENOM
  if (first != '') {
    if (first.match(/^([a-zA-Z ]+)$/)) {
      console.log("Le prénom est : " + first);
    } else {
      console.log("Wow wow wow ! C'est pas ce qu'on t'as demandé !");
      document.querySelector('#first').style.borderWidth = "2px";
      document.querySelector('#first').style.borderColor = "red";
      document.querySelector('#first').innerHTML = "";
      document.querySelector('#first').focus();
    }
  } else {
    console.log('Champs PRENOM est vide sheewee !');
  }
}

//NOM
if (last != '') {
  if (last.match(/^([a-zA-Z ]+)$/)) {
    console.log("Le nom est : " + last);
  } else {
    console.log("Le format n'est pas correct");
    document.querySelector('#last').style.borderWidth = "2px";
    document.querySelector('#last').style.borderColor = "red";
    document.querySelector('#last').innerHTML = "";
    document.querySelector('#last').focus();
  }
} else {
  console.log('Champs NOM est vide sheewee !');
}

//EMAIL
if (mail != '') {
  if (mail.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
    console.log("L'adresse email est : " + mail);
  } else {
    console.log("Le format n'est pas correct");
    document.querySelector('#email').style.borderWidth = "2px";
    document.querySelector('#email').style.borderColor = "red";
    document.querySelector('#email').innerHTML = "";
    document.querySelector('#email').focus();
  }
} else {
  console.log('Champs EMAIL est vide sheewee !');
}
