// let a=["Alice", "Bob", "Charlie", "David"];
// a.unshift("rahul");
// a.pop();
//  let A =a.includes("Bob");
//  console.log(A);

// let str = "Learn,Practice,Improve";
// let word=str.split(',');
// word.reverse();
// word.join(' ');

// let x=["Song1", "Song2", "Song3"];
// let y=["Song4", "Song5"];
// let con=x.concat(y);
// con.shift();
// con.push("song6");
// console.log(con);

// let movies=["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
// let mov=movies.slice(1,4);
// let newmovies=["The Matrix", "The Godfather"];
// let con = movies.concat(newmovies);
// console.log(con);

//didnt come

let str="John,Doe,Jane,Smith";
let spt=str.split(",");
let check=str.includes('Jane');
let x=spt.reverse().join(" ")
.join(" ");
console.log(x);

let arr=[1, 2, 3, 4, 5]
let remove=arr.shift();
arr .push("6","7")
let length=arr.length;
console.log(length);

// Question 9: Shopping Cart Operations
// You have a shopping cart array:
// ["Milk", "Bread", "Eggs", "Butter"].
// Check if "Eggs" are in the cart.
// Remove "Butter" from the cart.
// Add "Cheese" and "Juice" to the end of the cart.
// What does the final shopping cart look like?

let arr10=["Milk", "Bread", "Eggs", "Butter"];
if(arr.includes("Eggs")){
    arr.pop();
    arr.push("cheese", "juice")
  console.log(arr); 
}else{
    console.log(arr);
}

// Question 10: Rearrange and Combine Names
// You have two arrays of names:
// ["Alice", "Bob", "Charlie"] and ["David", "Eve"].
// Reverse the first array.
// Combine the reversed array with the second array.
// Add "Frank" to the beginning of the combined list.
// What is the final list?

let arr1=["Alice", "Bob", "Charlie"];
let arr2=["David", "Eve"];
let reverse=arr1.reverse();
let com=reverse.concat(arr2);
com.unshift("frank");
console.log(com);

// Question 11: Shopping Cart Operations
// You have a shopping cart:
// ["Milk", "Bread", "Eggs", "Butter"].
// Find the index of "Eggs" in the cart.
// Remove "Eggs" and replace it with "Cheese"
// Add "Juice" to the beginning of the cart.
// What does the final shopping cart look like?

var addToCart = ["Milk", "Bread", "Eggs", "Butter"];

var eggIndex = addToCart.indexOf("Eggs");

addToCart[eggIndex] = "Cheese";

addToCart.unshift("Juice");

console.log(addToCart);


// Write a code snippet to find the length of an array.
var arr8 = [3,1,5,4,6,2,7];
console.log("Length of arr1: "+arr8.length);

// How do you add an element to the end of an array?
console.log(arr1.push(8) ,"element added end of an arr1");
console.log("after adding element at end of any arr1: ",arr1);

// How do you remove the last element from an array?
console.log("remove the last element from an array",arr1.pop());
console.log("after remove the last element from an array: ",arr1);

// How do you add an element to the beginning of an array?
console.log("adding an element to the beginning of an array",arr1.unshift(9));
console.log("after adding an element to the beginning of an array: ",arr1);

// How can you remove the first element from an array?
console.log("removing the first element from an array",arr1.shift());
console.log("after removing the first element from an array: ",arr1);


// How do you reverse the elements in an array?
console.log("reversing the elements in an array",arr1.reverse());


// How can you find the index of a specific value in an array?
console.log("finding the index of a 3 value in an array:",arr1.indexOf(3));


// How can you check if a certain value exists in an array?
if(arr1.includes(3)){
    console.log(arr1.includes(3),"element is present");
}
else{
    console.log(arr1.includes(3),"Element not present");
}
// How can you sort the elements of an array in ascending order?
console.log("sorting the elements of an array in ascending order",arr1.sort((a,b)=>a-b));

// How can you convert an array to a string using commas as separators?
console.log("convert an array to a string using commas as separators",arr1.join(","));




// Write a code snippet that adds an element to the end of an array, then removes the first element.
var arr9 = [1,2,3,4,5];
arr9.push(6);
arr9.shift();
console.log("adding an element at the end of an array and removes the first element",arr2)


// How can you reverse an array and then join the elements into a string?
var arr3 = [3,7,1,9,4,2];
console.log("reverse an array and then join the elements into a string",arr3.reverse().join());
console.log("type of output ",typeof arr3.reverse().join());

// Write a code that first sorts an array in ascending order, then removes the last element.
var arr4 = [3,7,1,9,4,2];
console.log("sorting an array in ascending order",arr4.reverse());
arr4.pop();
console.log("after removing the last element",arr4);


// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var arr5 = [1,2,3,4,5];
arr5.unshift(6,7);
arr5.shift();
console.log("Length of an arr5 is : ", arr5.length)
console.log("addinf two elements at the beginning", arr5);


// How do you combine two arrays, sort the combined array, and then remove the last element?
var arr6 = [956,34,6,2,1];
var arr7 = [300,200,674,3,7];
var result = arr6.concat(arr7).sort((a,b) => a-b);

result.pop();
console.log(result);