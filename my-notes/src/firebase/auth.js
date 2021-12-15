import firebaseApp from "./config";
import 'firebase/auth';
import 'firebase/firestore';

export const google = new firebaseApp.auth.GoogleAuthProvider();



