const dice = document.querySelector('.dice');
const dice_two = document.querySelector('.dice_two');

const rollBtn = document.querySelector('.roll');
const rollBtn2 = document.querySelector('.roll_two');

let randomDiceValue = 0;
let randomDiceTwoValue = 0;

let roundCount = 0; // Counts the rounds of 5.

let playerOneScore = 0;
let playerTwoScore = 0;

let currentPlayer = 1; //1 for Player One, 2 for Player Two. Switches turns for who can roll the dice.
let lockButton = false; //Variable for Player One to not roll continuously

//Disable roll button for player two
rollBtn2.disabled = true;

const randomDice = () => {
    randomDiceValue = Math.floor(Math.random() * 6) + 1;
    rollDice(dice, randomDiceValue);

    //Enable roll button for Player Two after dice #1 rolls
    rollBtn2.disabled = false;
    currentPlayer = 2; //Switch to Player Two's turn

    if (lockButton){ //Lock button after initial click, based on global variable
        rollBtn.disabled = false;
    } else {
        rollBtn.disabled = true;
    }
}

const randomDice_Two = () => {
    randomDiceTwoValue = Math.floor(Math.random() * 6) + 1;
    rollDice(dice_two, randomDiceTwoValue);

    //Disable roll button for Player Two until Player One rolls again
    rollBtn2.disabled = true;
    currentPlayer = 1; //Switch to Player One's turn
    
    if (lockButton == false){ //Re-enables 1st button after 2nd button is clicked
        rollBtn.disabled = false;
    }
}

const rollDice = (diceElement, random) => {
    diceElement.style.animation = 'rolling 4s';
    setTimeout(() => {
        switch (random) {
            case 1:
                diceElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 2:
                diceElement.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 3:
                diceElement.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                diceElement.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            case 5:
                diceElement.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 6:
                diceElement.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            default:
                break;
        }
        diceElement.style.animation = 'none';
    }, 4050);
}

const winCondition = () => {
    const resultElement = document.getElementById('winningCondition');

    if (randomDiceValue > randomDiceTwoValue) {
        resultElement.textContent = "Dice 1 Wins !";

        playerOneScore = playerOneScore + 1; //counts each round first dice has won
        console.log(playerOneScore + '  player one won the round');

    } else if (randomDiceValue < randomDiceTwoValue) {
        resultElement.textContent = "Dice 2 Wins !";

        playerTwoScore = playerTwoScore + 1; //counts each round second dice has won
        console.log(playerTwoScore + '  player two won');

    } else {
        resultElement.textContent = "Tie.";

        playerOneScore = playerOneScore + 1;
        playerTwoScore = playerTwoScore + 1;
    }
}


rollBtn.addEventListener('click', randomDice);
rollBtn2.addEventListener('click', randomDice_Two);
rollBtn2.addEventListener('click', winCondition);