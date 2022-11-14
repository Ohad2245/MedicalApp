import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2oDpOyTjWpQ6DGaejXfZyXgieiEBFOUQ",
  authDomain: "medicalappshovalohad.firebaseapp.com",
  projectId: "medicalappshovalohad",
  storageBucket: "medicalappshovalohad.appspot.com",
  messagingSenderId: "1048119374954",
  appId: "1:1048119374954:web:caad5648aefb1edf50c613",
  measurementId: "G-RW6H67HL4E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName } = additionalData;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};
