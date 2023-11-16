function login()
{
  Name = document.getElementById("input1").value;

  localStorage.setItem("user_name", Name);
  window.location = "kwitter_room.html";
 
}

window.addEventListener("keydown" , mykeydown);

function mykeydown(e){
   ascii = e.keyCode;

   if(ascii == 13){
    Name = document.getElementById("input1").value;

    localStorage.setItem("user_name", Name);
    window.location = "kwitter_room.html";
   }
}
