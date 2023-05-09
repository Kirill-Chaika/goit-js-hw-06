const addCategoties = document.querySelectorAll('.item h2, li')
// console.log(addCategoties)

const ulEl = []
const h2El = []

addCategoties.forEach(element => {
   if (element === h2){
      console.log(h2El.push(element))
   } else console.log(ulEl.push(element))
});

console.log(ulEl)
console.log(h2El)
