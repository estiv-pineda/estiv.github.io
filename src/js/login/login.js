document.getElementById('sign-up-btn').addEventListener('click', () => {
  document.querySelector('.container').classList.add('sign-up-mode');
});

document.getElementById('sign-in-btn').addEventListener('click', () => {
  document.querySelector('.container').classList.remove('sign-up-mode');
});

function validarRegistro() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const usuario = document.getElementById('usuario').value;
  const contrasenia = document.getElementById('contrasenia').value;

  if (nombre && correo && usuario && contrasenia) {
      // Guardar los datos en localStorage
      localStorage.setItem('usuario', JSON.stringify({ nombre, correo, usuario, contrasenia }));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      
      // Limpiar los campos
      document.getElementById('nombre').value = '';
      document.getElementById('correo').value = '';
      document.getElementById('usuario').value = '';
      document.getElementById('contrasenia').value = '';

      // Cambiar a modo inicio de sesión
      document.querySelector('.container').classList.remove('sign-up-mode');
      return false; // Evitar el envío del formulario
  } else {
      document.getElementById('mensajeRegistro').style.display = 'block';
      return false;
  }
}

function validarInicioSesion() {
  const usuario = document.getElementById('login-usuario').value;
  const contrasenia = document.getElementById('login-contrasenia').value;
  const storedUser = JSON.parse(localStorage.getItem('usuario'));

  if (storedUser && storedUser.usuario === usuario && storedUser.contrasenia === contrasenia) {
      // Limpiar los campos
      document.getElementById('login-usuario').value = '';
      document.getElementById('login-contrasenia').value = '';

      // Redirigir a otra página
      window.location.href = '../../public/sub/Sindex.html';
      return false; // Evitar el envío del formulario
  } else {
      document.getElementById('mensajeLogin').style.display = 'block';
      return false;
  }
}
