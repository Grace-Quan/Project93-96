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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();