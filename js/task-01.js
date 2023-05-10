


const CategoriesList = document.querySelectorAll('.item');
console.log('Number of categories: ', CategoriesList.length);


CategoriesList.forEach(element => {
console.log("Category:", element.firstElementChild.textContent);
console.log("Elements:", element.lastElementChild.childElementCount)
})