const counterValue = document.querySelector('#value');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

counterValue.textContent = 0;

incrementRef.addEventListener("click", () => {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
});

decrementRef.addEventListener("click", () => {
    counterValue.textContent = parseInt(counterValue.textContent) - 1;
});

