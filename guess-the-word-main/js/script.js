const guessedLettersElement = document.querySelector(".guess-form");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const hiddenMessage = document.querySelector(".message");
const playAgianButton = document.querySelector(".play-agian");

const word = "magnolia"; /*------test word------*/
const guessedLetters = [];

const placeholderDot = function(word){
    const placeholderLetter = [];
    for (const letterInput of word){
        console.log(letterInput);
        wordInProgress.innerHTML = ("●");
    }
    wordInProgress.innerText = placeholderLetter.join("");
};


guessLetterButton.addEventListener("click", function (e){
e.preventDefault();
const userInput = letterInput.value;
console.log(userInput);
validateInput(input);
const guess = letterInput.value;
const goodGuess = validateInput(guess);
if (goodGuess){
    makeGuess(guess);
}
letterInput.value = "";
});


const validateInput = function (input){
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0){
message.innerText = "Please enter a letter!";
    }    else if (input.length >= 1){
        message.innerText = "Please enter a single letter.";
    }else if (!input.match(acceptedLetter)){
        messeage.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

const makeGuess = function (guess){
guess = guess.toUpperCase();
if (guessedLetters.includes(guess)){
    message.innerText = "You already guessed that, silly! Try again."
    console.log(guessedLetters);
}else{ 
    guessedLetters.push(guess)
        console.log(guessedLetters);
    
}
};
