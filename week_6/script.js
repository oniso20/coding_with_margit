const start = document.querySelector('#start');
const endGame = document.querySelector('#stop');
const circles = document.querySelectorAll('.circle');
const result = document.querySelector('#result');
const overlay = document.querySelector('.overlay');

let score = 0;
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;

// Random number function
const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => selectCircle(i));
});




const selectCircle = (i) => {
    if (i === active) {
        score++;
        rounds--;
    } else {
        stopGame();
    }
    result.textContent = `${score}`;
};

const addScore = () => {

};

const startGame = () => {

    if (rounds >= 3) {
        return stopGame();
    }

    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle('active-circle');
    circles[active].classList.remove('active-circle');


    active = nextActive;
    console.log('current active: ', active);

    timer = setTimeout(startGame, pace);

    pace = pace - 10;

    rounds++;



    function pickNew(active) {
        let nextActive = getRndInt(0, 3);

        if (nextActive != active) {
            return nextActive;
        } else {
            return pickNew(active);
        }
    }

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
    clearTimeout(timer);
};

const resetGame = () => {
    window.located.reload();
};

console.log(circles);


start.addEventListener('click', startGame);
endGame.addEventListener('click', stopGame);
result.addEventListener('click', selectCircle);