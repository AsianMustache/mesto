import FormValidator from "../scripts/FormValidator.js";

const validators = {};

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach(form => {
    const validator = new FormValidator(config, form);
    validator.enableValidation();
    validators[form.getAttribute('name')] = validator;
  });
 }
 export { enableValidation, validators }