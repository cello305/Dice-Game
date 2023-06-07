const dice = document.querySelector('.dice');
const dice_two = document.querySelector('.dice_two');

const rollBtn = document.querySelector('.roll');

const randomDice = () => {
    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}

const randomDice_Two = () => {

    const random_two = Math.floor(Math.random() * 10);

    if (random_two >= 1 && random_two <= 6) {
        rollDice(random_two);
    }
    else {
        randomDice_Two();
    }
}

const rollDice = random => {
    
    dice.style.animation = 'rolling 4s';
    dice_two.style.animation = 'rolling 4s';
    setTimeout(() => {
        switch (random) {

            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
            
                break;

            default:
                break;
        }

        dice.style.animation = 'none';
        console.log(random);

    }, 4050);

}

const rollDice_Two = random_two => {
    
    dice.style.animation = 'rolling 4s';
    dice_two.style.animation = 'rolling 4s';
    setTimeout(() => {
        switch (random_two) {

            case 1:
                dice_two.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 2:
                dice_two.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 3:
                dice_two.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice_two.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            case 5:
                dice_two.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 6:
                dice_two.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            default:
                break;
        }
        dice_two.style.animation = 'none';

    }, 4050);

}

rollBtn.addEventListener('click', randomDice);

rollBtn.addEventListener('click', randomDice_Two);