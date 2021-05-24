import firebase from 'firebase'
 var firebaseConfig = {
  apiKey: "AIzaSyC0dUW4rRJIZ_0I-HAInYDlAlaH7EyZCMo",
    authDomain: "attendence-90fc2.firebaseapp.com",
    databaseURL: "https://attendence-90fc2-default-rtdb.firebaseio.com",
    projectId: "attendence-90fc2",
    storageBucket: "attendence-90fc2.appspot.com",
    messagingSenderId: "933797162535",
    appId: "1:933797162535:web:cda84638f1dbada602e802"
 }
firebase.initializeApp(firebaseConfig)
export default firebase.database()