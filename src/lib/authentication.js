import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

const provider = new GoogleAuthProvider();

export function iniciarCongoogle(navigate) {
  navigate("/Wall");
  return signInWithPopup(auth, provider);
}

export const registerWithEmail = (email, password) => {

  return createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithPassword = (email, password) => {
  
  return signInWithEmailAndPassword(auth, email, password);
}
