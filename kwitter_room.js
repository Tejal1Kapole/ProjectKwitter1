
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBolGjwyOPDOMFoJnVd-m9AlX89U2ezxiM",
      authDomain: "project-kwitter-88054.firebaseapp.com",
      databaseURL: "https://project-kwitter-88054-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-88054",
      storageBucket: "project-kwitter-88054.appspot.com",
      messagingSenderId: "476701829745",
      appId: "1:476701829745:web:59215e68977ceb644d09d0",
      measurementId: "G-CVM6E9VZ2Y"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");

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
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
     
      });
});
}
getData();
function redirectToRoomName(name) 
{ 
      console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html";
}
function logout() 
{ 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location = "kwitter.html";
}
