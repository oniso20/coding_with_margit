const addAndMult = () => {

    //Prompt
    const number1 = Number(prompt("First number"));
    const number2 = Number(prompt("Second number"));
    const number3 = Number(prompt("Third number"));

    //Actions
    total = number1 + number2 + number3;
    multiplication = number1 * number2 * number3;

    //Conditions
    if (number1 >= 0 && number2 >= 0 && number3 >= 0) {
        return console.log(`This is the total: ${total} and this is the multiplication: ${multiplication}`);
    } else if (number1 >= 0 || number2 >= 0 || number3 >= 0) {
        return console.log("The total is: ", total);
    } else {
        return console.log("only negatives");
    }

};

addAndMult();
