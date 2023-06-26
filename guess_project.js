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
let remainingAttempts;

/*----- cached elements  -----*/
const wordDisplay = document.getElementById("word-display");
const guessesLeft = document.getElementById("remaining-attempts");
const letters = document.querySelectorAll("#letters span");
const playAgainBtn = document.getElementById("play-again");
