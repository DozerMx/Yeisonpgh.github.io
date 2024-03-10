const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === 'Yeison0' && password.value === 'TheGame') {
    alert('Inicio de sesión perfecto!');
  } else {
    alert('Usuario o contraseña incorretos.');
  }
});
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password') {
    window.location.href = 'dashboard.html';
  } else {
    
  }
});