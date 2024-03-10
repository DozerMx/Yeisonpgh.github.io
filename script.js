function closeAlert() {
  document.getElementById('custom-alert').classList.add('hidden');
}

function showAlert() {
  document.getElementById('custom-alert').classList.remove('hidden');
}

const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === 'Yeison0' && password.value === 'TheGame') {
    alert('¡Inicio de sesión perfecto!');
  } else {
    showAlert();
  }
});
