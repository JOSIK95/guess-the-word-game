const guessedLettersElement = document.querySelector(".guess-form");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const hiddenMessage = document.querySelector(".message");
const playAgianButton = document.querySelector(".play-agian");

const word = "magnolia"; /*------test word------*/


const placeholderDot = function(){
    const placeholderLetter = [];
    for (const letterInput of word){
        console.log(letter);
        wordInProgress.innerHTML = ("●");
    }
    wordInProgress.innerText = placeholderLetter.join("");
};



guessLetterButton.addEventListener("click", function (e){
e.preventDefault();
const userInput = letterInput.value;
console.log(userInput);
letterInput.value = "";
});

