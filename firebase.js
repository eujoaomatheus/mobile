// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs8znRgf_T5_4F0A5aMHSoTJfGijvCQCA",
  authDomain: "aula-projeto-90f22.firebaseapp.com",
  projectId: "aula-projeto-90f22",
  storageBucket: "aula-projeto-90f22.appspot.com",
  messagingSenderId: "228939547113",
  appId: "1:228939547113:web:b60b6a72e6a9d889194b78",
  measurementId: "G-E7V6YZX7ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }