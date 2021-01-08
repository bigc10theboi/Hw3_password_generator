//My code
//Variables categorized into 4 arrays
var lowerCase = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
var upperCase = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [ '@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

//Password parameters

//Prompt for user input on password length
  var passLength = parseInt(
  prompt("How many characters would you like in your password? *length must be between 8 and 128 characters")
);

if (passLength >= 8 && passLength <= 128) {
 password.length = passLength

//Confirms for user input on variable type
  var hasLowerCase = confirm("Do you want lower case characters in this password?");
  var hasUpperCase = confirm("Do you want upper case characters in this password?");
  var hasNumeric = confirm("Do you want numeric characters in this password?");
  var hasSpecialChar = confirm("Do you want special characters in this password?");
}

else {
  alert("Specifications not met for password creation. Length must be between 8-128 characters!")
}

// Conditional statement checking for at least one type of character
if (
  hasSpecialChar === false &
  hasNumeric === false &
  hasLowerCase === false &
  hasUpperCase === false
) {
  alert('Must select at least one character type');
}

// Object to store user input
var passwordOptions = {
    passLength: passLength,
    hasSpecialChar: hasSpecialChar,
    hasNumeric: hasNumeric,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase
};

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.passLength);
  var randElement = arr[randIndex];
  
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
var passwordOptions = getPasswordOptions();
// Variable to store password
var result = [];
  
// Array to store types of characters to include in password
var possibleChar = [];
  
// Array to contain one of each type of chosen character, forcing utilization of each chosen type
var guaranteedChar = [];
  
// Conditional statement that adds array of special characters and adds guaranteed character based on user input
if (passwordOptions.hasSpecialChar) {
  possibleChar = possibleChar.concat(specialChar);
  guaranteedChar.push(getRandom(specialChar));
}
  
// Conditional statement that adds array of numeric characters and adds guaranteed character based on user input
if (passwordOptions.hasNumeric) {
  possibleChar = possibleChar.concat(numeric);
  guaranteedChar.push(getRandom(numeric));
}
  
// Conditional statement that adds array of lowercase characters and adds guaranteed character based on user input
if (passwordOptions.hasLowerCase) {
  possibleChar = possibleChar.concat(lowerCase);
  guaranteedChar.push(getRandom(lowerCase));
}
  
// Conditional statement that adds array of uppercase characters and adds guaranteed character based on user input
if (passwordOptions.hasUpperCase) {
  possibleChar = possibleChar.concat(upperCase);
  guaranteedChar.push(getRandom(upperCase));
}
  
// For loop to iterate password length from the options object, selecting random characters from the array of possibilities and concatenating those into the result variable
for (var i = 0; i < passwordOptions.passLength; i++) {
  var possibleChar = getRandom(possibleChar);
  
  result.push(possibleChar);
}
  
// Mix in at least one of each guaranteed character in  result
for (var i = 0; i < guaranteedChar.length; i++) {
  result[i] = guaranteedChar[i];
}
  
// Transform the result into a string and display
return result.join('');
}

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