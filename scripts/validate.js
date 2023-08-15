import FormValidator from "./FormValidator.js";

const validators = {};

// function enableValidation(config) {
//   const forms = Array.from(document.querySelectorAll(config.formSelector));
  
//   forms.forEach(form => {
//     // setEventListeners(form, config);
//     const validator = new FormValidator(config, form);
//     validator.enableValidation();
//   });
// }

// export default enableValidation;

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach(form => {
    const validator = new FormValidator(config, form);
    validator.enableValidation();
    validators[form.getAttribute('name')] = validator;
  });
 }
 export { enableValidation, validators }