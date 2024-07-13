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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</dive><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}