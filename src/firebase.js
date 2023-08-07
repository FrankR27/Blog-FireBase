import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQcFfMRi_jOpIaUCIg3dvpCUuh5gUj0FU",
    authDomain: "react-blogs-app-67753.firebaseapp.com",
    projectId: "react-blogs-app-67753",
    storageBucket: "react-blogs-app-67753.appspot.com",
    messagingSenderId: "1099208687153",
    appId: "1:1099208687153:web:ee6314201d451870899f10"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
