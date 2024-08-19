import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCNWaQx8BWD3n20PEPDRUq5y0_WviyGPcQ",
    authDomain: "pets-812a6.firebaseapp.com",
    projectId: "pets-812a6",
    storageBucket: "pets-812a6.appspot.com",
    messagingSenderId: "682365507706",
    appId: "1:682365507706:web:ea97fd10ec0238eb5943c3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const auth = getAuth(app);

  export(db, auth);