import firebase from 'firebase/app';
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB4hLPG75boUkmf-RFjfkxQdNCMHAGbLBg",
    authDomain: "unichat-4945.firebaseapp.com",
    projectId: "unichat-4945",
    storageBucket: "unichat-4945.appspot.com",
    messagingSenderId: "1017854058026",
    appId: "1:1017854058026:web:349bf89f67aaa0ac0ead53"
  }).auth();