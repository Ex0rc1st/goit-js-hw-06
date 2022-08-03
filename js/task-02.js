const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const list = [];

ingredients.forEach(ingredient => {
  const liRef = document.createElement('li');
  liRef.classList.add('item');
  liRef.textContent = ingredient;
  list.push(liRef);
});

ingredientsRef.append(...list);