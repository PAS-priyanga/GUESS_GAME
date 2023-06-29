/*----- constants -----*/
const levelOne = ["bite", "blog", "bomb", "brew", "chop", "code", "coke", "deal", "draw", "drag"];
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
let remainingAttempts;
const correctLetters = [];

/*----- cached elements  ----- to listen to various events*/
const wordDisplay = document.getElementById("word-display");
const guessesLeft = document.getElementById("guess-left");
const letters = document.querySelectorAll(".letters");
const playAgainBtn = document.getElementById("play-again");

/*----- event listeners -----*/
//sellectall for selecting letters
letters.forEach(letter => letter.addEventListener("click", handleGuess));

function handleGuess(event) { updateGuessedLetter(event) }



//start game
//end game
//reset
//instruction


/*----- functions -----*/
//collapasble function from w3
var coll = document.getElementsByClassName("rules");
var i;

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
// Initialize the game
function initGame() {
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
    const randomIndex = Math.floor(Math.random() * levelOne.length);
 
    return levelOne[randomIndex];
    
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
        } 
    }
    
    if(trueGuess===false){
        remainingAttempts = remainingAttempts - 1;
        (console.log(remainingAttempts))
        guessesLeft.textContent = remainingAttempts;
    }
    

    for (let j = 0; j < guessedLetters.length; j++) {
        dashes[guessedLetters[j]] = secretWord[guessedLetters[j]];
       
    }
    document.querySelector("#word-display p").textContent = dashes.join("");
   event.target.removeEventListener("click", handleGuess)
   event.target.classList.add("selectedLetters");
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




// Initialize the game on page load
window.addEventListener("load", initGame);
playAgainBtn.addEventListener("click", initGame);

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
