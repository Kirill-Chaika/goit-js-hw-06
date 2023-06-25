const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngradients = document.querySelector('#ingredients');



const ListElementIngradients = ingredients => {
  return ingredients.map((ingredient) => {
    const listElementIngradients = document.createElement('li');
    listElementIngradients.classList.add('item');
    listElementIngradients.textContent = ingredient;
return listElementIngradients;
  });
}
const elements = ListElementIngradients(ingredients)
console.log(elements)
listIngradients.append(...elements)
console.log(listIngradients)


