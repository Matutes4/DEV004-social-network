import { registerWithEmail } from "../lib/authentication.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function registrar(user, pwd, pwdConfirm, mensajeError, mensajeExito) {
  const email = user.value;
  const password = pwd.value;
  const confirmPassword = pwdConfirm.value;

  mensajeError.textContent = "";
  mensajeExito.textContent = "";

  if (!email || !password || !confirmPassword) {
    mensajeError.textContent = "Todos los campos son obligatorios";
    return;
  }

  if (password !== confirmPassword) {
    mensajeError.textContent = "Las contraseñas no coinciden";
    return;
  }

  if (password.length < 6) {
    mensajeError.textContent = "La contraseña debe tener al menos 6 caracteres";
    return;
  }

  registerWithEmail(email, password)
    .then((userCredental) => {
      let user = userCredental.user;
      console.log(user);
      mensajeExito.textContent = "¡Registro exitoso!";
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;

      mensajeError.textContent = "El usuario ya existe";

      console.log(errorCode);
      console.log(errorMessage);
    });
}

export function ingresar(user, pwd, navigate) {
  const email = user.value;
  const password = pwd.value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("exito");
      navigate("/Wall");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("fracaso");
    });
}
