//init of programming using JS
console.log('hello from JS');

//use of strings
let firstName = "Foo";
let lastName = "Bar";
console.log(firstName);
console.log(lastName);

//use of numbers
const bornDate = 1990;
console.log(bornDate);

//use of booleans
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

//using typeof to return the data type
console.log(typeof isOnStore);

//building a object
let drone = { item, itemPrice, releaseDate, timeFlying, haveAutoReturn, haveGPS, color };
console.log(drone);

//modify propertie of object using .
drone.color = 'blue';
console.log(drone);

//modify propertie of object using brackets
drone['itemPrice'] = '$ 55.00';
console.log(drone);

//using array
let friends = ['Foo','Bar', 'John', 'Due'];
console.log(friends);
console.log(friends[2]);

//using explicity function to get percent
function getPercent(amount, quantity) {
    return (amount / 100) * quantity;
}

console.log(getPercent(120, 30));

//using anonymous and arrow function to get percent
const percentInLine =  (amount, percent) => (amount / 100) * percent;

console.log(percentInLine(120, 30));

let value1 = 10;
let value2 = 40;

//summing two numbers
const sumTwoValues = value1 + value2;
console.log(sumTwoValues);

let number1 = 3;
let number2 = 2;
let number3 = 3;
let number4 = 100;

//function that determine if the reminder of division is odd or even
const evenOrOdd = (number1, number2) => (number1 % number2) > 0 ? "odd" : "even"; 


//using division reminder to determine whether it is even or odd
console.log(`Dividing ${number1} by ${number2} has a reminder is:`,number1 % number2,`so the number is ${evenOrOdd(number1, number2)}.`);
console.log(`Dividing ${number1} by ${number3} has a reminder is:`, number1 % number3,`so the number is ${evenOrOdd(number1, number3)}.`);

//Exponentiating two numbers
console.log(`Exponentiating the number ${number1} by ${number3} we get the value: `, number1 ** number3);


//Increasing number 
console.log(`Increasing the number ${number4} + 100: `, number4 += 100);
console.log(`Increasing the number ${number4} + 1: `, number4 +=1);
//Decrementing number
console.log(`Decrementing the number ${number4} - 100: `, number4 -= 100);
console.log(`Decrementing the number ${number4} - 1: `, number4 -=1);
//Dividing a number
console.log(`Divding the number ${number4} by ${number2} we get the value: `, number4 /= number2);
console.log(`Divding the number ${number4} by 4 we get the value: `, number4 /= 4);
//Multiplying a number
console.log(`Multiplying the number ${number4} by ${number3} we get the value: `, number4 *= number3);
console.log(`Multiplying the number ${number4} by 4 we get the value: `, number4 *= number3);

//Using comparator operator
console.log(number1 > number2);
console.log(number1 > number3);
console.log(number1 > number4);
console.log(number1 >= number3);

//Using strict e lose equality test

console.log(number1 == '3');
console.log(number1 === '3');
console.log(number1 === 3);

//Build a function that returns your age
const displayMyAge = (bornDate) => new Date().getFullYear() - bornDate;
console.log(displayMyAge(1990));

//Using ternary if
console.log(number1 > number2 ? 'below' : 'above');  

const canditate1 = { firstName: 'John', candidateAge: 17 };

const canditate2 = { firstName: 'James', candidateAge: 18 };

//Ising logical operators
function checkArmyCandidateAge(candidate){
    let minimalAge = 18;
    return candidate.candidateAge >= minimalAge ? `welcome to army, ${candidate.firstName}!` : `Dear ${candidate.firstName} wait to complete minimal age.`
}

console.log(checkArmyCandidateAge(canditate1));
console.log(checkArmyCandidateAge(canditate2));

let sdu = 'SDU';
let gig = 'GIG';
let gru = 'GRU';
let unknow = 'UNK';

//Using switch to choice the option of airport by your sigil
function choiceAirport(sigil){
    switch(sigil){
        case 'SDU':
            console.log('Santos Dumont - Airport');
            break;
        case 'GIG':
            console.log('Galeão - Airport')
            break;
        case 'GRU':
            console.log('Guarulhos - Airport');
            break;
        default:
            console.log('Airport not found.');
            break;
    }
}

choiceAirport(sdu);
choiceAirport(gig);
choiceAirport(gru);
choiceAirport(unknow);

//Using a loop for, while and do while
for(let i = 0; i <= 10; i++){
    console.log(`[for] Number:`, i);
}

let i = 0;
while(i < 10){
    console.log(`[while] number:`,i,`minor than 10.`);
    i++;
}

let y = 1;

do {
console.log(`[do-while] number:`,y,`minor than 10.`);
y++;

} while(y < 10);


const myCar = {
    brand: 'BMW',
    releaseYear: 2025,
    color: 'Gray'
}

//Using for-in to show properties and values of variables inside an object
for (let i in myCar){
    console.log(`variable: `, i);
    console.log(`variable and value: `,i, myCar[i]);
}

//Using for-of to show values inside an array
let games = ['Valorant', 'League of Legends', 'Goat Simulator'];

for(let i of games){
    console.log(i);
}
