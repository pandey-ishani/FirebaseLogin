


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display="block";
    document.getElementById("login_div").style.display="none";

    if(user!=null)
    {
    	var email_id=user.email;
    }
    document.getElementById("user_para").innerHTML="Welcome  " + email_id;

  } 
  else {
    // No user is signed in.
    document.getElementById("user_div").style.display="none";
    document.getElementById("login_div").style.display="block";
  }
});
function login()
{
	var UserEmail = document.getElementById("email_field").value;
	var UserPassword= document.getElementById("password_field").value;

firebase.auth().signInWithEmailAndPassword(UserEmail, UserPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: " + errorMessage);
  // ...
});

}
function logout()
{
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
  window.alert("Error: " + errorMessage);
});
}