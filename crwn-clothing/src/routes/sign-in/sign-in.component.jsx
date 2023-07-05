// import {auth, } from '../../utils/firebase/firebase';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  // wherever you make a call to the database it is going to be asynchronous
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
};

export default SignIn;
