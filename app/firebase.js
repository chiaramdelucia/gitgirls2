import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyAFpr5L9-yDiyT0mrG0OKuWip0xjR8vKb4",
    authDomain: "canceralliance-c13b1.firebaseapp.com",
    databaseURL: "https://canceralliance-c13b1.firebaseio.com",
    projectId: "canceralliance-c13b1",
    storageBucket: "canceralliance-c13b1.appspot.com",
    messagingSenderId: "1001737789804"
  };
  firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth


