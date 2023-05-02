import { iniciarCongoogle } from '../lib/authentication.js';
import { ingresar } from './app.js';

export const welcome = (navigate) => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const InputUser = document.createElement('input');
  const InputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const title2 = document.createElement('h2');
  const image = document.createElement('img');
  image.src = 'imagenes/dance.jpg';
  InputUser.placeholder = 'Email';
  InputPass.placeholder = 'Contraseña';
  InputPass.type = ('password');
  buttonLogin.textContent = 'Iniciar sesión';
  buttonRegister.textContent = 'Crear Cuenta';
  buttonGoogle.textContent = 'Acceder usando Google';
  buttonGoogle.id = 'google-signin-btn';
  title.textContent = 'DanceBody';
  title2.textContent = '¿Eres nuevo aqui? Registrate';

  buttonRegister.addEventListener('click', () => {
    navigate('/Register');
  });

  const seccion1 = document.createElement('div');
  seccion1.classList.add('seccion1');
  const seccion2 = document.createElement('div');
  seccion2.classList.add('seccion2');
  const seccion3 = document.createElement('div');
  seccion3.classList.add('seccion3');

  buttonLogin.addEventListener('click', () => {
    ingresar(InputUser, InputPass, navigate);
  });

  seccion1.append(InputUser, InputPass, buttonLogin);
  seccion2.append(title2, buttonRegister, buttonGoogle);
  seccion3.append(title, image);

  div.append(seccion3, seccion1, seccion2);
  buttonGoogle.addEventListener('click', () => {
    iniciarCongoogle(navigate);
  });
  return div;
};
