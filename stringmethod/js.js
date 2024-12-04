// =1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string

let str1="        Rahul Akula"
let str2="live in kothapet        "
let soncatString=str1.concat(str2);
// console.log(soncatString.trim());
console.log(soncatString.trim().toUpperCase());

// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase

let str="my name is Rahul akula";
let leng=str.slice(8,12);
let index=leng.at(-1);
let ind=leng.indexOf(index);
console.log(ind)

// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char
let arr1="R";
let arr2="ahul Akula";
let op=console.log(arr1.concat(arr2).toUpperCase());
console.log(arr2.slice(8,10))

// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase
// let str3="Rahul Akula";
let str4="he live in hyderabad";
let extractStr1=str3.slice(0,3);
let extractStr2=str4.slice(17,21);
let output=(extractStr1.concat(extractStr2));
console.log(output[0].toUpperCase()+output.slice(1,-1)+output[output.length-1].toUpperCase());

// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string
let strr="     Rahul Akula       ";
let remove=strr.trim();
let upper=remove[0].toUpperCase()+remove.slice(1,-1)+remove[remove.length -1].toUpperCase();
console.log(upper)
let extract=remove.slice(8,11);
console.log(remove.concat(extract));

// "hello there , how are you " find the index of are word in the sentence
let a="hello there , how are you "
let b=a.split(" ");
let c=b.indexOf("are")
console.log(c)

// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.
let person={
    firstname:"Akula",
    lastname:"Rahul",
    Age:"22"
}
console.log(person.firstname)
person.city="hyderabad"
console.log(person)

// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.
let property={
    propertiesname:"rahul residency",
    price:"12cr",
    inStock:"yes"
}
property.price="15cr"
delete property.inStock;
console.log(property)

// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.
let library = {
  fantasy: {
    books: ["The Hobbit", "Harry Potter and the Sorcerer's Stone"]
  },
  mystery: {
    books: ["Sherlock Holmes", "Gone Girl"]
  },
  romance: {
    books: ["Pride and Prejudice", "The Fault in Our Stars"]
  }
};
library.scienceFiction = {
  books: ["Dune", "Neuromancer"]
};
console.log("first book in the fantasy",library.fantasy.books[0])
delete library.mystery;
console.log("updated library",library)

// .Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.
let user={
    username:"ledger",
    email:"rahul@gmail.com",
    adress:"hyderabad telangana 500035"
}
Object.freeze(user);
console.log(user);
user.email="r@gmail.com"
console.log(Object.isFrozen());
user.phone="112346722"
console.log(user)

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()
  let car={
      make:"bmw",
      model:"m5 compition",
      price:"800000$"
  }
  Object.seal(car);
  delete car.make;
  console.log(car);
  console.log(Object.isSealed());
  car.price="750000$"
  console.log(Object.isExtensible())
  console.log(car)


