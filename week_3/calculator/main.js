// Asks the price of the gasoline and the amount of money from the user. Calculate how much gasoline the user gets with the money


document.querySelector("#button").addEventListener("click", gasCalc);

function gasCalc() {

    let gasPrice = +document.querySelector("#price").value;
    let amtOfMoney = +document.querySelector("#money").value

    let amtOfGasoline = amtOfMoney / gasPrice; //in litres

    let result1 = `You could get ${amtOfGasoline.toFixed(2)} litres, ...Ups 😔, you have to stay here.`

    let result2 = `You could get ${amtOfGasoline.toFixed(2)} litres, ...good 👍 you can escape now `

    let result3 = `You need to add the price per litre and the amount you plan to spend`

    if (amtOfGasoline < 10) {
        document.querySelector('#result').innerHTML = result1 
    } else if (amtOfGasoline >= 10) {
        document.querySelector('#result').innerHTML = result2
    } else {
        document.querySelector('#result').innerHTML = result3
    }

};