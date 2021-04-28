import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA0UqaUHOdrZQ9RpK8shke8z-MVYUOlgYs',
  authDomain: 'biclooapp.firebaseapp.com',
  databaseURL:
    'https://biclooapp-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'biclooapp',
  storageBucket: 'biclooapp.appspot.com',
  messagingSenderId: '191681210422',
  appId: '1:191681210422:web:64aeccd7806ebf6fb7d097',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
