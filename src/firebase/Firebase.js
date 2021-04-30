import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyA0UqaUHOdrZQ9RpK8shke8z-MVYUOlgYs',
  authDomain: 'biclooapp.firebaseapp.com',
  databaseURL:
    'https://biclooapp-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'biclooapp',
  storageBucket: 'biclooapp.appspot.com',
  messagingSenderId: '191681210422',
  appId: '1:191681210422:web:64aeccd7806ebf6fb7d097',
});

export const GithubProvider = new firebase.auth.GithubAuthProvider();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = app.auth();
export default app;
