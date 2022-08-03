const inputChangeRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

inputChangeRef.addEventListener('change', e => {
    textRef.style.fontSize = `${e.target.value}px`;
});