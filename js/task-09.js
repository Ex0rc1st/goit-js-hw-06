function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButtonRef = document.querySelector('button.change-color');
const bodyRef = document.querySelector('body');
const colorValueRef = document.querySelector('span.color');

changeButtonRef.addEventListener('click', e => {
  let color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorValueRef.textContent = color;
});
