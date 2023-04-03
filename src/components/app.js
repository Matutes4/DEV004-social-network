//import { auth } from "../lib/firebase.js";
//import { auth } from './firebase.js';
//import { auth } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { registerWithEmail } from "../lib/authentication.js";

export function registrar(user, pwd) {
  const email = user.value;
  const password = pwd.value;

  registerWithEmail(email, password)
    .then((userCredental) => {
      let user = userCredental.user;
      console.log(user);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
    });
}
