let rNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validatedGuess(guess);
    });
}

function validatedGuess(guess) {
    if(isNaN(guess)) {
        alert(`please enter a valid number`);
    }
    else if(guess < 1) {
        alert(`please enter a number more than 1`);
    }
    else if(guess > 100) {
        alert(`please enter a number lase than 100`);
    } else {
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. random number is ${rNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }  
    }
}

function checkGuess(guess) {
    if(guess === rNumber) {
        displayMessage(`you guess right number`);
        endGame()
    } else if (guess < rNumber) {
        displayMessage(`you guess tooo low`);
    }
     else if (guess > rNumber) {
        displayMessage(`you guess tooo high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start a new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
   const newgame = document.querySelector('#newgame');
   newgame.addEventListener('click', function(e){
    rNumber =  parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
   });
}