// Este es el punto de entrada de tu aplicacion
import { welcome } from './components/welcome.js';
import { Register } from './components/Register.js';

const root = document.getElementById('root');

const routes = {
  '/': welcome,
  '/Register': Register,
};

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname](onNavigate));
};

window.onpopstate = () => {
  const component = routes[window.location.pathname];
  root.removeChild(root.firstChild);
  root.append(component(onNavigate));
};

window.onload = () => {
  const component = routes[window.location.pathname];
  root.appendChild(component(onNavigate));
};

// import { myFunction } from "./lib/index.js";

// myFunction();
