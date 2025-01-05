console.log('hello from JS');

let firstName = "Foo";
let lastName = "Bar";

console.log(firstName);
console.log(lastName);

const bornDate = 1990;
console.log(bornDate);

let isOnStore = true;
console.log(`is available: ${isOnStore}`);

let item = "Drone XJY"
let itemPrice = 50.00;
let releaseDate = 2024;
let timeFlying = 15;
let haveAutoReturn = true;
let haveGPS = true;
let color = 'yellow';

console.log(`The product ${item} have a price ${itemPrice}`);
console.log(typeof isOnStore);

let drone = { item, itemPrice, releaseDate, timeFlying, haveAutoReturn, haveGPS, color };
console.log(drone);

drone.color = 'blue';
console.log(drone);

drone['itemPrice'] = '$ 55.00';
console.log(drone);

let friends = ['Foo','Bar', 'John', 'Due'];
console.log(friends);
console.log(friends[2]);