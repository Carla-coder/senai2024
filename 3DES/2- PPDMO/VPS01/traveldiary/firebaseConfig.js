
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAQCLcSa9WIp0ja7mvlY7n7W3CZvs1c0jw",
  authDomain: "books-c3e8c.firebaseapp.com",
  projectId: "books-c3e8c",
  storageBucket: "books-c3e8c.appspot.com",
  messagingSenderId: "424586088486",
  appId: "1:424586088486:web:ad4a4e33af1e78f08256e7"
};

  // Inicializando Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  export const storage = getStorage(app);
 
    export {db, auth};