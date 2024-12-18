//EXAMPLE FPOR MAP/////////////////////////////////////////
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]

const Names = ['john', 'doe', 'jane'];
const upperNames = Names.map(name => name.toUpperCase());
console.log(upperNames); // Output: ['JOHN', 'DOE', 'JANE']

const Users = [{ name: 'Alice' }, { name: 'Bob' }];
const name = Users.map(user => user.name);
console.log(name); // Output: ['Alice', 'Bob']

const nums = [5, 10, 15];
const increased = nums.map(num => num + 10);
console.log(increased); // Output: [15, 20, 25]

const prices = [10.99, 20.49];
const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);
console.log(formattedPrices); // Output: ['$10.99', '$20.49']

//EXAMPLE FOR FILTER/////////////////////////////////////////////////////////
const Numbers = [1, 2, 3, 4];
const evens = Numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]


const NAmes = ['Sam', 'Ann', 'Mike'];
const longNames = NAmes.filter(name => name.length > 3);
console.log(longNames); // Output: ['Mike']


const products = [{ price: 50 }, { price: 30 }, { price: 70 }];
const expensive = products.filter(product => product.price > 40);
console.log(expensive); // Output: [{ price: 50 }, { price: 70 }]


const items = [null, 'apple', undefined, 'banana'];
const validItems = items.filter(item => item !== null && item !== undefined);
console.log(validItems); // Output: ['apple', 'banana']


const ages = [12, 18, 20, 15];
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [18, 20]


//EXAMPLE FOR FOREACH///////////////////////////////////////////
const Numberss = [1, 2, 3];
Numberss.forEach(num => console.log(num));


const names = ['Alice', 'Bob'];
names.forEach(name => console.log(`Hello, ${name}!`));


const NUMBER = [1, 2, 3];
let sum = 0;
NUMBER.forEach(num => sum += num);
console.log(sum); // Output: 6


const NUMBERS = [1, 2, 3];
NUMBERS.forEach((num, index, arr) => arr[index] = num * 2);
console.log(numbers); // Output: [2, 4, 6]


const users = [{ name: 'Alice' }, { name: 'Bob' }];
users.forEach(user => console.log(user.name));
// Output: Alice
//         Bob
