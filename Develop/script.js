// Assignment code here
// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var passwordHolder=[];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(prompt('How many characters would you like your password to contain?'));

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters;
    hasSpecialCharacters= confirm("Do you want special characters?");

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters;
  hasNumericCharacters= confirm("Do you want numeric characters?");

  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercaseCharacters;
    hasLowercaseCharacters= confirm("Do you want lowercase characters?");

  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercaseCharacters;
   hasUppercaseCharacters= confirm("Do you want uppercase characters?");

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowercaseCharacters && !hasUppercaseCharacters ){
    alert("No selections made, generator will now end!");
  }

  // Object to store user input then return that object


if (hasSpecialCharacters){
    passwordHolder= passwordHolder.concat(specialCharacters);
};

if(hasNumericCharacters){
  passwordHolder= passwordHolder.concat(numericCharacters);
}

if(hasUppercaseCharacters){
  passwordHolder= passwordHolder.concat(upperCasedCharacters);

}
if (hasLowercaseCharacters){
  passwordHolder= passwordHolder.concat(lowerCasedCharacters);
}

var execution = [];

var newPassword = [];

for (var i = 0; i < length; i++) {
    execution = passwordHolder[Math.floor(Math.random() * passwordHolder.length)];
    newPassword.push(execution);
}
  return newPassword.join('');
}

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);

