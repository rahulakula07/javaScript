var name=["rahul","goud","akula"]
for(let b=0;b<name.length;b++){
    console.log(name[b])
}
//for off condition
for(let a of name){
    console.log(a)
}

for(let b=name.length-1;b>=0;b--){
    console.log(name[b])
}
//for off condition
for(let a of name.reverse()){ //name.reverse(): This method reverses the array temporarily, and the for...of loop will then iterate over the elements in reverse order.
    console.log(a)
}
for(let a of name.slice().reverse()){ //name.slice(): This creates a shallow copy of the original array (leaving the original array intact).
// reverse(): This reverses the copy, and the for...of loop then iterates over the reversed elements.
    console.log(a)
}

// find the even and odd elements in an arrayy
let a=[10,11,12,13,14,15,16,17,18,19,20]
for(let i=0;i<a.length;i++){
    if(a[i] % 2 ==0){
        console.log(a[i],"even num")
    }else{
        console.log(a[i],"odd num")
    }
}
//using for off condition
for(let eo of a){
    if(eo % 2 ===0){
        console.log(eo ,"even")
    }else{
        console.log(eo,"odd")
    }
}

//find the sum of even and odd elements in an array
sumEven=0;
sumOdd=0;
for(let i=0;i<a.length;i++){
    if(a[i] % 2=== 0){
        sumEven+=a[i]
    }else{
        sumOdd+=a[i]
    }
}
console.log(sumEven,"sum of even")
console.log(sumOdd,"sum of Odd")
//using for off conduition
for(let sumoddeven of a){
    if(sumoddeven % 2 ==0){
        sumEven+=sumoddeven
    }else{
        sumOdd+=sumoddeven
    }
}
console.log(sumEven,"sum of even")
console.log(sumOdd,"sum of Odd")

//sum of even and odd numbers
sumEven=1;
sumOdd=1;
for(let i=0;i<a.length;i++){
    if(a[i] % 2=== 0){
        sumEven*=a[i]
    }else{
        sumOdd*=a[i]
    }
}
console.log(sumEven,"sum of even")
console.log(sumOdd,"sum of Odd")

// let c = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let mulEven = 1;  // To store the product of even numbers
// let mulOdd = 1;   // To store the product of odd numbers

// for (let muloddeven of c) {
//     if (muloddeven % 2 === 0) {
//         mulEven *= muloddeven;  // Multiply if it's an even number
//     } else {
//         mulOdd *= muloddeven;   // Multiply if it's an odd number
//     }
// }

// console.log(mulEven, "mul of even");
// console.log(mulOdd, "mul of odd");

// mutiplecatiuon of the give array
mulEven=1; // store the product of even num
mulOdd=1; //// store the product of odd num
for(let muloddeven of a){
    if(muloddeven % 2 ==0){
        mulEven*=muloddeven
    }else{
        mulOdd*=muloddeven
    }
}
console.log(mulEven,"mul of even")
console.log(mulOdd,"mul of Odd")
