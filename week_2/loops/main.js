//Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

// for (let number = 1; number < 100; number++) {
//     if (number % 2 != 0) {
//         console.log(number);
//     }
// }

// Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.
result = "";

for (let number = 1; number < 100; number++) {
    for (let number = 100; number < 100; number - 1) {
        if (number % 2 == 0) {
            console.log(number);
        }
    }
}

// Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

// const distance = prompt("What is the distance");
// const time = prompt("What is");