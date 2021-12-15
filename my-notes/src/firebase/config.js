import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPgVIkyCvZu7K9-UuyqUkjbQYimS9Vjsc",
  authDomain: "labrol.firebaseapp.com",
  projectId: "labrol",
  storageBucket: "labrol.appspot.com",
  messagingSenderId: "585422346484",
  appId: "1:585422346484:web:918ebc8bdafd769a2926a1"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;