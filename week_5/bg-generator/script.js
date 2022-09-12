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

    body.style.background = `linear-gradient(${gradientDirection}, ${color1.value}, ${color2.value})`;

    const colorCode = window.getComputedStyle(body).getPropertyValue("background-image");

    let text = result.innerHTML == "none" ? "" : colorCode;

    result.innerHTML = text;
}
body.addEventListener('change', changeColor);
color1.addEventListener('input', changeColor);