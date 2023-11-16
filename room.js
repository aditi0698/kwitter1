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


username = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "Welcome " + username + "!";


function addRoom()
{
  roomname = document.getElementById("room_name").value;

  firebase.database().ref("/").child(roomname).update({
     Sam : "hello"
  });
  
  localStorage.setItem("roomname" , roomname);
  window.location = "chat.html";

}