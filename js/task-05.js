const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', event => {
    nameOutputRef.textContent = event.target.value;

    if (event.target.value === '') {
        nameOutputRef.textContent = 'Anonymous';
    }
});