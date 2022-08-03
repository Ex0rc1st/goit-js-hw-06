function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const inputNumRef = document.querySelector('#controls>input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = amount => {
  const elementsToAdd = []
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
};

btnCreateRef.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNumRef.value);
  boxesRef.append(...boxesToAdd);
});

btnDestroyRef.addEventListener('click', () => {
  destroyBoxes.call();
});
