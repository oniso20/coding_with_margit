const start = document.querySelector('#start');
const endGame = document.querySelector('#stop');
const circles = document.querySelectorAll('.circle');

const startGame = () => {
    console.log('Start Game');
};

const stopGame = () => {
    console.log('Stop Game');
};

console.log(circles);



start.addEventListener('click', startGame);
endGame.addEventListener('click', stopGame);