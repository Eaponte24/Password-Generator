// Assignment Code
var generateBtn = document.querySelector("#generate");

/* so far this function allows me to click on the generate button and if i dont put in a number
i get a thats not a number response back if it is i get the is a number response */
function generatePassword() {
   
    var userinput = window.prompt("How long do you want your password to be?");
    
    var passwordLength = parseInt(userinput)

    if (isNaN(passwordLength)) {
        window.alert("Thats not a number!")
    } else {
        window.alert("Thats a vaild number, good job!")
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