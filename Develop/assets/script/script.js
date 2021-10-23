// Assignment code here

// Arrays for different password parameters
function generatePassword() {
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
// Store user selections
  var resultArray = [];
  var userArray = [];

  uppercaseArray[1]

// Window alerts 
  var charCount = prompt("How long do you want your password to be? Range of 8 to 128 characters");
  var optNumber = confirm("Do you want numbers?");
  var upperLetters = confirm("Do you want Uppercases?");
  var lowerLetters = confirm("Do you want Lowercases?");
  var charSpecial = confirm("Do you want special Characters in your password?")


  // Setting conditions to concatenate results
  if (optNumber) {
    resultArray = resultArray.concat(numbArray);
  }

  if (upperLetters) {
    resultArray = resultArray.concat(uppercaseArray);
  }

  if (lowerLetters) {
    resultArray =  resultArray.concat(lowercaseArray);
  }

  if (charSpecial) {
    resultArray = resultArray.concat(characterArray);
  }

  console.log(resultArray)

  for (var i = 0; i < charCount; i++) {
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  return userArray.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
