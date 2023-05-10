// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.

// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//  що всі поля повинні бути заповнені.

//  Якщо користувач заповнив усі поля і відправив форму, 
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//  а значення поля - значенням властивості. 

//  Для доступу до елементів форми використовуй властивість elements.

//  Виведи об'єкт із введеними даними в консоль 
// і очисти значення полів форми методом reset.


const form = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };
   if (!formData.email || !formData.password)
     alert("All fields must be filled!");
   else {
   console.log(formData);
     event.currentTarget.reset();
   }
}
form.addEventListener('submit', onFormSubmit)
