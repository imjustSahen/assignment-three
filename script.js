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

function generatePassword() {
    confirmLength = (window.prompt("How long would you like your password to be? Enter number betwen 8 & 128"));

    if (isNaN(confirmLength)) {
        window.alert("Please enter a number betwen 8 & 128")
        return
    }

    if (confirmLength <= 7 || confirmLength >= 129) {
        window.alert("Password length must be 8 to 128 characters, Try again");
        confirmLength = (window.prompt("How many characters would you like your password to contain?"));
        } 
    
        window.alert(`Your password will have ${confirmLength} characters`); 
    
    confirmLowerCase = window.confirm("Click OK(Yes) or Cancel(No) for Lowercase Letters");
    confirmUpperCase = window.confirm("Click OK(Yes) or Cancel(No) for Uppercase Letters");
    confirmNumbers = window.confirm("Click OK(Yes) or Cancel(No) for Numbers");
    confirmSymbols = window.confirm("Click OK(Yes) or Cancel(No) for Symbols");

    var charCodes = [];
    if (confirmLowerCase) charCodes = charCodes.concat(lowercaseCharCodes);
    if (confirmUpperCase) charCodes = charCodes.concat(uppercaseCharCodes);
    if (confirmNumbers) charCodes = charCodes.concat(numberCharCodes);
    if (confirmSymbols) charCodes = charCodes.concat(symbolCharCodes);

        // Need to add a default value if no selection made
    
    var passwordChars = [];
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
