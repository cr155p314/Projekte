let userName = prompt("Who's there?", "");

if (userName == "Admin") {

  let pass = prompt("Password", "");

  if ( pass === "The Master") {
    alert( "Welcome" );
  } else if (pass == "" || pass == null) {
    alert("canceled");
  } else {
    alert("Wrong Password!" );
  } 

} else if (userName === "" || userName === null) {
  alert( "Canceled" );
} else {
  alert("I don't know you!" );
}







