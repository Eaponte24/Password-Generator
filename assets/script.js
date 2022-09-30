// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
   
    var userinput = window.prompt("How long do you want your password to be?");
    
    var passwordLength = parseInt(userinput)

    if (isNaN(passwordLength)) {
        window.alert("Thats not a number!")
        return
    } 

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password Legnth must be between 8 and 128 Characters")
        return
    }

    
   
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);