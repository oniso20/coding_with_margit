// Asks the price of the gasoline and the amount of money from the user. Calculate how much gasoline the user gets with the money

//My Solution
// document.querySelector("#button").addEventListener("click", gasCalc);

// function gasCalc() {

//     const gasPrice = +document.querySelector("#price").value;
//     const amtOfMoney = +document.querySelector("#money").value

//     const amtOfGasoline = amtOfMoney / gasPrice; //in litres

//     const result1 = `You could get ${amtOfGasoline.toFixed(2)} litres, ...Ups 😔, you have to stay here.`

//     const result2 = `You could get ${amtOfGasoline.toFixed(2)} litres, ...good 👍 you can escape now `

//     const result3 = `You need to add the price per litre and the amount you plan to spend`

//     if (amtOfGasoline < 10) {
//         document.querySelector('#result').innerHTML = result1 
//     } else if (amtOfGasoline >= 10) {
//         document.querySelector('#result').innerHTML = result2
//     } else {
//         document.querySelector('#result').innerHTML = result3
//     }

// };

// Margit's Solution
// Main difference - onclick="calculate()" is added to the button in html, also Math.floor

const calculateGas = () => {
    const price = +document.getElementById('price').value;
    const money = +document.querySelector('#money').value;
    const answer = document.querySelector('#result');

    const amount = Math.floor(money / price);

    let text;

    if (amount >= 10) {
        text = `You could get ${amount} litres, ...good 👍 you can escape now `;
    } else if (amount < 10) {
        text = `You could get ${amount} litres, ...Ups 😔, you have to stay here.`;
    } else {
        text = `You need to add the price per litre and the amount you plan to spend`;
    }

    answer.textContent = text;
};

// Temperature Converter

function temperatureConverter(id, val) {
    val = parseFloat(val);

    const outputFahrenheit = document.querySelector('#outputFahrenheit');
    const outputCelcius = document.querySelector('#outputCelcius');
    const outputKelvin = document.querySelector('#outputKelvin');

    if (id == 'outputFahrenheit') {
        outputCelcius.value = ((val - 32) / 1.8).toFixed(2);
        outputKelvin.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
    }
    if (id == 'outputCelcius') {
        outputFahrenheit.value = (val * 1.8 + 32).toFixed(2);
        outputKelvin.value = (val + 273.15).toFixed(2);
    }
    if (id == 'outputKelvin') {
        outputFahrenheit.value = ((val - 273.15) * 1.8 + 32).toFixed(2);
        outputCelcius.value = (val - 273.15).toFixed(2);
    }
}

