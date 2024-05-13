// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrWXOpSJGxoHMC_NFF8SP4FYZZNzP3XQc",
  authDomain: "image-gallery-7eccb.firebaseapp.com",
  projectId: "image-gallery-7eccb",
  storageBucket: "image-gallery-7eccb.appspot.com",
  messagingSenderId: "66451170451",
  appId: "1:66451170451:web:0954367a3934dc9921d966",
  measurementId: "G-LH2DW9HVKH"
};

// Initialize Firebase database
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const storage = getStorage(app)
export { auth, storage }
