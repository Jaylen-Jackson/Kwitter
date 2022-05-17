
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBGXq74a6qCSCWC4e_vRUA0nuqy34H8r8c",
  authDomain: "class-93-dee19.firebaseapp.com",
    databaseURL: "https://class-93-dee19-default-rtdb.firebaseio.com",
  projectId: "class-93-dee19",
  storageBucket: "class-93-dee19.appspot.com",
  messagingSenderId: "152142114744",
  appId: "1:152142114744:web:2a11b5954d01ea6bd0294d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
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

function send()
{
    msg = document.getElementById(".value");
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    
    document.getElementById("msg").value = "";
}


