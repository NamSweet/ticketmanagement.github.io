import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyBU1dcFGgTVk1Uycbi8mV2sdRdcHufVAQw",
    authDomain: "authentication-89f2c.firebaseapp.com",
    projectId: "authentication-89f2c",
    storageBucket: "authentication-89f2c.appspot.com",
    messagingSenderId: "842288353474",
    appId: "1:842288353474:web:2b24af6c299cacec166b5b",
    measurementId: "G-Y0VKTN7HQW"
  };
  export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.ts');
    } else {
      return firebaseConfig;
    }
  }    
  
  firebase.initializeApp(firebaseConfig);
  export const firestore = firebase.firestore();