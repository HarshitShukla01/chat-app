import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';

const config = {
    apiKey: "AIzaSyC7aVxR68TdE8I61ZoVOIUN36pFZtFbLS4",
    authDomain: "chat-web-app-4d673.firebaseapp.com",
    databaseURL: "https://chat-web-app-4d673-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-4d673",
    storageBucket: "chat-web-app-4d673.appspot.com",
    messagingSenderId: "321398591158",
    appId: "1:321398591158:web:c1f3ae04c84040b4cf6017"
  };

const app = firebase.initializeApp(config)

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();