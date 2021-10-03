
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      const firebaseConfig = {
            apiKey: "AIzaSyDgeum5oikkUOxRMgGE4qv1fLMrCHj-6Tw",
            authDomain: "classtest-82d91.firebaseapp.com",
            databaseURL: "https://classtest-82d91-default-rtdb.firebaseio.com",
            projectId: "classtest-82d91",
            storageBucket: "classtest-82d91.appspot.com",
            messagingSenderId: "271908013362",
            appId: "1:271908013362:web:a48245e0bc3378c5f8832b"
          };
          const app = initializeApp(firebaseConfig);
      //End code
      });});}
user_name = localStorage.getItem("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = " "; snapshot.forEach(function(childSnapshot) {
childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +"</div><hr>";
  });
 });
}
getData();
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_trick src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+ftrebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace = "kwitter.html";
}
