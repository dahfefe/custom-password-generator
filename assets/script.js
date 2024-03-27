
var generateBtn = document.querySelector("#generate");
var lettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

  var userNumberChoice = window.prompt("Enter the number of characters in your password (only 8 - 128 characters):");

  // If user pressed Cancel, immediately end function
  if (!userNumberChoice) {
    return;
  }

  

  // Function returns a string of concatenated characters of length num
  function passwordGenerator(userNumberChoice) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

  var newPassword = passwordGenerator(15);
  console.log(newPassword)
  // passwordText.text(newPassword);

  passwordText.value = newPassword;

}

// Function returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
