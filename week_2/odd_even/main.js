const oddOrEven = () => {
    const number = Number(prompt("Input a number"));

    if (number < 0) {
        return console.log("Enter a positive number");
    } else if (number % 2 == 0) {
        return console.log(number, "is even");
    } else {
        return console.log(number, "is odd");
    }
};

oddOrEven();