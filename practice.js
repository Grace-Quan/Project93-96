var firebaseConfig = {
    apiKey: "AIzaSyC00FbX0uPR1tUJueO3pYKfM1Di-_Yzw70",
    authDomain: "kwitter-862f3.firebaseapp.com",
    databaseURL: "https://kwitter-862f3-default-rtdb.firebaseio.com",
    projectId: "kwitter-862f3",
    storageBucket: "kwitter-862f3.appspot.com",
    messagingSenderId: "924006532561",
    appId: "1:924006532561:web:28c77bcf33277960fb8cf0",
    measurementId: "G-3VG6S6EYL9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}