const pizzaSize = +prompt('Select a pizza size');
const numOfToppings = +prompt('Selects number of toppings');
const deliveryMethod = prompt('Please select a delivery method(Home, Eat in, Pickup):').toLowerCase();
let pizzaPrice, toppingsPrice, deliveryPrice;

// Pizza Size and Price

if (pizzaSize === 2) {
    pizzaPrice = 7.50;
} else if (pizzaSize === 4) {
    pizzaPrice = 10.50;
} else if (pizzaSize === 6) {
    pizzaPrice = 12.50;
} else if (pizzaSize === 8) {
    pizzaPrice = 15.50;
} else {
    document.write('Please select a Pizza Size');
}

// Pizza toppings

if (numOfToppings <= 4) {
    toppingsPrice = 0;
} else if (numOfToppings > 4) {
    toppingsPrice = (numOfToppings - 4) * 0.5;
} else {
    document.write('Please select toppings');
}

// Delivery Method

if (deliveryMethod === 'home') {
    deliveryPrice = 5;
} else if (deliveryMethod === 'eat in' || deliveryMethod === 'pickup') {
    deliveryPrice = 0;
} else {
    document.write('Please select a delivery method');
}

const totalPizzaCost = pizzaPrice + toppingsPrice + deliveryPrice;

document.write(pizzaSize, numOfToppings, deliveryMethod, totalPizzaCost);



