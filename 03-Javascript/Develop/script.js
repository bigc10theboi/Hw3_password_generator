// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Variables categorized into 4 arrays
var lowerCase = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
var upperCase = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [ '@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

//Password parameters
var passCharacters = "";
var userPassword = "";

var passLength = prompt("How many characters would you like in your password? *length must be between 8 and 128 characters");

if (passLength >= 8 & passLength <= 128) {

  password.length = passLength


  var hasLowerCase = confirm("Do you want lower case characters in this password?");
  var hasUpperCase = confirm("Do you want upper case characters in this password?");
  var hasNumeric = confirm("Do you want numeric characters in this password?");
  var hasSpecialChar = confirm("Do you want special characters in this password?");
}

else {
  alert("Specifications not met for password creation. Length must be between 8-128 characters!")
}


