function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "vampreza" && password == "ia88"){
alert ("Welcome, Farell");
window.location = "Muhammad Farell 3IA88 Backup2.html"; // Redirect ke page CV
return false;
}
else{
alert("Username atau Password salah");
}
}