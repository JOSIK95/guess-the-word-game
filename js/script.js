const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const hiddenMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia"; /*------test word------*/
let guessedLetters = [];
let remainingGuesses = 8;


const getWord = async function(){
    const randomWord = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await randomWord.text();
    console.log(words);
    const wordArray = words.split("\n");
    console.log(wordArray);
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholderDot(word);
};




const placeholderDot = function(word){
    const placeholderLetter = [];
    for (const letter of word){
        console.log(letter);
        placeholderLetter.push("●");
    }
    wordInProgress.innerText = placeholderLetter.join("");
};
getWord()



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
validateWin();
};



const numGuessesLeft = function(guess){
const upperWord = word.toUpperCase();

if (!upperWord.includes(guess)){
hiddenMessage.innerText = `Sorry, the word has no ${guess}.`;
remainingGuesses -= 1;

}else{
    hiddenMessage.innerText = `There is a ${guess} in this word!`;
    validateWin();
}

if (remainingGuesses === 0){
    
    hiddenMessage.innerHTML = `Oh no! The word was <span class ="highlight">${word}</span>.`;
    startOver();
}else if(remainingGuesses === 1 ){
    remainingGuessesSpan.innerText = `only ${remainingGuesses} guess left`;
}else{
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
}
};

const validateWin = function (){
    if(word.toUpperCase() === wordInProgress.innerText){
        hiddenMessage.classList.add("win");
        hiddenMessage.innerHTML = `<p class="highlight">You guessed the correct word! Congratulations!</p>`;
        startOver();  
    }
};

const startOver = function(){
    guessLetterButton.classList.add("hide");
    remainingGuessesElement.classList.add("hide");
    guessedLettersElement.classList.add("hide");
    playAgainButton.classList.remove("hide");
   letterInput.classList.add("hide");
   
};

playAgainButton.addEventListener("click", function(){
    hiddenMessage.classList.remove("win");
    guessedLetters = []; 
    remainingGuesses = 8;
   remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
   guessedLettersElement.innerHTML = "";
   hiddenMessage.innerText = "";

   getWord();
   

   guessLetterButton.classList.remove("hide");
   playAgainButton.classList.add("hide");
   guessedLettersElement.classList.remove("hide");
   remainingGuessesElement.classList.remove("hide");
   letterInput.classList.remove("hide");
});



