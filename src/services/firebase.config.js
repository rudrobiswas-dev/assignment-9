import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3zmwTpgQfanHdb5FrUzSabG1vHIafJRE",
  authDomain: "mediqueued-110010.firebaseapp.com",
  projectId: "mediqueued-110010",
  storageBucket: "mediqueued-110010.firebasestorage.app",
  messagingSenderId: "962137509842",
  appId: "1:962137509842:web:8d15bea856ea5b1a04c20b",
  measurementId: "G-2G2QNQDVTH"
};

const app = initializeApp(firebaseConfig);

export default app;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB3zmwTpgQfanHdb5FrUzSabG1vHIafJRE",
//   authDomain: "mediqueued-110010.firebaseapp.com",
//   projectId: "mediqueued-110010",
//   storageBucket: "mediqueued-110010.firebasestorage.app",
//   messagingSenderId: "962137509842",
//   appId: "1:962137509842:web:8d15bea856ea5b1a04c20b",
//   measurementId: "G-2G2QNQDVTH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);