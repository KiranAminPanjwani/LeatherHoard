const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userData = {
    username: username.value,
    email: email.value,
    password: password.value
  };
  console.log(userData); // for testing purposes only
  form.reset();
});
