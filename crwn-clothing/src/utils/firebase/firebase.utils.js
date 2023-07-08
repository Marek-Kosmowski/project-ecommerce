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
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
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
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    //if user data does not exists
    // create / set the document with the data from userAuth in my collection

    if (!userSnapshot.exists()) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user,', error.message)
        }
    }
    // if user data exists
    //return userDocRef
    return userDocRef;

}