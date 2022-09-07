const body = document.querySelector('body');
const color1 = document.querySelector('.bg-color');
const color2 = document.querySelector('.bg-color-gradient');
const directions = document.querySelectorAll('input[name="direction"]');
const result = document.querySelector('#result');


function changeColor() {
    let gradientDirection;

    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    directions.forEach(direction => {
        if (direction.checked) {
            gradientDirection = direction.value;
        }
    });

    body.style.background = `linear-gradient(${gradientDirection}, ${color1.value}, ${color2.value})`;

    const colorCode = window.getComputedStyle(body).getPropertyValue("background-image");

    result.innerHTML = colorCode;

    console.log(gradientDirection);
}
body.addEventListener('change', changeColor);
color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);