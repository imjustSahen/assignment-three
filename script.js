// Assignment Code
var generateBtn = document.querySelector("#generate");

var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSymbols;
var charLowToHigh;

var uppercaseCharCodes = charLowToHigh(65, 90)
var lowercaseCharCodes = charLowToHigh(97, 122)
var numberCharCodes = charLowToHigh(48, 57)
var symbolCharCodes = charLowToHigh(33, 47).concat(charLowToHigh(58, 64)).concat(charLowToHigh(91, 96)).concat(charLowToHigh(123, 126))

function generatePassword(confirmLength, confirmLowerCase, confirmUpperCase, confirmNumbers, confirmSymbols) {
    confirmLength = (prompt("How long would you like your password to be? Enter number betwen 8 & 128"));

    while (confirmLength <= 7 || confirmLength >= 129) {
        alert("Password length must be 8 to 128 characters, Try again");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
        } 
    
        alert(`Your password will have ${confirmLength} characters`); 
    
    confirmLowerCase = confirm("Click OK(Yes) or Cancel(No) for Lowercase Characters");
    confirmUpperCase = confirm("Click OK(Yes) or Cancel(No) for Uppercase Characters");
    confirmNumbers = confirm("Click OK(Yes) or Cancel(No) for Numberic Characters");
    confirmSymbols = confirm("Click OK(Yes) or Cancel(No) for Symbol Characters");

    var charCodes = []
    if (confirmLowerCase) charCodes = charCodes.concat(lowercaseCharCodes)
    if (confirmUpperCase) charCodes = charCodes.concat(uppercaseCharCodes)
    if (confirmNumbers) charCodes = charCodes.concat(numberCharCodes)
    if (confirmSymbols) charCodes = charCodes.concat(symbolCharCodes)
    
    
    var passwordChars = []
    for (var i = 0; i < confirmLength; i++) {
      var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordChars.push(String.fromCharCode(characterCode))
    }
    return passwordChars.join('')
  }
  
  function charLowToHigh(low, high) {
    var array = []
    for (var a = low; a <= high; a++) {
      array.push(a)
    }
    return array
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
