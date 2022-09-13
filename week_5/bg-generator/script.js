const body = document.querySelector('body');
const color1 = document.querySelector('.bg-color');
const color2 = document.querySelector('.bg-color-gradient');
const directions = document.querySelectorAll('input[name="direction"]');
const result = document.querySelector('#result');


function changeColor() {
    let gradientDirection;

    body.style.backgroundColor = color1.value;

    directions.forEach(direction => {
        if (direction.checked) {
            gradientDirection = direction.value;
        }
    });

    body.style.backgroundImage = `linear-gradient(${gradientDirection}, ${color1.value}, ${color2.value})`;

    // other way of displaying background color
    // const colorCode = window.getComputedStyle(body).getPropertyValue("background-image");

    const colorCode = document.body.style.backgroundImage + ';';

    result.innerHTML = colorCode;
}
body.addEventListener('change', changeColor);
color1.addEventListener('input', changeColor);