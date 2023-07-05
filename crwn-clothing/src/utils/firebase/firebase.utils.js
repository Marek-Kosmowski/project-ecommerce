// Import the functions you need from the SDKs you need
import {
    initializeApp
} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt1WSQE6nz2vH21bjyBK4EhHsPzljPKOE",
    authDomain: "crwn-clothing-db-9faaa.firebaseapp.com",
    projectId: "crwn-clothing-db-9faaa",
    storageBucket: "crwn-clothing-db-9faaa.appspot.com",
    messagingSenderId: "792566792574",
    appId: "1:792566792574:web:07e5943634aa9428c5332f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);