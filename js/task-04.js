// Створи змінну counterValue, 
// в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок,
//  всередині яких збільшуй або зменшуй значення лічильника.

//  Оновлюй інтерфейс новим значенням змінної counterValue.





let counterValue = 0;
const valueCounet = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', () =>{
    counterValue -= 1;
    valueCounet.textContent = counterValue;
});
const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', () =>{
    counterValue += 1;
    valueCounet.textContent = counterValue;
})