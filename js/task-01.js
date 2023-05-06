

const ul = document.querySelector('ul');
const ower = document.querySelectorAll('#categories')
const ulChildren = ul.childNodes;
 ulChildren.forEach((elem) => {
    const asasx = elem.value;
    console.log(asasx);
 })




// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5