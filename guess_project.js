  /*----- constants -----*/
const levelOne= ["bite","blog","bomb","brew","chop","code","coke","deal","draw","drag"];
//const levelTwo = ["youth", "young", "dusty", "dirty", "daisy", "drain", "clean", "crash", "chaos", "cloth", "chuck"];
//const levelThree = ["yonder", "deploy", "devise", "depart", "carbon", "charge", "comply", "campus", "candle", "cousin"];
//const levelFour = ["delight", "darling", "divorce", "deliver", "counter", "contain", "clarity", "custody", "citizen"];
//const levelFive = ["diagnose", "diplomat", "defiance", "dilution", "colonial", "creative", "creditor", "coupling",];
//const levelSix = ["gladiator", "gradation", "bifurcate", "brutalize", "Amplitude", "Copyright", "Flagstone", "Favourite", "Awestruck", "Breakdown"];
//const levelSeven = ["generosity", "graduation", "LUMBERJACK", "BINOCULARS", "BACKGROUND", "EARTHLINGS", "PALINDROME", "algorithms", "chlorinate", "compatible"];
//const levelEight = ["countryside", "hydroplanes", "switchboard", "nefariously", "Switzerland", "warehousing", "speculation", "sympathized", "geophysical", "atmospheric"];



/*----- state variables -----*/
let secretWord;
let guessedLetters;
let remainingAttempts=8;
const correctLetters = [];

/*----- cached elements  ----- to listen to various events*/ 
const wordDisplay = document.getElementById("word-display");
const guessesLeft = document.getElementById("remaining-attempts");
const letters = document.querySelectorAll(".letters");
const playAgainBtn = document.getElementById("play-again");

/*----- event listeners -----*/
//sellectall for selecting letters
letters.forEach(letter => letter.addEventListener("click", updateGuessedletter));
//start game
//end game
//reset
//instruction


/*----- functions -----*/
//
// Initialize the game
function initGame() {
    secretWord = getRandomWord();

    guessedLetters = [];
    remainingAttempts = 8;
    // Initialize the guess string with dashes
let guessString = "-".repeat(secretWord.length);
console.log(guessString);
console.log(secretWord.length);

for (let i = 0; i < secretWord.length; i++) {
    var dash = document.createElement('p');
    
    dash.textContent = "_";
    wordDisplay.appendChild(dash);
  }
    
  }

   //render function()
  //   displaying dash for letters
  // function for click on letter
    
    
    // secretWord.forEach(function() {
    //     var dash = document.createElement('p');
    
    // dash.textContent = "_";
        
    //     wordDisplay.appendChild(dash);
    //   });
      



  

  // Function to get a random word
 
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * levelOne.length);
    return levelOne[randomIndex];
  }
  // Assign random word to secretWord variable
secretWord = getRandomWord();
  console.log(secretWord);
  // updating of letters guesssed

  function updateGuessedletter(event) {console.log(event.target.innerText)
    
    if (guessedLetter(letter) === includes(secretWord)){correctLetters.push (letter)}else{remainingAttempts-1};
    correctLetters.style.visibility = correctLetters ? "visible" : "hidden";

   // for (let i = 0; i < word.length; i++) {
      //if (word[i] === guess) {
        //guessedWord[i] = guess;
        //isCorrectGuess = true;
      //}
    //}
    //if (isCorrectGuess) {
      //correctLetters.push(guess);
    //} else {
      //guessedLetters.push(guess);
   // }
  }
  //updating remaining guess
  //disabling clicked letters

  //other function
  //game winning or lost by if === function
//   console.log(remainingAttempts);
//   if (remainingAttempts === 0) {
//     document.getElementById('status').textContent = 'Game over! You ran out of attempts.';
   
//     initGame();
//   } else if (!displayGuessedWord()){}

  //restart enabling all letters
  //message display winning or loosing
  //level movement
  initGame()