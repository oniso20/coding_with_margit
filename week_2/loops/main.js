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


// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

// let distance, time 

// do {
//     distance = +prompt("What is the distance in Km ?");
//     if ( distance > 0 ) {
//         time = +prompt("What is the time in hrs ?");
//     }
//     console.log(`Average speed is: 12
//     ${distance/time}`)
// }

// while (distance != 0)

// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

// let promptN, odd = 0, even = 0, num = 1

// while ( num <= 20 ) {
//     if (prompt('Enter a number') % 2 === 0) {
//         even++
//     } else{
//         odd++
//     }
//     num++
// }

// console.log(`Total Even numbers: ${even} and Odd: ${odd}`)

// 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

// let num = 0, promptN;

// do {
//     promptN = +(prompt('Enter a number'))
//     num += promptN;
// }

// while (promptN != 0)

// console.log(num/2)

//6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

// let numCount = 1, numPrompt = 0;
// while (numCount <= 25) {
//      numPrompt += +(prompt('Enter a number'));
//      numCount++
// }

// console.log(`The average is: ${numPrompt/2}`)

// Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

// let num = 0, questionPrompt, numPrompt;

// do {
//     numPrompt = +prompt('Enter a number: ')
//     num += numPrompt
//     questionPrompt = prompt('Do you want to continue giving numbers?(y/n)').toLowerCase()
// }

// while (questionPrompt === 'y')

// console.log(`The average is: ${num/2}`)

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

// let num, trackNum = 1;
// let numCount = +prompt('How many numbers do you want?')
// let newArr = [];

// do {
//     num = +prompt(`Enter number "${trackNum}" here:`)
//     trackNum++
//     numCount--
//     newArr.push(num)

// }

// while (numCount > 0)
// console.log(`The maximum number inputed is: ${Math.max(...newArr)}`)

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
// console.log(`The inputed numbers are: ${ newArr }
// The biggest numbers inputed are: ${ sortedArr[0] } and ${ sortedArr[1] }`)

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

let num, trackNum = 1;
let numCount = 10
let newArr = [];

do {
    num = +prompt(`Enter number "${trackNum}" here:`)
    trackNum++
    numCount--
    newArr.push(num)

}

while (numCount > 0)
maxNum = Math.max(...newArr)
minNum = Math.min(...newArr)
sumOfArr = newArr.reduce((cum, curr) => cum + curr, 0)
avgNumber = sumOfArr/newArr.length
console.log(` The inputed numbers are: ${ newArr }
The Max number is: ${ maxNum }
The Min number is: ${ minNum }
The Sum of the numbers is: ${ sumOfArr }
The Average of the numbers is: ${ avgNumber } `)