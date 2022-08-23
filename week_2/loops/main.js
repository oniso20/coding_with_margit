// 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

// for (let number = 1; number < 100; number++) {
//     if (number % 2 != 0) {
//         console.log(number);
//     }
// }

// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

// let result = "";

// for (let num1 = 2, num2 = 98; num1 < 100, num2 > 0; num1 += 2, num2 -= 2) {
//     result += num1 + " " + num2 + " ";
// }
// console.log(result);

// Second Pattern

// let result = '';
// let end = 98;

// for (let i = 2; i < 100; i += 2) {
//     result += ' ' + i + ' ';
//     result += ' ' + end + ' ';
//     end -= 2;
// }
// console.log(result);


// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

// let distance, time;

// do {
//     distance = +prompt("What is the distance in km ?");
//     if (distance > 0) {
//         time = +prompt("What is the time in hrs ?");
//     } else if (distance === 0) {
//         console.log('Ending now');
//     }
//     console.log(`Average speed is: 12
//     ${distance / time}km/h`);
// }
// while (distance != 0);

// Second Solution


// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

// let odd = 0, even = 0, num = 1;

// while (num <= 20) {
//     if (prompt('Enter a number') % 2 === 0) {
//         even++;
//     } else {
//         odd++;
//     }
//     num++;
// }

// console.log(`Total Even numbers: ${even} and Odd: ${odd}`);


// 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

// let count = 0, num = 0, promptForNum;

// do {
//     promptForNum = +(prompt('Enter a number: (0 to end)'));
//     num += promptForNum;
//     count++;
// }

// while (promptForNum !== 0);

// average = Math.round(num / count);

// console.log(`The average is: ${average}, the tootal number(s) entered is ${count}`);

//6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

// let count = 0, numCount = 1, numPrompt = 0;
// while (numCount <= 25) {
//     numPrompt += +(prompt('Enter at least 25 numbers'));
//     numCount++;
//     count++;
// }

// average = Math.round(numPrompt / count);

// console.log(`The average of your inputted numbers is: ${average}`);

// Try at home

// let count = 0, numCount = 1, numPrompt = 0;

// for (let i = 0; i < 25; i++) {
//     let numPrompt += +(prompt('Enter at least 25 numbers'));
//     numCount++;
//     count++;

// }
// average = Math.round(numPrompt / count);
// console.log(`The average of your inputted numbers is: ${average}`);

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

// let count = 0, num = 0, questionPrompt, numPrompt;

// do {
//     numPrompt = +prompt('Enter a number: ');
//     num += numPrompt;
//     count++;
//     questionPrompt = prompt('Do you want to continue giving numbers?(y/n)').toLowerCase();
// }

// while (questionPrompt === 'y');

// average = Math.round(num / count);

// console.log(`The average is: ${average} and the total number(s) inputted is ${count}`);

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

let num, trackNum = 1;
let numCount = +prompt('How many numbers do you want?');
let newArr = [];

do {
    num = +prompt(`Enter number "${trackNum}" here:`);
    trackNum++;
    numCount--;
    newArr.push(num);

}

while (numCount > 0);
console.log(`The maximum number inputted is: ${Math.max(...newArr)}`);

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

// let num, trackNum = 1;
// let numCount = 10
// let newArr = [];

// do {
//     num = +prompt(`Enter number "${trackNum}" here:`)
//     trackNum++
//     numCount--
//     newArr.push(num)

// }

// while (numCount > 0)
// sortedArr = newArr.sort((a,b) => b - a)
// console.log(`The inputted numbers are: ${ newArr }
// The biggest numbers inputted are: ${ sortedArr[0] } and ${ sortedArr[1] }`)

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

// let num, trackNum = 1;
// let numCount = 10
// let newArr = [];

// do {
//     num = +prompt(`Enter number "${trackNum}" here:`)
//     trackNum++
//     numCount--
//     newArr.push(num)

// }

// while (numCount > 0)
// maxNum = Math.max(...newArr)
// minNum = Math.min(...newArr)
// sumOfArr = newArr.reduce((cum, curr) => cum + curr, 0)
// avgNumber = sumOfArr/newArr.length
// console.log(` The inputted numbers are: ${ newArr }
// The Max number is: ${ maxNum }
// The Min number is: ${ minNum }
// The Sum of the numbers is: ${ sumOfArr }
// The Average of the numbers is: ${ avgNumber } `)