const dice = document.querySelector('.dice');
const dice_two = document.querySelector('.dice_two');

const rollBtn = document.querySelector('.roll');

let randomValue = 0;
let randomTwo = 0;

const randomDice = () => {
    const randomValue = Math.floor(Math.random() * 10);
}

    if (random >= 1 && random <= 6) {
        rollDicea(dice, randomValue); //roll dic
}

const randomDice_Two = () => {
    const random_two = Math.floor(Math.random() * 10);
}

    if (randomTwo >= 1 && random_two <= 6) {
        rollDice(dice_two, randomTwo); //roll dice
}

const rollDice = (diceElement, random) => { //roll dice
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
        console.log(random);
    }, 4050);
}

const winCondition = () => {
    if (randomValue > randomTwo) {
        console.log("Dice 1 wins");
    } else if (randomValue < randomTwo) {
        console.log("Dice 2 wins");
    } else {
        console.log("TIE");
    }
}

rollBtn.addEventListener('click', randomDice);
rollBtn2.addEventListener('click', randomDice_Two);
rollBtn2.addEventListener('click', winCondition);