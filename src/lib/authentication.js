import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase.js';

const provider = new GoogleAuthProvider();

export function iniciarCongoogle() {
  return signInWithPopup(auth, provider);
}
