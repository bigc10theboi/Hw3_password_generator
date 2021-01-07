// Assignment Code
var generateBtn = document.querySelector("#generate");
//Variables categorized into 4 groupings
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var specialChar = " !#$%&';:*+,=-./<>?@()[]^_`{}~| ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Password generatoring
var passCharacters = "";
var userPassword = "";

var passlength = prompt("How many characters would you like in your password? *length must be between 8 and 128 characters");

if (passlength >= 8 && passlength <= 128) {

  password.length = passlength


  var hasLowerCase = confirm("Do you want lower case characters in this password?");
  var hasUpperCase = confirm("Do you want upper case characters in this password?");
  var hasNumeric = confirm("Do you want numeric characters in this password?");
  var hasSpecialChar = confirm("Do you want special characters in this password?");

}

else {
  alert("Specifications not met for password creation. Length must be between 8-128 characters!")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
