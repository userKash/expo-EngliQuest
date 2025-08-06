// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC7AMHG2pEDsqL91NyTWlisA8YEl3SBxCA',
  authDomain: 'engliquest-788b6.firebaseapp.com',
  projectId: 'engliquest-788b6',
  storageBucket: 'engliquest-788b6.appspot.com',
  messagingSenderId: '1072058760841',
  appId: '1:1072058760841:web:664d901b651ba67d521058',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
