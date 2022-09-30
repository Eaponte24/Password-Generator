// Assignment Code
var generateBtn = document.querySelector("#generate");
// The function to randomize to turnt he randomized number into a whole integer
function randomInt(min, max) {
   if (!max) {
    max = min
    min = 0
   }
   var rand = Math.random()
   return Math.floor(min*(1 - rand) + rand*max)
}
// This function randomizes the list items
function getRandomList(list) { 
    return list[randomInt(list.length)]
}

function generatePassword() {
   
    var userinput = window.prompt("How long do you want your password to be?");
//the parse int here is trying to covert whatever the user inputs into a number data type and the if statements are basically saying if the datatype NAN is returned then to alet thats not a number 
    var passwordLength = parseInt(userinput)

    if (isNaN(passwordLength)) {
        window.alert("Thats not a number!")
        return
    } 

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password Length must be between 8 and 128 Characters")
        return
    }
// These are the confirm screens for if the user wants number, symbols or lower/uppercase letter
    var userWantsNumbers = window.confirm("Would you like your password to include numbers?")
    var userWantsSymbols = window.confirm("Would you like your password to include symbols?")
    var userWantsLowercase = window.confirm("Would you like your password to include lowercase letters?")
    var userWantsUppercase = window.confirm("Would you like your password to include uppercase letters?")

    var numberlist = ["0","1","2","3","4","5","6","7","8","9"]
    var symbollist = ["!","@","#","$","%","^","&","*","(","+"]
    var lowercaselist = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","w","x","y","z"]
    var uppercaselist = []
// This is where the string arrays will be sent to when the user is done choosing what they want their password to be compiled of
    var listBatch = []
// This is a for loop to turn the uppercase letter array to be all uppercase letters
    for (var i = 0; i < lowercaselist.length; i++) {
        uppercaselist[i] = lowercaselist[i].toUpperCase()
    }

// These if statments are if the user hits "okay" to the if they want number etc then those arrays will be added to the list batch var
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
//note here
    var generatedPassword = ""
// minus 1 cause arrays start at zero and dont want to start at 1
    for (var i = 0; i <passwordLength; i++ ){
     var randomList = getRandomList(listBatch)
     var randomChar = getRandomList(randomList)
     console.log(randomChar)
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