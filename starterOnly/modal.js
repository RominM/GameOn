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
const contest = document.querySelector('#quantity'); //<input> Champs de reponse "Combien"
const submitBtn = document.querySelector('#submit'); //Boutton "c'est partie"

var radio = document.querySelector('.checkbox-input')
var checkBox = document.querySelector("#checkbox1");//CGU

//ERROR
var error = document.querySelectorAll('.formData[data-error-visible="true"]');

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
//______________________________________________
//FONCTION CHECK PRENOM_________________________
const checkInputFirstName = () => {
   if (firstName.value.length > 2) {
      state.firstName.data = firstName.value;
      state.firstName.status = true;
   } else {
      error = "true";
      state.firstName.data = firstName.value;
      state.firstName.status = false;
   }
}
//______________________________________________
//FONCTION CHECK NOM____________________________
const checkInputLastName = () => {
   if (lastName.value.length > 2) {
      state.lastName.data = lastName.value;
      state.lastName.status = true;
   } else {
      state.lastName.data = lastName.value;
      state.lastName.status = false;
   }
}
//______________________________________________
//FONCTION CHECK E-MAIL_________________________
const checkInputEmail = () => {
   if (email.value.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
      state.email.data = email.value;
      state.email.status = true;
   } else {
      state.email.data = email.value;
      state.email.status = false;
   }
}
//_______________________________________________
//FONCTION CHECK DATE DE NAISSANCE_______________
const checkInputDate = () => {
   if (date.value == '') {
      state.date.data = date.value;
      state.date.status = false;
   } else {
      state.date.data = creatDate();
      state.date.status = true;
   }
}
//_______________________________________________
//FONCTION CHECK PARTICIPATION TOURNOIS__________
const checkInputContest = () => {
   if (contest.value == '') {
      state.contest.data = contest.value;
      state.contest.status = false;
   } else {
      state.contest.data = data.value;
      state.contest.status = true;
   }
}
//_______________________________________________
// FONCTION CHECK VILLE__________________________
const checkInputCity = () => {

   if (radio.checked == true) {
      state.city.status = true;
      console.log("true");
   } else {
      state.city.status = false;
      console.log("false");
   }
}
// const checkInputCity = () => {
//    if () {
//       state.city.status = true;
//    } else {
//       state.city.status = false;
//    }
// }

//_______________________________________________
//FONCTION CHECK CGU_____________________________
const checkInputCgu = () => {

   if (checkBox.checked == true) {
      state.cgu.status = true;
      console.log("les cgu sont checked");
   } else {
      state.cgu.status = false;
      console.log("les cgu ne sont pas checked");
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
   error.display = "none";
}

// Close modal form 'X Button'
const closeModal = () => {
   modalbg.style.display = "none";
}

// Display error message
// const displayError = () => {
// error.style.display = "block";
// }
// // ========================
// //       DÉCLENCHEUR
// // ========================

// // launch modal event
modalBtn.forEach((Btn) => {
   Btn.addEventListener('click', launchModal)
})
// close modal event
cross.addEventListener("click", closeModal);

// //Message d'erreur
// error.forEach((Btn) => {
//    Btn.addEventListener('click', displayError)
// })

// submit form event
submitBtn.addEventListener('click', (event) => {
   event.preventDefault();


   // logique
   checkInputFirstName();
   checkInputLastName();
   checkInputEmail();
   checkInputDate();
   checkInputContest();
   checkInputCity();
   checkInputCgu();
   //...etc...
   checkStatus(state);

})





























// // //DOM => var
// // //DECLARATION FUNCTION => CONST NomDeLaFonction ... = () => {}
// // //

// // //STATE
// // //    var resultat = {
// // //    firstName: (
// // //       data : '';
// // //       status: false;
// // //    ),
// // //    lastName: (
// // //       data : '';
// // //       status: false;
// // //    ), 
// //       // email: (
// // //       data : '';
// // //       status: false;
// // //    ),
// // //    ... 
// // // }


// // //DECLANCHEUR addEventListener('click, (e) => )

// // // NomDeLaFonction()

// // //QUAND C'EST PAS BON :
// // // resultat.firstName.data = firstName.value
// // // resultat.firstName.status = false
// // //QUAND C'EST BON :
// // // resultat.firstName.data = firstName.value
// // // resultat.firstName.status = true