export const Register = (navigate) => {
  const div = document.createElement('div');
  const InputName = document.createElement('Input');
  const InputPassword = document.createElement('Input');
  const Inputrepeat = document.createElement('Input');
  const title = document.createElement('h2');
  const title2 = document.createElement('h2');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');

  const image = document.createElement('img');

  image.src = 'imagenes/dance.jpg';

  InputName.placeholder = ('Usuario');
  InputPassword.placeholder = ('Contraseña');
  Inputrepeat.placeholder = ('Repita la contraseña');
  button.textContent = 'Registrarte';
  buttonBack.textContent = 'Inicia sesión';
  title.textContent = 'Bienvenido registrarte es rápido y fácil';
  title2.textContent = '¿Ya tienes una cuenta?';

  buttonBack.addEventListener('click', () => {
    navigate('/');
  });

  const seccion1 = document.createElement('div');
  seccion1.classList.add('seccion1');
  const seccion2 = document.createElement('div');
  seccion2.classList.add('seccion2');
  const seccion3 = document.createElement('div');
  seccion3.classList.add('seccion3');

  seccion1.append(title, image);
  seccion2.append(InputName, InputPassword, Inputrepeat, button);
  seccion3.append(title2, buttonBack);
  div.append(seccion1, seccion2, seccion3);

  return div;
};
