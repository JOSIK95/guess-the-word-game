const guessedLettersElement = document.querySelector(".guess-form");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const hiddenMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-agian");

const word = "magnolia"; /*------test word------*/
const guessedLetters = [];

const placeholderDot = function(word){
    const placeholderLetter = [];
    for (const letterInput of word){
        console.log(letterInput);
        placeholderLetter.push("●");
    }
    wordInProgress.innerText = placeholderLetter.join("");
};
placeholderDot(word)


guessLetterButton.addEventListener("click", function (e){
    e.preventDefault();
    const userInput = letterInput.value;
    console.log(userInput);
    validateInput(userInput);
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);
    if (goodGuess){
        makeGuess(guess);
    }
    letterInput.value = "";
    });
    
    
    const validateInput = function (letterInput){
        const acceptedLetter = /[a-zA-Z]/;
    
        if (letterInput.length === 0){
    hiddenMessage.innerText = "Please enter a letter!";
        }    else if (letterInput.length >= 1){
            hiddenMessage.innerText = "Please enter a single letter.";
        }else if (!letterInput.match(acceptedLetter)){
            hiddenMessage.innerText = "Please enter a letter from A to Z.";
        } else {
            return letterInput;
        }
    };


const makeGuess = function (guess){
guess = guess.toUpperCase();
if (guessedLetters.includes(guess)){
    message.innerText = "You already guessed that silly! Try again."
    console.log(guessedLetters);
}else{ 
    guessedLetters.push(guess)
        console.log(guessedLetters);
        showLetters();
        correctLetters(guessedLetters);
}

};



const showLetters = function(){
    guessedLettersElement.innerHTML = "";
    for (const letterInput of guessedLetters ){
        const li = document.createElement("li");
        li.innerText = letterInput;
        guessedLettersElement.append(li);

    }
};

const correctLetters = function (guessedLetters){
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const reveal = [];
    for (const letterInput of wordArray){
if (guessedLetters.includes(letterInput)){
    reveal.push(letterInput.toUpperCase());
}else {
    reveal.push("●");
}
    }


    console.log(reveal);
   
};


