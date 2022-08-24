const salaryCalculator = () => {

    //Prompts
    const hourlySalary = Number(prompt("What's your salary per hour?"));
    const hoursWorked = Number(prompt("What's the number of hours worked?"));

    let basicPay = 0;
    const extraHours = hoursWorked - 7;
    const extraPay = extraHours * hourlySalary;
    const bonus100Per = hourlySalary * extraHours;
    const bonus50Per = bonus100Per / 2;

    if (hoursWorked <= 7) {
        basicPay = hourlySalary * hoursWorked;
    } else {
        basicPay = 7 * hourlySalary;
    }

    if (hoursWorked <= 7) {
        return console.log(`Your salary would be: ${basicPay}`);
    } else if (hoursWorked > 7 && hoursWorked <= 9) {
        return console.log('Your salary would be: ', extraPay + bonus50Per + basicPay);
    } else if (hoursWorked > 9) {
        return console.log('Your salary would be: ', extraPay + bonus100Per + basicPay);
    };

};

salaryCalculator();