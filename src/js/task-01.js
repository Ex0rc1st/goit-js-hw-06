const categoriesRef = document.querySelector('#categories');
const itemsRef = document.querySelectorAll('.item');

console.log('Number of categories:', itemsRef.length);
console.log('');

itemsRef.forEach(item => {
    const itemHeader = item.querySelector('h2');
    const itemList = item.querySelectorAll('li');

    console.log('Category:', itemHeader.textContent);
    console.log('Elements:', itemList.length);
    console.log('');
});