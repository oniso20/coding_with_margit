const body = document.querySelector('body');
const color1 = document.querySelector('.bg-color');
const color2 = document.querySelector('.bg-color-gradient');


function changeColor() {

    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    body.style.background = `linear-gradient(to bottom right, ${color1.value}, ${color2.value})`;
    body.style.background = `linear-gradient(to bottom, ${color1.value}, ${color2.value})`;
    body.style.background = `linear-gradient(to bottom left, ${color1.value}, ${color2.value})`;
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.background = `linear-gradient(to left, ${color1.value}, ${color2.value})`;
    body.style.background = `linear-gradient(to top right, ${color1.value}, ${color2.value})`;
    body.style.background = `linear-gradient(to top, ${color1.value}, ${color2.value})`;
    body.style.background = `linear-gradient(to top left, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);