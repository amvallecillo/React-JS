import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_qbKCli7685BCREpP_Rgyy9jz6W2bjpk",
  authDomain: "curso-react-coderhouse-c4704.firebaseapp.com",
  projectId: "curso-react-coderhouse-c4704",
  storageBucket: "curso-react-coderhouse-c4704.appspot.com",
  messagingSenderId: "933128128565",
  appId: "1:933128128565:web:43f2b15454384d4218897c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
