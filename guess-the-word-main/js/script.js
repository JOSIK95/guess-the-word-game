const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const hiddenMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-agian");

const word = "magnolia"; /*------test word------*/
const guessedLetters = [];
let remainingGuesses = 8;


const placeholderDot = function(word){
    const placeholderLetter = [];
    for (const letter of word){
        console.log(letter);
        placeholderLetter.push("●");
    }
    wordInProgress.innerText = placeholderLetter.join("");
};
placeholderDot(word)



guessLetterButton.addEventListener("click", function (e){
    e.preventDefault();
    const userInput = letterInput.value;
    
    console.log(userInput)
    
    const goodGuess = validateInput(userInput);
    if (goodGuess){
      makeGuess (userInput);
    
    }
    letterInput.value = "";
    });
    

    const validateInput = function (letterInput){
        const acceptedLetter = /[a-zA-Z]/;
    
        if (letterInput.length === 0){
        hiddenMessage.innerText = "Please enter a letter!";
    
        }   else if (letterInput.length > 1){
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
    hiddenMessage.innerText = "You already guessed that silly! Try again."
    console.log(guessedLetters);
}else{ 
    guessedLetters.push(guess)
        console.log(guessedLetters);
        showLetters();
        correctLetters(guessedLetters);
        numGuessesLeft(guess);
}

};



const showLetters = function(){
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters ){
        const li = document.createElement("li");
        li.innerText = letter;
        wordInProgress.append(li);

    }
};

const correctLetters = function (guessedLetters){
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const reveal = [];
    for (const letter of wordArray){
if (guessedLetters.includes(letter)){
    reveal.push(letter.toUpperCase());
}else {
    reveal.push("●");
}
    }
wordInProgress.innerText = reveal.join("");
numGuessesLeft();
validateWin();
};


const validateWin = function (){
    if(word.toUpperCase() === wordInProgress.innerText){
        hiddenMessage.classList.add("win");
        hiddenMessage.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};

const numGuessesLeft = function(guess){
const upperWord = word.toUpperCase();

if (!upperWord.includes(guess)){
hiddenMessage.innerText = `Sorry, the word has no ${guess}.`;
remainingGuesses -= 1;

}else{
    hiddenMessage.innerText = `There is a ${guess} in this word!`;
};

if (remainingGuesses === 0){
    hiddenMessage.innerText = `Oh no! The word was <span class ="highlight">${word}</span>.`;
    
}else if(remainingGuesses === 1 ){
    remainingGuessesSpan.innerText = `only ${remainingGuesses} guess`;
}else{
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
}

};



