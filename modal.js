// ========================//
//       DOM ELEMENTS      //
// ========================//

//GLOBAL ELEMENTS
const modalbg = document.querySelector(".bground"); //bg formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); //Bouton "je m'inscris"

//FORM ELEMENTS
const formData = document.querySelectorAll(".formData"); //<div> du formulaire qui contient les <input>
const cross = document.querySelector('.close'); //croix pour fermer formulaire
const firstName = document.querySelector('#first'); //<input> prenom
const lastName = document.querySelector('#last'); //<input> nom
const email = document.querySelector('#email'); //<input> email
const date = document.querySelector('#birthdate'); //<input> Date
const contest = document.querySelector('#quantity'); //<input> Champs de reponse "Combien ?"
const city = document.querySelector('#city'); //<div> villes
const checkBox = document.querySelector("#checkbox1"); //CGU
const submitBtn = document.querySelector('#submit'); //Boutton "c'est partie"

var radio1 = document.querySelector('#location1'); //New York
var radio2 = document.querySelector('#location2'); //San Fransico
var radio3 = document.querySelector('#location3'); //Seattle
var radio4 = document.querySelector('#location4'); //Chicago
var radio5 = document.querySelector('#location5'); //Boston
var radio6 = document.querySelector('#location6'); //Portland


// 
//DATE*************************************************************************************************************************
const creatDate = () => {
   let inputDate = date.value;
   inputDate = inputDate.split('-')

   const year = inputDate[0];
   const month = inputDate[1];

   var nmbMois;
   if (month.includes("0") && month.startsWith("0")) {
      nmbMois = month[1];
   } else {
      nmbMois = month;
   }

   const day = inputDate[2];
   const months = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
   const cleanDate = day + ' ' + (months[nmbMois - 1]) + ' ' + year;
   console.log(cleanDate);
   return cleanDate;
}
//DATE*************************************************************************************************************************

//CHECK STATUS//
var state = {
   firstName: {
      data: '',
      status: false
   },
   lastName: {
      data: '',
      status: false
   },
   email: {
      data: '',
      status: false
   },
   date: {
      data: '',
      status: false
   },
   contest: {
      data: '',
      status: false
   },
   city: {
      name: '',
      status: false
   },
   cgu: {
      status: false
   }
}

// =======================//
// DECLARATIONS FONCTIONS //
// =======================//

//______________________________________________
//RESPONSIVE____________________________________
const editNav = () => {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
      x.className += " responsive";
   } else {
      x.className = "topnav";
   }
}

//_______________________________________________
//FONCTION ERROR_________________________________
// const displayError = (name, etat) => {
//    state.name.data = name.value;
//    state.name.status;
//    name.parentNode.setAttribute("data-error-visible", etat);
// }

//______________________________________________
//FONCTION CHECK PRENOM_________________________
const checkInputFirstName = () => {
   if (firstName.value.length > 2) {
      state.firstName.data = firstName.value;
      state.firstName.status = true;
      firstName.parentNode.setAttribute("data-error-visible", "false");
      // displayError(firstName, false);
   } else {
      state.firstName.data = firstName.value;
      state.firstName.status = false;
      firstName.parentNode.setAttribute("data-error-visible", "true");
      // displayError(firstName, true);
   }
}

//______________________________________________
//FONCTION CHECK NOM____________________________
const checkInputLastName = () => {
   if (lastName.value.length > 2) {
      state.lastName.data = lastName.value;
      state.lastName.status = true;
      lastName.parentNode.setAttribute("data-error-visible", "false");
      // displayError(lastName, false);
   } else {
      state.lastName.data = lastName.value;
      state.lastName.status = false;
      lastName.parentNode.setAttribute("data-error-visible", "true");
      // displayError(lastName, true);
   }
}

//______________________________________________
//FONCTION CHECK E-MAIL_________________________
const checkInputEmail = () => {
   if (email.value.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
      state.email.data = email.value;
      state.email.status = true;
      email.parentNode.setAttribute("data-error-visible", "false");
      // displayError(email, false);
   } else {
      state.email.data = email.value;
      state.email.status = false;
      email.parentNode.setAttribute("data-error-visible", "true");
      // displayError(email, true);
   }
}

//_______________________________________________
//FONCTION CHECK DATE DE NAISSANCE_______________
const checkInputDate = () => {
   if (date.value == '') {
      state.date.data = date.value;
      state.date.status = false;
      date.parentNode.setAttribute("data-error-visible", "true");
      // displayError(firstName, false);
   } else {
      state.date.data = creatDate();
      state.date.status = true;
      date.parentNode.setAttribute("data-error-visible", "false");
   }
}

//_______________________________________________
//FONCTION CHECK PARTICIPATION TOURNOIS__________
const checkInputContest = () => {
   
   if /*(Number.parseInt(contest.value) > 0 && isNaN(contest.value) &&*/(contest.value == '') {
      state.contest.data = contest.value;
      state.contest.status = false;
      contest.parentNode.setAttribute("data-error-visible", "true");
   } else {
      state.contest.data = contest.value;
      state.contest.status = true;
      contest.parentNode.setAttribute("data-error-visible", "false");
   }
}

//_______________________________________________
// FONCTION CHECK VILLE__________________________
const checkInputCity = () => {

   let radioBtn = document.querySelector('input[name=location]:checked');
   if (radioBtn.checked) {
      console.log(radioBtn.value);
      switch (radioBtn.value) {
      case "New York":
         console.log(radioBtn.value);
         state.city.status = true;
         state.city.name = radioBtn.value;
         city.setAttribute("data-error-visible", "false");
         break;
      case "San Francisco":
         state.city.status = true;
         state.city.name = radioBtn.value;
         city.setAttribute("data-error-visible", "false");
         break;
      case "Seattle":
         state.city.status = true;
         state.city.name = radioBtn.value;
         city.setAttribute("data-error-visible", "false");
         break;
      case "Chicago":
         state.city.status = true;
         state.city.name = radioBtn.value;
         city.setAttribute("data-error-visible", "false");
         break;
      case "Boston":
         state.city.status = true;
         state.city.name = radioBtn.value;
         city.setAttribute("data-error-visible", "false");
         break;
      case "Portland":
         state.city.status = true;
         state.city.name = radioBtn.value;
         city.setAttribute("data-error-visible", "false");
         break;
      default:
         break;
   }
} else {
   state.city.status = false;
         city.setAttribute("data-error-visible", "true");
         console.log('c\'est default')
}
}

//_______________________________________________
//FONCTION CHECK CGU_____________________________
const checkInputCgu = () => {

   if (checkBox.checked == true) {
      state.cgu.status = true;
      checkBox.parentNode.setAttribute("data-error-visible", "false");
   } else {
      state.cgu.status = false;
      checkBox.parentNode.setAttribute("data-error-visible", "true");
   }
}



//_______________________________________________
//FONCTION CHECK STATUS FORMULAIRE_______________
const checkStatus = () => {
   //semaine pro ;)
   console.log(state);
}

// launch modal form
const launchModal = () => {
   modalbg.style.display = "block";
   // error.setAttribute("data-error-visible", "false");
   // error.setAttribute("disabled", "");
}

// Close modal form 'X Button'
const closeModal = () => {
   modalbg.style.display = "none";
}


// // ========================
// //       DÉCLENCHEUR
// // ========================

// // launch modal event
modalBtn.forEach((Btn) => {
   Btn.addEventListener('click', launchModal)
})
// close modal event
cross.addEventListener("click", closeModal);

// submit form event
submitBtn.addEventListener('click', (event) => {
   //STOP FOR CHECK
   event.preventDefault();
   
   //ERROR
   // displayError();
   //PRENOM
   checkInputFirstName();
   //NOM
   checkInputLastName();
   //EMAIL
   checkInputEmail();
   //DATE
   checkInputDate();
   //TOURNOIS
   checkInputContest();
   //VILLE
   checkInputCity();
   //CGU
   checkInputCgu();
   //CHECK STATUS
   checkStatus(state);

})

// const globalCheck = () => {
//    //BOUCLE FOR (PAS DE FOREACH)
// }

