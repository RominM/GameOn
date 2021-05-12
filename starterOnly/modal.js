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
//open form
const modalBtn = document.querySelector(".modal-btn"); /*Sup du deuxieme btn dans html et sup du All*/
//fileds container
const formData = document.querySelectorAll(".formData");
//cross to close form
const cross = document.querySelector('.close');

// let message = document.querySelector('.formData');
//         let style = getComputedStyle(message);

//         console.log('color:', style.color);
//         console.log('background color:', style.backgroundColor);

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

/******************************************************************************************************************************/
//1ER ESSAI

// form
function validate() {

   var firstName = document.forms["reserve"]["first"].value;
   var last = document.forms["reserve"]["last"].value;
   var mail = document.forms["reserve"]["email"].value;
   var date = document.forms["reserve"]["birthdate"].value;
   var quantity = document.forms["reserve"]["quantity"].value;
   var filedEmpty = 'Veuillez replire le champs';
   var filedWrong = 'Saisir au format ';

   //PRENOM
   if (firstName != '') {
      
      if (firstName.match(/^([a-zA-Z ]+){2,}$/)) {
         console.log("Le prénom est : " + firstName);
         document.querySelector('#first').style.border = "none";
         document.querySelector('#first').innerHTML = '';
      } else {
         console.log("Prénom : Wow wow wow ! C'est pas ce qu'on t'as demandé !");
         document.querySelector('#first').style.borderWidth = "2px";
         document.querySelector('#first').style.borderColor = "red";
         document.querySelector('.error').innerHTML = filedWrong + '2 lettres au minimum';
         document.querySelector('#first').focus();
         return false;
      }
   } else {
      //CHAMPS VIDE
      document.querySelector('.error').innerHTML = filedEmpty;
      console.log(filedEmpty);
      console.log('Le champs PRENOM est vide sheewee !');
   }


   //NOM
   if (last != '') {
      if (last.match(/^([a-zA-Z ]+){2,}$/)) {
         console.log("Le nom est : " + last);
         document.querySelector('#last').style.border = "none";
      } else {
         console.log("Nom :Heu... Tu plaisantes ?");
         document.querySelector('#last').style.borderWidth = "2px";
         document.querySelector('#last').style.borderColor = "red";
         document.querySelector('#last').value = "";
      }
   } else {
      console.log('Champs NOM est vide sheewee !');
   }

   //EMAIL
   if (mail != '') {
      if (mail.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
         console.log("L'adresse email est : " + mail);
         document.querySelector('#email').style.border = "none";
      } else {
         console.log("Email : Là t'éxagère...");
         document.querySelector('#email').style.borderWidth = "2px";
         document.querySelector('#email').style.borderColor = "red";
         document.querySelector('#email').innerHTML = "";
      }
   } else {
      console.log('Champs EMAIL est vide sheewee !');
   }
}

/*****************************************************************************************************************************/
//2EME ESSAI

// function validate() {

//    let form = document.querySelector('#subscribe');
//    let submit = document.querySelector('.submit');
//    let input = document.querySelector('input');

//    let firstName = document.querySelector('#first');
//    let lastName = document.querySelector('#last');
//    let email = document.querySelector('#email');
//    let birth = document.querySelector('#birthdate');
//    let howMany = document.querySelector('#quantity');

//    let filedWrong = 'Saisir au format ';
//    let filedEmpty = 'Veuillez replire le champs';

//    // if (form != "") {
//    if (firstName != '') {
//       if (firstName.match(/^([a-zA-Z ]+){2,}$/)) {
//          console.log("Le prénom est : " + firstName);
//          document.querySelector('#first').style.border = "none";
//          document.querySelector('#first').innerHTML = '';
//       } else {
//          console.log("Prénom : Wow wow wow ! C'est pas ce qu'on t'as demandé !");
//          document.querySelector('#first').style.borderWidth = "2px";
//          document.querySelector('#first').style.borderColor = "red";
//          document.querySelector('.error').innerHTML = filedWrong + '2 lettres au minimum';
//          document.querySelector('#first').focus();
//          return false;
//       }
//    } else {
//       /*CHAMPS VIDE*/
//       document.querySelector('.error').innerHTML = filedEmpty;
//       console.log(filedEmpty);
//       console.log('Le champs PRENOM est vide sheewee !');
//    }
// }
// } else {
//    console.log(vide);
// }
// }
/*****************************************************************************************************************************/
//[attr]
// this.object.parentNode.setAttribute('data-error-visible', 'true');
// this.object.parentNode.setAttribute('data-error', errorMessage);

// // Open menu on mobile
// const topbar = document.getElementById("myTopnav");
// topbar.addEventListener('click', () => {
//     if (topbar.className === "topnav") {
//         topbar.className += " responsive";
//     } else {
//         topbar.className = "topnav";
//     }
// });

// // One modal form called indexForm, with the data needed
// const indexForm = new modalForm('.formData', '.btn-submit', '.bground', '.modal-btn');

// // #####################
// // modalForm constructor
// // #####################
// function modalForm(formData, formConfirmButton, formModal, modalOpenButtons) {
//     // arguments passed to the form constructor
//     this.form = form;
//     this.form(formData, formConfirmButton);
//     // Take the DOM elements needed
//     this.modal = document.querySelector(formModal);
//     this.openButtons = document.querySelectorAll(modalOpenButtons);
//     this.closebuttons = this.modal.querySelectorAll('.close');
//     // Listen to one or more buttons to make the modal appear
//     this.openButtons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             this.modal.style.display = "block";
//         });
//     });
//     // Listen to one or more buttons to make the modal disappear
//     this.closebuttons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             this.modal.style.display = "none";
//         });
//     });
// }

// // ################
// // Form constructor
// // ################
// function form(formData, formConfirmButton) {
//     // Take the DOM elements needed
//     this.data = [...document.querySelectorAll(formData + ' input')];
//     this.confirmButton = document.querySelector(formConfirmButton);
//     // Wait for confirm button and send form data for validation
//     this.confirmButton.addEventListener('click', ($event) => {
//         // prevent HTML event
//         $event.preventDefault();

//         // clean deprecated erros
//         this.hideErrors(this.data);

//         // isValid'll be true if all element validations return true

//         const elements = [];
//         this.data.forEach(object => {
//             let el;
//             // create an element instance based on the type of object
//             switch (object.type) {
//                 case 'text':
//                     el = new elementText(object);
//                     break
//                 case 'email':
//                     el = new elementEmail(object);
//                     break
//                 case 'date':
//                     el = new elementDate(object);
//                     break
//                 case 'number':
//                     el = new elementNumber(object);
//                     break
//                 case 'radio':
//                     el = new elementRadio(object);
//                     break
//                 case 'checkbox':
//                     el = new elementCheckbox(object);
//                     break
//                 default:
//                     el = new element(object);
//             }
//             elements.push(el);
//         });

//         let isValid = elements.every((element) => {
//             return element.isValid()
//         });

//         // If the form isValid, then send confirmation
//         if (isValid) {
//             let formBody = document.querySelector('.modal-body');
//             let formSuccess = document.querySelector('.modal-success');
//             formSuccess.style.minHeight = formBody.clientHeight + "px";
//             formBody.style.display = 'none';
//             formSuccess.style.display = 'flex';
//         }
//     });
//     // hide all form's erros
//     this.hideErrors = function (data) {
//         data.forEach((object) => {
//             object.parentNode.setAttribute('data-error-visible', 'false');
//         });
//     };
// };

// // ###################
// // Element constructor
// // ###################
// class element {
//     constructor(object) {
//         this.object = object;
//     };
//     // default isValid() is not supposed to be used, so it return false
//     // if you are using a new type form element, you probably want to
//     // create a new elementChild with a specific isValid()
//     isValid() {
//         console.log("Element: " + this.object + " non reconnu.")
//         console.log(this.object.type)
//         return false;
//     }
//     // displayError on an invalid element
//     displayError(errorMessage) {
//         this.object.parentNode.setAttribute('data-error-visible', 'true');
//         this.object.parentNode.setAttribute('data-error', errorMessage);
//     };
// };

// class elementText extends element {
//     isValid() {
//         if (this.object.value.length >= 2) {
//             return true;
//         } else {
//             this.displayError('Doit contenir plus de deux caractères.');
//             return false;
//         }
//     }
// }

// class elementEmail extends element {
//     isValid() {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (re.test(String(this.object.value).toLowerCase())) {
//             return true;
//         } else {
//             this.displayError('Doit être une adresse email valide.');
//             return false;
//         };
//     };
// };

// class elementDate extends element {
//     isValid() {
//         if (isNaN(this.object.value)) {
//             return true;
//         } else {
//             this.displayError('La date n\'est pas valide.');
//             return false;
//         };
//     };
// };

// class elementNumber extends element {
//     isValid() {
//         if (/^\d+$/.test(String(this.object.value))) {
//             return true;
//         } else {
//             this.displayError('Doit être un nombre entier.');
//             return false;
//         }
//     };
// };

// class elementRadio extends element {
//     isValid() {
//         // check if one of the siblings (radio buttons with the same name) is checked
//         if (document.querySelectorAll('[name="' + this.object.name + '"]:checked').length > 0) {
//             return true;
//         } else {
//             this.displayError('Vous devez selectionner une option.');
//             return false;
//         };
//     };
// };

// class elementCheckbox extends element {
//     isValid() {
//         // Only check if checked if the chckbox is required
//         if (this.object.required) {
//             if (this.object.checked) {
//                 return true;
//             } else {
//                 this.displayError('Vous devez accepter les conditions d\'utilisation.');
//                 return false;
//             };
//         } else {
//             return true;
//         };
//     };
// };