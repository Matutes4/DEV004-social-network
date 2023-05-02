// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJgu9R4dxp-LJM9PaDPTipnRuPTjKFh2k',
  authDomain: 'dancebody-c0d15.firebaseapp.com',
  projectId: 'dancebody-c0d15',
  storageBucket: 'dancebody-c0d15.appspot.com',
  messagingSenderId: '1043808331929',
  appId: '1:1043808331929:web:3f96accce62985a8e07008',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const store = getFirestore(app);
