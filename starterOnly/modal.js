// // ========================//
// //       DOM ELEMENTS
// // ========================//

//ON RECUPERE L'ELEMENT "..." A PARTIR DU FICHIER HTMTL (document) ET ON LE NOMME.


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
const quantity = document.querySelector('#quantity'); //<input> Champs de reponse "Combien"
const submitBtn = document.querySelector('#submit'); //Boutton "c'est partie"

//ERROR
var error = document.querySelector('[data-error-visible="false"]');
console.log(error);

//DATE
const creatDate = () => {
   let inputDate = date.value;
   inputDate = inputDate.split('-')
   
   const year = inputDate[0];
   const month = inputDate[1];

   var nmbMois;

   if(month.includes("0") && month.startsWith("0")){

     nmbMois = month[1];
   }else{
      nmbMois = month;
   }

   const day = inputDate[2];
   const months = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
   const cleanDate = day + ' ' + (months[nmbMois-1]) + ' ' + year;
   console.log(cleanDate);
   return cleanDate;
}

// checkStatus
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
   city: {
      data: '',
      status: false
   },
   cgu: {
      status: false
   }
}

// ========================//
//  DECLARATIONS FONCTIONS
// ========================//

//Responsive
const editNav = () => {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
      x.className += " responsive";
   } else {
      x.className = "topnav";
   }
}

//Fonction check prénom
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

//Fonction check nom
const checkInputLastName = () => {
   if (lastName.value.length > 2) {
   
      document.querySelector('.error_lastname').innerHTML = '';
      state.lastName.data = lastName.value;
      state.lastName.status = true;
   } else {

      var test = document.querySelector('.error_lastname');
      test.classList.add(".formData");
     // document.querySelector('.error_lastname').innerHTML = 'Veuillez saisir un Nom';
      state.lastName.data = lastName.value;
      state.lastName.status = false;
   }
}

//Fonction check Email
const checkInputEmail = () => {
   if (email.value.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
      state.email.data = email.value;
      state.email.status = true;
   } else {
      state.email.data = email.value;
      state.email.status = false;
   }
}

// Fonction check date naissance
const checkInputDate = () => {
   if (date.value == '') {
      state.date.data = date.value;
      state.date.status = false;
   } else {
      state.date.data = creatDate();
      state.date.status = true;
   }
}

// //Fonction check ville
// //Fonction check cgu

//Fonction check status du formulaire
const checkStatus = () => {
   //semaine pro ;)
   console.log(state);
}

// launch modal form
const launchModal = () => {
   modalbg.style.display = "block";
}

// Close modal form 'X Button'
const closeModal = () => {
   modalbg.style.display = "none";
}

// Display error message
const displayError = () => {
   errorMsg.style.display = "block";
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

// //Message d'erreur
// errorMsg.forEach((Btn) => {
//    Btn.addEventListener('click', displayError)
// })

// submit form event
submitBtn.addEventListener('click', (event) => {
   event.preventDefault();


   // logique
   checkInputFirstName()
   checkInputLastName()
   checkInputEmail()
   checkInputDate()
   //...etc...
   checkStatus(state)

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