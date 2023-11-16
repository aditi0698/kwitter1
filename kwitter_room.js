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
  
    });
    localStorage.setItem("room_name", roomname );
    window.location = "kwitter_page.html";
}

window.addEventListener("keydown" , mykeydown);

function mykeydown(e){
   ascii = e.keyCode;

   if(ascii == 13)
   {
    roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
  
    });
    localStorage.setItem("room_name", roomname );
    window.location = "kwitter_page.html";
   }
}


//<div id="Room_names"> Room_names </div>


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       
    row = '<div id="' + Room_names + '">' + Room_names + '</div><hr>';
    document.getElementById("output").innerHTML += row;
        
    });
  });

}

getData();



function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}