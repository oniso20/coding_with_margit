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
let mySound;

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
        score++;
        rounds--;
        console.log(score);
    }
    result1.textContent = score;
    result2.textContent = score;

};

const startGame = () => {

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
    clearTimeout(timer);
};

const resetGame = () => {
    window.location.reload();
    return false;
};

// Sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    };
    this.stop = function () {
        this.sound.pause();
    };
}


start.addEventListener('click', startGame);
endGame.addEventListener('click', stopGame);
result2.addEventListener('click', selectCircle);
closeModel.addEventListener('click', resetGame);