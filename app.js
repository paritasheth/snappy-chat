click("signin-button",logInUser);
ifUserIsLoggedIn(function(){
  console.log(window.currentUser);
});
//object
/*var user1={
  id:1,
  name: "Parita",
  username:"Sheth1",
  sayhello: function(){
    console.log("Hello "+this.name);
  }
};
/*console.log(user1.name,user1.id);
user1.sayhello();*/
/*var user2={
  id:2,
  name:"virag",
  username:"Sheth2",
  sayhello: function(){
    console.log("Hello "+this.name);
  }
};
var users=[
  user1,
  user2
];
for(var i=0;i<users.length;i++){
  var user=users[i];
  console.log(user.id);
}
//second method of object
var message=new Object();
message.text="Hello";
console.log(message.text);*/
// Get a reference to the database service
//var database = firebase.database();
//var databaseRef=database.ref();
//var usersRef=database.ref("users");
/*usersRef.on('value',function(snapshot){
  console.log(snapshot.val());
});

usersRef.child("1234").set({
  email:"shethparita98@gmail.com"
});*/
