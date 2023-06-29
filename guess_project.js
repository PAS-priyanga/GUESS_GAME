/*----- constants -----*/
const wordSelectorByLevel = [[],["bite", "blog", "bomb", "brew", "chop", "code", "coke", "deal", "draw", "drag"],["youth", "young", "dusty", "dirty", "daisy", "drain", "clean", "crash", "chaos", "cloth", "chuck"], ["yonder", "deploy", "devise", "depart", "carbon", "charge", "comply", "campus", "candle", "cousin"],["delight", "darling", "divorce", "deliver", "counter", "contain", "clarity", "custody", "citizen"],["diagnose", "diplomat", "defiance", "dilution", "colonial", "creative", "creditor", "coupling"],["gladiator", "gradation", "bifurcate", "brutalize", "amplitude", "copyright", "flagstone", "favourite", "awestruck", "breakdown"],["generosity", "graduation", "lumberjack", "binoculars","background", "earthlings", "palindrome", "algorithms", "chlorinate", "compatible"],["countryside", "hydroplanes", "switchboard", "nefariously", "switzerland", "warehousing", "speculation", "sympathized", "geophysical", "atmospheric"];];
//const levelTwo = ;
//const levelThree = ["yonder", "deploy", "devise", "depart", "carbon", "charge", "comply", "campus", "candle", "cousin"];
//const levelFour = ["delight", "darling", "divorce", "deliver", "counter", "contain", "clarity", "custody", "citizen"];
//const levelFive = ["diagnose", "diplomat", "defiance", "dilution", "colonial", "creative", "creditor", "coupling",];
//const levelSix = ["gladiator", "gradation", "bifurcate", "brutalize", "Amplitude", "Copyright", "Flagstone", "Favourite", "Awestruck", "Breakdown"];
//const levelSeven = ["generosity", "graduation", "LUMBERJACK", "BINOCULARS", "BACKGROUND", "EARTHLINGS", "PALINDROME", "algorithms", "chlorinate", "compatible"];
//const levelEight = ["countryside", "hydroplanes", "switchboard", "nefariously", "Switzerland", "warehousing", "speculation", "sympathized", "geophysical", "atmospheric"];



/*----- state variables -----*/
let currentLevel = 1;
let secretWord;
let guessedLetters;
let remainingAttempts;
const correctLetters = [];

/*----- cached elements  ----- to listen to various events*/
const wordDisplay = document.getElementById("word-display");
const guessesLeft = document.getElementById("guess-left");
const letters = document.querySelectorAll(".letters");
const playAgainBtn = document.getElementById("play-again");
const statusMsg=document.getElementById("statusMsg");


/*----- event listeners -----*/
//sellectall for selecting letters
//collapasble function from w3
function handleGuess(event) { updateGuessedLetter(event) };


var coll = document.getElementsByClassName("rules");
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

//start game
//end game
//reset
//instruction



// Initialize the game  /*----- event listeners -----*/
function initGame() {
    letters.forEach(letter => letter.addEventListener("click", handleGuess));
/*----- functions -----*/

letters.forEach(element => {
    element.classList.remove("selectedLetters");
    });

var i;
var element = document.getElementById("level");
  element.textContent = "Level "+currentLevel;

    secretWord = getRandomWord();
    console.log(secretWord);

    guessedLetters = [];
    remainingAttempts = 8;
    console.log(guessesLeft)
    guessesLeft.textContent = remainingAttempts;
    
   
    
    // Initialize the guess string with dashes
    let guessString = "-".repeat(secretWord.length);
    console.log(guessString);
    console.log(secretWord.length);
    let dash = document.createElement('p');
    for (let i = 0; i < secretWord.length; i++) {
        

        dash.textContent = dash.textContent+"-";
       
    }
    while (wordDisplay.firstChild) {
        wordDisplay.removeChild(wordDisplay.firstChild);
      }
    wordDisplay.appendChild(dash);
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
 var currentSetofWordsForLevel=wordSelectorByLevel[currentLevel];
    const randomIndex = Math.floor(Math.random() * currentSetofWordsForLevel.length);
 
    return currentSetofWordsForLevel[randomIndex];
    
}
// Assign random word to secretWord variable


// updating of letters guesssed
function updateGuessedLetter(event) {
    
    let trueGuess=false;// asssuming the guess is wrong
    console.log(event.target.innerText);
    let letter = event.target.innerText.toLowerCase();
    // find all indexs of a letter in secret word
    let dashes = [...document.querySelector("#word-display p").textContent];
console.log(dashes);
    for (let i = 0; i < secretWord.length; i++) {
        if(secretWord[i] === letter) {
            guessedLetters.push(i);
            console.log(guessedLetters);
             trueGuess=true;
             dashes[i] = secretWord[i];
        } 
    }
    
    if(trueGuess===false){
        remainingAttempts = remainingAttempts - 1;
        (console.log(remainingAttempts))
        guessesLeft.textContent = remainingAttempts;
    }
    

    //for (let j = 0; j < guessedLetters.length; j++) {
     //   dashes[guessedLetters[j]] = secretWord[guessedLetters[j]];
       
   // }
    document.querySelector("#word-display p").innerHTML= dashes.join("");
   event.target.removeEventListener("click", handleGuess)
   event.target.classList.add("selectedLetters");
   checkIfPlayerWon();
}

// guessedLetters.removeEventListener("click", (event) => { updateGuessedLetter(event)})

// letters.forEach(letter => letter.removeEventListener("click", (event) => { updateGuessedLetter(event) }));
// 

//exit()


// Check if the game is won or lost
// function checkGameStatus() {
//   if (guessedLetters.length === secretWord.length) {
//     endGame("Congratulations! You won!. Complete rest of the words to move to next level");
//   } else if (remainingAttempts === 0) {
//     endGame("Game over! You lost. Try again");
//   }
// }

// function endGame() {if 
//     wordDisplay.textContent = secretWords{}}

function checkIfPlayerWon(){


    if (remainingAttempts === 0)
    {
    //player lost
   
   statusMsg.textContent= "Game Over! You lost."
    currentLevel = 1;
    }
    else if(guessedLetters.length === secretWord.length)
    {
        statusMsg.textContent = "Congratulations! You won! The word is "+secretWord;
        
    currentLevel = currentLevel + 1;
  
initGame() 
    }
}


// Initialize the game on page load
window.addEventListener("load", initGame);
function playAgain() 
{
currentLevel = 1;
initGame();
}
playAgainBtn.addEventListener("click", playAgain);

// initGame()




// if (remainingAttempts < 1) {
//     remainingAttempts.innerHTML = "Game Over";
//   }
//   for (let i = 0; i < secretWord.length; i++) {
//     if (cguessedLetters.length === secretWord.length) {
//       #status.innerHTML = "You Win!";
//     }
//   }
// }



// function grayOutspan() {
//     var div = document.getElementById("letters");
//     div.classList.add("grayed-out");
//   }
  //function disableButton() {
//     document.querySelectorAll(letters);
//     span.disabled = true;
//   }
  

// function updateGuessedletter(letter) {
//     if (secretWord.includes(letter.target.innerText)) { correctLetters.push(letter) }
//     else { remainingAttempts - 1 };
// correctLetters.style.visibility = correctLetters ? "visible" : "hidden";
// {return(secretWord.includes(letter.target.innerText)) }

// if (secretWord.includes(letter.target.innerText)) { correctLetters.push(letter) }
// else { remainingAttempts - 1 };
// correctLetters.style.visibility = correctLetters ? "visible" : "hidden";

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
//}
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
