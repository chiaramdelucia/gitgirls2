import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_L3eEmcJjV-KejcEPSotnOkusnDpSG44",
    authDomain: "gitgirlsauth.firebaseapp.com",
    databaseURL: "https://gitgirlsauth.firebaseio.com",
    projectId: "gitgirlsauth",
    storageBucket: "gitgirlsauth.appspot.com",
    messagingSenderId: "62125289302"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth


