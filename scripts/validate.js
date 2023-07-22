function enableValidation (config) {
    const showInputError = (form, input) => {
        input.classList.add(config.inputErrorEditClass);
        const span = form.querySelector(`.${input.id}-error`);
        console.log(span);
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
    
    const setInputEventListeners = (form) => {
        const inputs = Array.from(form.querySelectorAll(config.inputEditSelectorName));

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                isValid(form, input)
            })
        })
    }
    
    const forms = Array.from(document.querySelectorAll(config.formEditSelector));
    
    forms.forEach(form => {
        setInputEventListeners(form)
    })
}