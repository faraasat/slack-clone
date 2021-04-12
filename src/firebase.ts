import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALss08mqkafL_Y-jHjlGhewQB7PSBLwG0",
  authDomain: "slack-clone-786.firebaseapp.com",
  projectId: "slack-clone-786",
  storageBucket: "slack-clone-786.appspot.com",
  messagingSenderId: "177983076543",
  appId: "1:177983076543:web:3c778063de7a520c7bee0a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
