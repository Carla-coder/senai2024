import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCD_7U8muWXVu1SOnnG8U9jfbuxFEhCOxY",
    authDomain: "chat-e88de.firebaseapp.com",
    projectId: "chat-e88de",
    storageBucket: "chat-e88de.appspot.com",
    messagingSenderId: "947377696641",
    appId: "1:947377696641:web:cc0ed401acd9dee7bc4280"
  };
  
  // Inicializando Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  export const storage = getStorage(app);
 
    export {db, auth};