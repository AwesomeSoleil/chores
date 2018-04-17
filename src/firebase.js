import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCHB0cIvGfbhnCGoEiNC-fYGaw87hHw2dM",
    authDomain: "my-daily-chores.firebaseapp.com",
    databaseURL: "https://my-daily-chores.firebaseio.com",
    projectId: "my-daily-chores",
    storageBucket: "my-daily-chores.appspot.com",
    messagingSenderId: "11135979289"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const taskRef = firebase.database().ref('tasks'); // Reference points to tasks