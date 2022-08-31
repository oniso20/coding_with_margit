const pizzaOrderPrize = () => {

    let pizzaPrice, toppingsPrice, deliveryPrice, pizzaSize;

    const custName = document.getElementById('name').value;

    // Pizza Size and Price

    const pizzaSizeFor2 = document.getElementById('pizzaSizeFor2');
    const pizzaSizeFor4 = document.getElementById('pizzaSizeFor4');
    const pizzaSizeFor6 = document.getElementById('pizzaSizeFor6');
    const pizzaSizeFor8 = document.getElementById('pizzaSizeFor8');


    if (pizzaSizeFor2.checked === true) {
        pizzaPrice = 7.50;
        pizzaSize = 'pizza for 2';
    } else if (pizzaSizeFor4.checked === true) {
        pizzaPrice = 10.50;
        pizzaSize = 'pizza for 4';
    } else if (pizzaSizeFor6.checked === true) {
        pizzaPrice = 12.50;
        pizzaSize = 'pizza for 6';
    } else if (pizzaSizeFor8.checked === true) {
        pizzaPrice = 15.50;
        pizzaSize = 'pizza for 8';
    }

    console.log("The pizza price is: ", pizzaPrice);

    // Pizza toppings

    let totalToppings = 0;
    let selectedToppings = [];
    let pizzaToppings = document.getElementsByClassName('checkboxes');

    for (choice = 0; choice < pizzaToppings.length; choice++) {
        if (pizzaToppings[choice].checked) {
            selectedToppings.push(pizzaToppings[choice].name);
            totalToppings = totalToppings + +(pizzaToppings[choice].value);
        }
    }
    selectedToppings = selectedToppings.join(', ');

    console.log("Total topping(s) selected is: ", totalToppings);

    if (totalToppings <= 4) {
        toppingsPrice = 0;
    } else if (totalToppings > 4) {
        toppingsPrice = ((totalToppings - 4) * 0.5);
    }

    console.log("Toppings cost is: ", toppingsPrice);

    // Delivery Method

    const deliveryMethod = document.getElementById('delivery_method').value;

    if (deliveryMethod === 'home') {
        deliveryPrice = 5;
    } else if (deliveryMethod === 'eat-in' || deliveryMethod === 'pickup') {
        deliveryPrice = 0;
    }
    console.log("The delivery price is: ", deliveryPrice, "and delivery method is: ", deliveryMethod);

    const totalPizzaCost = pizzaPrice + toppingsPrice + deliveryPrice;

    const result = document.querySelector('#result');

    console.log(totalPizzaCost);

    text = ` Hello <span>${custName}</span>! you chose a <span>${pizzaSize}</span>, topping(s) selected: <span>${selectedToppings}</span>, delivery method is <span>${deliveryMethod}</span>. Total price is: <span>€${totalPizzaCost}</span>`;

    result.innerHTML = text;

};

document.getElementById('formSubmit').addEventListener("submit", function (e) {
    e.preventDefault();
});
