/*----- constants -----*/
const wordSelectorByLevel = [
    [],
    [
        "bite",
        "blog",
        "bomb",
        "brew",
        "chop",
        "code",
        "coke",
        "deal",
        "draw",
        "drag",
    ],
    [
        "youth",
        "young",
        "dusty",
        "dirty",
        "daisy",
        "drain",
        "clean",
        "crash",
        "chaos",
        "cloth",
        "chuck",
    ],
    [
        "yonder",
        "deploy",
        "devise",
        "depart",
        "carbon",
        "charge",
        "comply",
        "campus",
        "candle",
        "cousin",
    ],
    [
        "delight",
        "darling",
        "divorce",
        "deliver",
        "counter",
        "contain",
        "clarity",
        "custody",
        "citizen",
    ],
    [
        "diagnose",
        "diplomat",
        "defiance",
        "dilution",
        "colonial",
        "creative",
        "creditor",
        "coupling",
    ],
    [
        "gladiator",
        "gradation",
        "bifurcate",
        "brutalize",
        "amplitude",
        "copyright",
        "flagstone",
        "favourite",
        "awestruck",
        "breakdown",
    ],
    [
        "generosity",
        "graduation",
        "lumberjack",
        "binoculars",
        "background",
        "earthlings",
        "palindrome",
        "algorithms",
        "chlorinate",
        "compatible",
    ],
    [
        "countryside",
        "hydroplanes",
        "switchboard",
        "nefariously",
        "switzerland",
        "warehousing",
        "speculation",
        "sympathized",
        "geophysical",
        "atmospheric",
    ],
];

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
const statusMsg = document.getElementById("statusMsg");

/*----- event listeners -----*/
//sellectall for selecting letters

function handleGuess(event) {
    updateGuessedLetter(event);
}

//collapasble function from w3
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

// Initialize the game  /*----- event listeners -----*/
function initGame() {
    letters.forEach((letter) => letter.addEventListener("click", handleGuess));
    /*----- functions -----*/

    letters.forEach((element) => {
        element.classList.remove("selectedLetters");
    });

    var i;
    var element = document.getElementById("level");
    element.textContent = "Level " + currentLevel;

    secretWord = getRandomWord();
    console.log(secretWord);

    guessedLetters = [];
    remainingAttempts = 8;
    console.log(guessesLeft);
    guessesLeft.textContent = remainingAttempts;

    // Initialize the guess string with dashes
    let guessString = "-".repeat(secretWord.length);
    console.log(guessString);
    console.log(secretWord.length);
    let dash = document.createElement("p");
    for (let i = 0; i < secretWord.length; i++) {
        dash.textContent = dash.textContent + "-";
    }
    while (wordDisplay.firstChild) {
        wordDisplay.removeChild(wordDisplay.firstChild);
    }
    wordDisplay.appendChild(dash);
}

// Function to get a random word

function getRandomWord() {
    var currentSetofWordsForLevel = wordSelectorByLevel[currentLevel];
    const randomIndex = Math.floor(
        Math.random() * currentSetofWordsForLevel.length
    );

    return currentSetofWordsForLevel[randomIndex];
}
// Assign random word to secretWord variable

// updating of letters guesssed
function updateGuessedLetter(event) {
    let trueGuess = false; // asssuming the guess is wrong
    console.log(event.target.innerText);
    let letter = event.target.innerText.toLowerCase();
    // find all indexs of a letter in secret word
    let dashes = [...document.querySelector("#word-display p").textContent];
    console.log(dashes);
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
            guessedLetters.push(i);
            console.log(guessedLetters);
            trueGuess = true;
            dashes[i] = secretWord[i];
        }
    }

    if (trueGuess === false) {
        remainingAttempts = remainingAttempts - 1;
        console.log(remainingAttempts);
        guessesLeft.textContent = remainingAttempts;
    }

    document.querySelector("#word-display p").innerHTML = dashes.join("");
    event.target.removeEventListener("click", handleGuess);
    event.target.classList.add("selectedLetters");
    checkIfPlayerWon();
}

// winning function
function checkIfPlayerWon() {
    if (remainingAttempts === 0) {
        //player lost

        statusMsg.textContent = "Game Over! You lost.";
        currentLevel = 1;
    } else if (guessedLetters.length === secretWord.length) {
        statusMsg.textContent =
            "Congratulations! You won! The word is " + secretWord;

        currentLevel = currentLevel + 1;

        initGame();
    }
}

// Initialize the game on page load
window.addEventListener("load", initGame);

//playagain function
function playAgain() {
    currentLevel = 1;
    initGame();
}
playAgainBtn.addEventListener("click", playAgain);
