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
    let score = 500;

    if (customerAge < 18) {
        score;
    } else if (customerAge >= 18 && customerAge <= 25) {
        score += ((10 / 100) * score);
    } else if (customerAge >= 26 && customerAge <= 35) {
        score += ((30 / 100) * score);
    } else if (customerAge >= 36 && customerAge <= 45) {
        score += ((60 / 100) * score);
    } else if (customerAge >= 46 && customerAge <= 55) {
        score *= 2;
    } else if (customerAge >= 56 && customerAge <= 65) {
        score += ((150 / 100) * score);
    } else if (customerAge >= 66) {
        score += ((210 / 100) * score);
    }

    health.forEach(item => item.checked ? healthResult.push(item.value) : item);
    score += healthResult.length * 5;
    habits.forEach(habit => habit.checked ? Number(habitsResult.push(habit.value)) : habit);
    const habitsChoices = habitsResult.map(choice => Number(choice));
    const sum = habitsChoices.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    score += sum;

    result.innerHTML = `Hello ${customerName}, your insurance score is: ${score}`;

    form.reset();
};

form.addEventListener('submit', takeInquiry);