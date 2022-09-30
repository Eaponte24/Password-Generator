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
        window.alert("Password Length must be between 8 and 128 Characters")
        return
    }

    var userWantsNumbers = window.confirm("Would you like your password to include numbers?")
    var userWantsSymbols = window.confirm("Would you like your password to include symbols?")
    var userWantsLowercase = window.confirm("Would you like your password to include lowercase letters?")
    var userWantsUppercase = window.confirm("Would you like your password to include uppercase letters?")

    var numberlist = ["0","1","2","3","4","5","6","7","8","9"]
    var symbollist = ["!","@","#","$","%","^","&","*","(","+"]
    var lowercaselist = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","w","x","y","z"]
    var uppercaselist = []

    var listBatch = []

    for (var i = 0; i < lowercaselist.length; i++) {
        uppercaselist[i] = lowercaselist[i].toUpperCase()
    }


    if (userWantsNumbers) {
        listBatch.push(numberlist)
    }

    if (userWantsSymbols) {
        listBatch.push(symbollist)
    }

    if (userWantsLowercase) {
        listBatch.push(lowercaselist)
    }

    if (userWantsUppercase) {
        listBatch.push(uppercaselist)
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