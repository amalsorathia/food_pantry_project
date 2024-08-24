// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Ox5NFnw9TGHtFyv6SI6LI5yrtChj404",
  authDomain: "let-s-get-this-bread-abfda.firebaseapp.com",
  projectId: "let-s-get-this-bread-abfda",
  storageBucket: "let-s-get-this-bread-abfda.appspot.com",
  messagingSenderId: "242780402683",
  appId: "1:242780402683:web:fd2fe5b09a9646db2bd15e",
  measurementId: "G-CJFEP8TC2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}