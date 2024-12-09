// To print the 1 to 10 numbers.
// for(i=1;i<=10;i++){
//     console.log(i)
// }

//  To print the 10 to 1 numbers.
// for(i=10;i>=1;i--){
//     console.log(i)
// }

//  To print the -1 to -10 numbers.
// let i = -1;
// while(i >= -10){
//     console.log(i);
//     i--;
// }

// To print the -10 to -1 numbers.
// let i = -10;
// while(i <= -1){
//     console.log(i);
//     i++;
// }

// print Even and Odd using while Loop.
// var userInput=prompt("enter a digit");
// let i=0;
// // for( i=0;i<userInput.length;i++)
// while(i<userInput.length){
//     if(userInput[i] % 2 == 0){
//         console.log(userInput[i],"even number")
//     }else{
//         console.log(userInput[i],"odd number")
//     }
//     i++
// }

//  print Even and Odd using while Loop,sumEven and SunOdd and multiplecation of even and odd numbers.
let userInput=prompt("enter a digit")
let sumEven=0;
let sumOdd=0;
let sumEvenmul=1;
let sumOddmul=1;
let i=0;
// for(i=0;i<userInput.length;i++)
while(i<userInput.length){
    if(userInput[i] % 2 ==0){
        console.log(userInput[i], "even")
        sumEven+=Number(userInput[i])
        sumEvenmul*=Number(userInput[i])
    }else{
        console.log(userInput[i], "odd")
         sumOdd+=Number(userInput[i])
         sumOddmul*=Number(userInput[i])
    }
    i++;
}
console.log(sumEven,"sum of even")
console.log(sumOdd,"sum of odd")
console.log(sumEvenmul,"sum of even product")
console.log(sumOddmul,"sum of odd product")



