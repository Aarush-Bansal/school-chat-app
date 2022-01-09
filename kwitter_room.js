
const firebaseConfig = { apiKey: "AIzaSyCssDve2EcFJ-tmUgRp8BABODK6KXafygg", authDomain: "kwitter-new-50cbd.firebaseapp.com", databaseURL: "https://kwitter-new-50cbd-default-rtdb.firebaseio.com", projectId: "kwitter-new-50cbd", storageBucket: "kwitter-new-50cbd.appspot.com", messagingSenderId: "161616324144", appId: "1:161616324144:web:402fbb43a1b6732ace6ff5" }; // Initialize Firebase const app = firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="welcome"+username+"!"
function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding roomname"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-"+room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
