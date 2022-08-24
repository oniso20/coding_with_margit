const ageCheck = () => {
    const age = prompt("what is your age?");

    if (age < 18) {
        return console.log('Too young');
    } else if (age < 27) {
        return console.log("Right age for military service");
    } else if (age < 41) {
        return console.log('You are in reserve');
    } else if (age < 55) {
        return console.log("You are in backup reserve");
    } else {
        return console.log("too aged, thanks you!");
    }

};

ageCheck();

/* Improvements Log: */
// Improved to a function based on Margit's idea
// window.prompt - this could be used to force specific actions from windows