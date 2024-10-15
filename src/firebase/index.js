// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuQ3A_4yUWJi7LZ3C4kHZGWLDcQjx6Idw",
  authDomain: "md4-project-7b865.firebaseapp.com",
  projectId: "md4-project-7b865",
  storageBucket: "md4-project-7b865.appspot.com",
  messagingSenderId: "610221949125",
  appId: "1:610221949125:web:2d80d73f0aa6dee59ff0ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
