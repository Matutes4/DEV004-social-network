export const Wall = (navigate) => {
  const div = document.createElement("div");
  const title = document.createElement('h2');

  title.textContent = 'Bienvenido a dance body mañuco';

  div.append(title);

  return div;
};
