// Assignment Code
var generateBtn = document.querySelector("#generate");
//Variables categorized into 4 groupings
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var symbols = " !#$%&';:*+,=-./<>?@()[]^_`{}~| ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
