import {
  GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut
} from 'firebase/auth';
import { auth } from './firebase.js';

const provider = new GoogleAuthProvider();

export function iniciarCongoogle(navigate) {
  return signInWithPopup(auth, provider).then(() => {
    navigate('/Wall');
  });
}
export const logOut = () => {
  const auth = getAuth();
  return signOut(auth);
};

export const actualUser = () => {
  const auth= getAuth(app);
  console.log(auth.currentUser);
  return signOut(auth);
}

export const registerWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signInWithPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);

