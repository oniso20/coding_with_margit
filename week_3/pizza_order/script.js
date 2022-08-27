const pizzaOrderPrize = () => {

    let pizzaPrice, toppingsPrice, deliveryPrice;

    // Pizza Size and Price

    const pizzaSizeFor2 = document.getElementById('pizzaSizeFor2');
    const pizzaSizeFor4 = document.getElementById('pizzaSizeFor4');
    const pizzaSizeFor6 = document.getElementById('pizzaSizeFor6');
    const pizzaSizeFor8 = document.getElementById('pizzaSizeFor8');


    if (pizzaSizeFor2.checked === true) {
        pizzaPrice = 7.50;
    } else if (pizzaSizeFor4.checked === true) {
        pizzaPrice = 10.50;
    } else if (pizzaSizeFor6.checked === true) {
        pizzaPrice = 12.50;
    } else if (pizzaSizeFor8.checked === true) {
        pizzaPrice = 15.50;
    }

    console.log(pizzaPrice);

    // Pizza toppings

    let totalToppings = 0;
    const pizzaToppings = document.orderForm.pizzaToppings;

    for (choice = 0; choice < pizzaToppings.length; choice++) {
        if (pizzaToppings[choice].checked) {
            totalToppings = totalToppings + parseInt(pizzaToppings[choice].value);
        }
    }

    console.log(totalToppings);

    if (totalToppings <= 4) {
        toppingsPrice = 0;
    } else if (totalToppings > 4) {
        toppingsPrice = (totalToppings - 4) * 0.5;
    }

    console.log(toppingsPrice);

    // Delivery Method

    const deliveryMethod = document.getElementById('delivery_method');

    if (deliveryMethod.value === 'home') {
        deliveryPrice = 5;
    } else if (deliveryMethod.value === 'eat-in' || deliveryMethod.value === 'pickup') {
        deliveryPrice = 0;
    }
    console.log(deliveryMethod, deliveryPrice);

    const totalPizzaCost = pizzaPrice + toppingsPrice + deliveryPrice;

    const result = document.querySelector('#result');

    console.log(totalPizzaCost);

    text = `${pizzaPrice}, ${totalToppings}, ${deliveryMethod}, ${totalPizzaCost}`;

    result.textContent = text;

};

function submitForm(event) {
    event.preventDefault();
    window.history.back();
}