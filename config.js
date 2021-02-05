import firebase from 'firebase'
require("@firebase/firestore")





// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAkhG92cc58LqS76A8pQ541Y_3Z91cXrbQ",
  authDomain: "recipe-app-3320b.firebaseapp.com",
  databaseURL: "https://recipe-app-3320b-default-rtdb.firebaseio.com",
  projectId: "recipe-app-3320b",
  storageBucket: "recipe-app-3320b.appspot.com",
  messagingSenderId: "516763967256",
  appId: "1:516763967256:web:9733b73f49c7ca2c2e086d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default  firebase.firestore()