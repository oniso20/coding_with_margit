const body = document.querySelector('body');
const start = document.querySelector('#start');
const endGame = document.querySelector('#stop');
const circles = document.querySelectorAll('.circle');
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const overlay = document.querySelector('.overlay');
const closeModel = document.querySelector('#close-model');

let score = 0;
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;

// Sound Variables
let mySound = new Audio('music/calm-waves.wav');
let myGetSound = new Audio('music/footsteps-in-water.wav');
let mySuccessSound = new Audio('music/success.wav');
let myFailSound = new Audio('music/fail.wav');
let myGameSound = new Audio('music/game-on.wav');

// Random number function
const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => selectCircle(i));
});

const selectCircle = (i) => {
    if (i !== active) {
        return stopGame();
    } else {
        myGetSound.play();
        score++;
        rounds--;
        console.log(score);
    }
    result1.textContent = score;

    if (score == 0) {
        result2.innerHTML = `Your score is ${score} you didn't even try to save sea-life`;
    } else if (score > 0 && score < 15) {
        result2.textContent = `Your score is ${score} only?... you just let the turtle die from plastic waste 😒`;
    } else if (score >= 15) {
        result2.textContent = `Your score is ${score}... good job clearing the ocean plastic wastes. Sea-life can flourish because of you 😁`;
    }

};

const startGame = () => {
    myGameSound.play();

    for (let i = 0; i < circles.length; i++) {
        circles[i].style.pointerEvents = 'auto';
    }

    if (rounds >= 3) {
        return stopGame();
    }


    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle('active-circle');
    circles[active].classList.remove('active-circle');

    active = nextActive;
    console.log('current active: ', active);

    timer = setTimeout(startGame, pace);

    pace = pace - 100;

    rounds++;

    function pickNew(active) {
        let nextActive = getRndInt(0, 3);

        if (nextActive != active) {
            return nextActive;
        } else {
            return pickNew(active);
        }
    }



    endGame.style.display = 'block';
    start.style.display = 'none';








    // circles.forEach((circle, index) => {
    //     if (active === index) {
    //         circle.classList.add('active-circle');
    //     } else {
    //         circle.classList.remove('active-circle');
    //     }
    // });

    // my code
    // console.log('Start Game');
    // const highLight = () => {
    //     randomNumber = (Math.floor(Math.random() * 4) + 1);
    //     circles.forEach((item, index) => {
    //         index++;
    //         if (index === randomNumber) {
    //             console.log(randomNumber, 'ran');
    //             item.classList.add('active-circle');
    //         } else {
    //             item.classList.remove('active-circle');
    //         }

    //     });
    // };
    // setInterval(highLight, 1000);
};

const stopGame = () => {
    overlay.style.visibility = 'visible';
    start.style.visibility = 'visible';
    myGetSound.pause();
    myGameSound.pause();
    clearTimeout(timer);

    if (score >= 15) {
        mySuccessSound.play();
    } else {
        myFailSound.play();
    }
};

const resetGame = () => {
    window.location.reload();
    return false;
};



start.addEventListener('click', startGame);
endGame.addEventListener('click', stopGame);
result2.addEventListener('click', selectCircle);
closeModel.addEventListener('click', resetGame);