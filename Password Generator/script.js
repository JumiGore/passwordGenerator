function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function shuffle(s) {
  var arr = s.split('');           // Convert String to array
  var n = arr.length;              // Length of the array

  for (var i = 0; i < n - 1; ++i) {
    var j = getRandomInt(n);       // Get random of [0, n-1]

    var temp = arr[i];             // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }

  s = arr.join('');                // Convert Array to string
  return s;                        // Return shuffled string
}

// created function to validate user input
function validateInput(lengthInput, lowerCaseInput, upperCaseInput, numericInput, specialCharInput) {

  // variables to hold lowercase and upppercase letters, numbers and special characters
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
  var upperCaseChar = lowerCaseChar.toUpperCase();
  var nums = "0123456789";
  var specialChar = "~`!@#$%^&*()_+=-?><,./;:'";

  // Conditional to test the user input
  if (Number(lengthInput) <= 0) {          // number is passed as a string we use Number function to change to integer
    return "Invalid Input Please Choose at Least One of the Criteria";
  } else if (Number(lengthInput) < 8 || Number(lengthInput) > 128) {
    return "Invalid Input Please Choose at Least One of the Criteria";
  } else if (lowerCaseInput === false && upperCaseInput === false &&
    specialCharInput === false && numericInput === false) {
    return "Invalid Input Please Choose at Least One of the Criteria";
  } else {
    var passwordStorage = []  // empty array to hold the elements of the selected criteria

    // Loops through get random indexes
    for (var i = 0; i < lengthInput; i++) {

      var randomLowChar = lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
      var randomUpChar = upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
      var randomNum = nums[Math.floor(Math.random() * nums.length)];
      var randomSpecChar = specialChar[Math.floor(Math.random() * specialChar.length)];

      // Pushes the randomize selected indexes into the array
      if (lowerCaseInput) {
        passwordStorage.push(randomLowChar);
      }
      if (upperCaseInput) {
        passwordStorage.push(randomUpChar);
      }
      if (numericInput) {
        passwordStorage.push(randomNum);
      }
      if (specialCharInput) {
        passwordStorage.push(randomSpecChar);
      }
    }


    // Shuffle function gets the elements inside the passwordStorage, turns it into a string
    // then slices the length to the desired length 
    var stringPass = passwordStorage.join("");
    var shufflePass = shuffle(stringPass);
    var password = shufflePass.slice(0, lengthInput);

    // Returns the password to then be accessed 
    return password;

  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var lengthInput = prompt("length prompt")
  var lowerCaseInput = confirm("Would you like to include lowercase letters?");
  var upperCaseInput = confirm("Would you like to include upper letters?");
  var numericInput = confirm("Would you like to include numbers?");
  var specialCharInput = confirm("Would you like to include special characters?");

  // Call the validateInput function and assign it to the newPassword
  var newPassword = validateInput(lengthInput, lowerCaseInput, upperCaseInput, numericInput, specialCharInput);

  // After retrieving correct criteria from validateInput we apply the text and assign it ot newPassword
  passwordText.value = newPassword;

  // console.log(lengthInput);
  // console.log(lowerCaseInput);
  // console.log(upperCaseInput);
  // console.log(numericInput);
  // console.log(specialCharInput);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
