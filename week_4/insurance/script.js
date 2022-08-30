const custName = document.querySelector('#name');
const custAge = document.querySelector('#age');
const health = document.querySelectorAll('input[name="health"]');
const habits = document.querySelectorAll('input[name="habits"]');
const result = document.querySelector('#result');


const takeInquiry = (e) => {
    e.preventDefault();

    let customerName = custName.value;
    let customerAge = +custAge.value;
    let healthResult = [];
    let habitsResult = [];
    let price = 500;

    if (customerAge < 18) {
        price;
    } else if (customerAge >= 18 && customerAge <= 25) {
        price += ((10 / 100) * price);
    } else if (customerAge >= 26 && customerAge <= 35) {
        price += ((30 / 100) * price);
    } else if (customerAge >= 36 && customerAge <= 45) {
        price += ((60 / 100) * price);
    } else if (customerAge >= 46 && customerAge <= 55) {
        price * 2;
    } else if (customerAge >= 56 && customerAge <= 65) {
        price += ((150 / 100) * price);
    } else if (customerAge >= 66) {
        price += ((210 / 100) * price);
    }

    health.forEach(item => item.checked ? healthResult.push(item.value) : item);
    price += healthResult.length * 5;
    habits.forEach(habit => habit.checked ? Number(habitsResult.push(habit.value)) : habit);
    const habitsChoices = habitsResult.map(choice => Number(choice));
    const sum = habitsChoices.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    price += sum;

    result.innerHTML = `Hello ${customerName}, your insurance will cost: ${price.toFixed(1)} €.`;
    console.log(customerName);
    console.log(customerAge);
    console.log(healthResult);
    console.log(habitsChoices);
    console.log(price);

    form.reset();
};

form.addEventListener('submit', takeInquiry);