// ========================//
//       DOM ELEMENTS      //
// ========================//

//GLOBAL ELEMENTS
const form = document.querySelector("#subscribe"); //formulaire
const modalbg = document.querySelector(".bground"); //bg formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); //Bouton "je m'inscris"
const modalbg2 = document.querySelector(".bground2"); //Page de remerciement
const formData = document.querySelectorAll(".formData"); //<div> du formulaire qui contient les <input>
const closeBtn = document.querySelector("#closeBtn"); //Bouton 'Fermer'
const cross = document.querySelectorAll('.close'); //croix pour fermer 'modal'

//FORM ELEMENTS
const firstName = document.querySelector('#first'); //<input> prenom
const lastName = document.querySelector('#last'); //<input> nom
const email = document.querySelector('#email'); //<input> email
const date = document.querySelector('#birthdate'); //<input> Date
const contest = document.querySelector('#quantity'); //<input> Champs de reponse "Combien ?"
const city = document.querySelector('#city'); //<div> villes
const checkBox = document.querySelector("#checkbox1"); //CGU
const checkBox2 = document.querySelector("#checkbox2") //Option Newsletter
const submitBtn = document.querySelector('#submit'); //Boutton "c'est partie"

var radio1 = document.querySelector('#location1'); //New York
var radio2 = document.querySelector('#location2'); //San Fransico
var radio3 = document.querySelector('#location3'); //Seattle
var radio4 = document.querySelector('#location4'); //Chicago
var radio5 = document.querySelector('#location5'); //Boston
var radio6 = document.querySelector('#location6'); //Portland

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
      data: '',
      status: false
   },
   cgu: {
      status: false
   },
   newsletter: {
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
// const displayError = (input, etat) => {
//    let name = input.name;//recupere le name dans l'input de l'html
//    let data = state[name]['data'];//recupere la data de l'objet state de l'input referent
//    let status = state[name]['status'];//recupere le status de l'objet state de l'input referent

//    data = input.value;//state.firstName.data = firstName.value;
//    status  = !etat;//state.firstName.status = true; (le "!" inverse l'etat du parametre)

//    input.parentNode.setAttribute("data-error-visible", etat);// firstName.parentNode.setAttribute("data-error-visible", "false");
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
firstName.addEventListener('input', checkInputFirstName);

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
lastName.addEventListener('input', checkInputLastName);

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
email.addEventListener('input', checkInputEmail);

//_______________________________________________
//FONCTION CHECK DATE DE NAISSANCE_______________
const checkInputDate = () => {
   if (date.value == '') {
      state.date.data = date.value;
      //       // state.date.status = false;
      date.parentNode.setAttribute("data-error-visible", "true");
      // displayError(date, false);
   } else {
      state.date.data = creatDate();
      state.date.status = true;
      date.parentNode.setAttribute("data-error-visible", "false");
      // displayError(date, true);
   }
}

date.addEventListener('input', checkInputDate);

//_______________________________________________
//FONCTION CHECK PARTICIPATION TOURNOIS__________
const checkInputContest = () => {

   if (contest.value == '' || contest.value <= 0 || contest.value > 99) {
      state.contest.data = contest.value;
      state.contest.status = false;
      contest.parentNode.setAttribute("data-error-visible", "true");
      // displayError(contest, false);
   } else {
      state.contest.data = contest.value;
      state.contest.status = true;
      contest.parentNode.setAttribute("data-error-visible", "false");
      // displayError(contest, true);
   }
}
contest.addEventListener('input', checkInputContest);

//_______________________________________________
// FONCTION CHECK VILLE__________________________
const checkInputCity = () => {

   let radioBtn = document.querySelector('input[name=location]:checked');
   if (radioBtn != null && radioBtn.checked) {
      // console.log(radioBtn.value);
      switch (radioBtn.value) {
         case "New York":
            state.city.status = true;
            state.city.data = radioBtn.value;
            city.setAttribute("data-error-visible", "false");
            // displayError(city.value, false);
            break;
         case "San Francisco":
            state.city.status = true;
            state.city.data = radioBtn.value;
            city.setAttribute("data-error-visible", "false");
            // displayError(city.value, false);
            break;
         case "Seattle":
            state.city.status = true;
            state.city.data = radioBtn.value;
            city.setAttribute("data-error-visible", "false");
            // displayError(city.value, false);
            break;
         case "Chicago":
            state.city.status = true;
            state.city.data = radioBtn.value;
            city.setAttribute("data-error-visible", "false");
            // displayError(city.value, false);
            break;
         case "Boston":
            state.city.status = true;
            state.city.data = radioBtn.value;
            city.setAttribute("data-error-visible", "false");
            // displayError(city.value, false);
            break;
         case "Portland":
            state.city.status = true;
            state.city.data = radioBtn.value;
            city.setAttribute("data-error-visible", "false");
            // console.log(radioBtn);
            // console.log(radioBtn.value);
            // displayError(city.value, false);
            break;
         default:
            break;
      }
   } else {
      state.city.status = false;
      city.setAttribute("data-error-visible", "true");
      // console.log(state);
      // console.log(radioBtn);
      // displayError(city.value, true);
   }
}

city.addEventListener('input', checkInputCity);

//_______________________________________________
//FONCTION CHECK CGU_____________________________
const checkInputCgu = () => {

   if (checkBox.checked == true) {
      state.cgu.status = true;
      checkBox.parentNode.setAttribute("data-error-visible", "false");
      // displayError(checkBox, false);
   } else {
      state.cgu.status = false;
      checkBox.parentNode.setAttribute("data-error-visible", "true");
      // displayError(checkBox, true);
   }
}

checkBox.addEventListener('input', checkInputCgu);

//_______________________________________________
//FONCTION CHECK NEWSLETTRE______________________
const checkNewsLetter = () => {

   if (checkBox2.checked) {
      state.newsletter.status = true;
   } else {
      state.newsletter.status = false;
   }
}

//_______________________________________________
//FONCTION CHECK STATUS FORMULAIRE_______________
const checkStatus = () => {
   console.log(state);
}

// launch modal form
const launchModal = () => {
   modalbg.style.display = "block";
}


// launch modal form
const launchValid = () => {
   modalbg2.style.display = "block";
   form.reset();//vide formulaire
}

// Close modal form 'X Button'
const closeModal = () => {
   modalbg.style.display = "none";
   modalbg2.style.display = "none";
}

const closeThxPage = () => {
   modalbg2.style.display = "none";
}

const globalCheck = () => {
   var estValide = false;

   for (let object in state) {
      if (object !== 'newsletter') {
         let status = state[object]['status'];
         if (status == false) {
            estValide = false;
            break;
         } else {
            estValide = true;
         }
      }
   }

   if (estValide == true) {
      closeModal();
      launchValid();
   }
   return estValide;
}

// // ========================
// //       DÉCLENCHEUR
// // ========================

// // launch modal event
modalBtn.forEach((Btn) => {
   Btn.addEventListener('click', launchModal)
})
// close modal event
cross.forEach((Span) => {
   Span.addEventListener("click", closeModal);
})

// close thxPage
closeBtn.addEventListener("click", closeThxPage);

// submit form event
submitBtn.addEventListener('click', (event) => {
   //STOP FOR CHECK
   event.preventDefault();
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
   //NEWSLETTRE
   checkNewsLetter();
   //CHECK STATUS
   checkStatus(state);
   //VALIDATION
   globalCheck();

})