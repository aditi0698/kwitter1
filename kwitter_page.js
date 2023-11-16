const firebaseConfig = {
  apiKey: "AIzaSyAExbqWKGSEDK_rfItx4iFoCaqkVoGy-eg",
  authDomain: "kwitter-ff3ae.firebaseapp.com",
  databaseURL: "https://kwitter-ff3ae-default-rtdb.firebaseio.com",
  projectId: "kwitter-ff3ae",
  storageBucket: "kwitter-ff3ae.appspot.com",
  messagingSenderId: "567018183286",
  appId: "1:567018183286:web:91021f800c5e57c1d35d57"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
   msg = document.getElementById("msg").value;

   firebase.database().ref(room_name).push({
      Name : user_name,
      Message :  msg 
   })
}


window.addEventListener("keydown" , mykeydown);

function mykeydown(e){
   ascii = e.keyCode;

   if(ascii == 13)
   {
    msg = document.getElementById("msg").value;

   firebase.database().ref(room_name).push({
    Name : user_name,
    Message : msg
   })
   }
}


//<h4>Name : Message </h4> 



  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
       console.log(firebase_message_id);
       console.log( message_data);

       Name = message_data["Name"];
       message = message_data["Message"];

       nameandmsg = '<h4>' + Name + ":" + message + '</h4>';
       document.getElementById("output").innerHTML += nameandmsg;
 
//End code
      } });  }); }
getData();



function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
