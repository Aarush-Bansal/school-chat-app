const firebaseConfig = { apiKey: "AIzaSyCssDve2EcFJ-tmUgRp8BABODK6KXafygg", authDomain: "kwitter-new-50cbd.firebaseapp.com", databaseURL: "https://kwitter-new-50cbd-default-rtdb.firebaseio.com", projectId: "kwitter-new-50cbd", storageBucket: "kwitter-new-50cbd.appspot.com", messagingSenderId: "161616324144", appId: "1:161616324144:web:402fbb43a1b6732ace6ff5" }; // Initialize Firebase const app = firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")

    function send()
          {
                msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  message:msg,
                  name:user_name,
                  like:0,
            })
            document.getElementById("msg").value="";
          }
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
