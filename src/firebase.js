import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCnHUssigpxsK06VQ8k4LCB7wf_58fjDi0',
  authDomain: 'linkedin-clone-8fbcd.firebaseapp.com',
  projectId: 'linkedin-clone-8fbcd',
  storageBucket: 'linkedin-clone-8fbcd.appspot.com',
  messagingSenderId: '258818737135',
  appId: '1:258818737135:web:145ac21422a0d98baa2c1a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
