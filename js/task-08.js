const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('All fields must be filled!');
    }
    const userDetails = { email: email.value, Password: password.value };
    
    console.log(userDetails);
    event.currentTarget.reset();
};