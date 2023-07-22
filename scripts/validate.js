function enableValidation (config) {
    const showInputError = (form, input) => {
        input.classList.add(config.inputErrorEditClass);
        const span = form.querySelector(`.${input.id}-error`);
        span.textContent = input.validationMessage;
        span.classList.add(config.errorClass);
    }
    const hideInputError = (form, input) => {
        input.classList.remove(config.inputErrorEditClass);
        const span = form.querySelector(`.${input.id}-error`);
        span.textContent = '';
        span.classList.remove(config.errorClass);
    }
    
    const isValid = (form, input) => {
        if (!input.validity.valid) {
            showInputError(form, input)
        }
        else {
            hideInputError(form, input)
        }
    }

    const hasInvalidValue = (inputs) => {
        return inputs.some(input => !input.validity.valid)
    }
    
    const toggleButtonState = (inputs, button) => {
        if (hasInvalidValue(inputs)) {
            button.classList.add(config.inputErrorEditClass);
            button.disabled = true;
        }
        else {
            button.classList.remove(config.inputErrorEditClass);
            button.disabled = false;
        }
    }
    
    const setInputEventListeners = (form) => {
        const inputs = Array.from(form.querySelectorAll(config.inputEditSelector));
        const button = form.querySelector(config.submitEditButtonSelector);

        toggleButtonState(inputs, button);
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                isValid(form, input)
                toggleButtonState(inputs, button);
            })
        })
    }
    
    const forms = Array.from(document.querySelectorAll(config.formEditSelector));
    
    forms.forEach(form => {
        setInputEventListeners(form)
    })
}


function enableAddValidation(config) {
    const showInputAddError = (form, input) => {
        input.classList.add(config.inputErrorAddClass);
        const span = form.querySelector(`.${input.id}-error`);
        span.textContent = input.validationMessage;
        span.classList.add(config.errorClass)
    }

    const hideInputAddError = (form, input) => {
        input.classList.remove(config.inputErrorAddClass);
        const span = form.querySelector(`.${input.id}-error`);
        span.textContent = '';
        span.classList.remove(config.errorClass)
    }

    const isAddValid = (form, input) => {
        if (!input.validity.valid || input.validity.typeMismatch) {
            showInputAddError(form, input)
        }
        else {
            hideInputAddError(form, input)
        }
    }

    const hasInvalidAddValue = (inputsAdd) => {
        return inputsAdd.some(input => !input.validity.valid)
    }

    const toggleButtonAddState = (inputsAdd, button) => {
        if (hasInvalidAddValue(inputsAdd)) {
            button.classList.add(config.submitAddButtonError);
            button.disabled = true;
        }
        else {
            button.classList.remove(config.submitAddButtonError);
            button.disabled = false;
        }
    }

    const setInputAddEventListeners = (form) => {
    const inputsAdd = Array.from(form.querySelectorAll(config.inputAddSelector));
    const inputsAddEmails = Array.from(form.querySelectorAll(config.inputAddSelector));
    const button = form.querySelector(config.submitAddButtonSelector);

    toggleButtonAddState(inputsAdd, button);
    inputsAdd.forEach(input => {
        input.addEventListener('input', () => {
            isAddValid(form, input);
            toggleButtonAddState(inputsAdd, button);
        })
     })

    inputsAddEmails.forEach(input => {
        input.addEventListener('input', () => {
            isAddValid(form, input);
        })
     })
    }
    
    const formsAdd = Array.from(document.querySelectorAll(config.formAddSelector));
    const formsEmail = Array.from(document.querySelectorAll(config.inputAddEmail));
    
    formsAdd.forEach(form => {
        setInputAddEventListeners(form);
    })

    formsEmail.forEach(form => {
        setInputAddEventListeners(form);
    })
}