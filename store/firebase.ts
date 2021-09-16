import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCDwQ0M7zYZPfLH3hA3RT4NVm4azzxQ_PI',
  authDomain: 'graftini-dev-60c2a.firebaseapp.com',
  projectId: 'graftini-dev-60c2a',
  storageBucket: 'graftini-dev-60c2a.appspot.com',
  messagingSenderId: '472653453897',
  appId: '1:472653453897:web:d265ec9b1bed7daefb7d98',
  measurementId: 'G-WYCC40W1HM',
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const firebaseAuth = getAuth(app);
