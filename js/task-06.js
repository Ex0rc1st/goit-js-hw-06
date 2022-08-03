const textInputRef = document.querySelector('#validation-input');
textInputRef.addEventListener('blur', event => {
    if (event.target.value.length == textInputRef.getAttribute('data-length')) {
        textInputRef.classList.add('valid');
        if (textInputRef.classList.contains('invalid')) {
            textInputRef.classList.remove('invalid');
        }
    } else {
        if (textInputRef.classList.contains('valid')) {
            textInputRef.classList.remove('valid');
        }
        textInputRef.classList.add('invalid');
    }
});