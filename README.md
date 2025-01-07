![Texto Alternativo](https://compraco.com.br/cdn/shop/articles/Para-que-e-usado-o-JavaScript.jpg?v=1717267239)

## Content:

(topic) ⇒ **Hello World:**
-  _We don't want the developers' curse to fall upon us, so Hello World is a must._

~~~javascript~~~

console.log("Hello World!");
~~~

(topic) ⇒ **Knowledge of JavaScript Primitive Types:**
- _Practicing the use of JavaScript primitive types such as:_

* String
* Number
* Boolean
* Null
* Undefined
* Symbol.

~~~javascript~~~

let firstName = "Foo";
let currentYear = 2025;
let price = 12.95;
let isEvenYear = false;
let endOfSun = null;
const yearSymbol = Symbol('year');
const currentYear = new Date().getFullYear();
let myObject = {
  [yearSymbol]: currentYear
};
console.log(myObject[yearSymbol]);
~~~
    
(topic) ⇒ **Different ways to building a Object:**
- _Here we create a object with default way but also using shorthand property names as the example below shows:_

**Default:**

~~~javascript

const drone = {
  brand: brand,
  releaseDate: releaseDate
};
~~~

**Shorthand Property:**

~~~javascript

const drone = { brand, releaseDate };
~~~

(topic) ⇒ **String with interpolation or Template String:**
- _Here we use the value of the variables to be interpolated to a String:_

~~~javascript

let user = "foobar";
console.log(`Welcome to GitHub, ${user}!`);
~~~

(topic) ⇒ **Different ways to assign or change the value of an object property:**
- _We use two ways to change the value of a property of an object, with the object with dot and with the square brackets as in the example below:_

**Dot:**

~~~javascript

drone.releaseDate = 2025;
~~~

**Square Brackets:**

~~~javascript

drone['releaseDate'] = 2025;
~~~

(topic) ⇒ **Using arrays to store values, access and modify your elements:**
- _Using array to store a collection of values ​​of different types as in the example below:_

**Building an Array:**

~~~javascript

let colors = ['Green', 1, 'Blue', 2];
console.log(colors[0]);
~~~

(topic) ⇒ **Create a default and callback functions:**
- _Functions are very useful, and when you need to pass a function to another function, without having to name it, you can use an anonymous function:_

**Default Function:**

~~~javascript

function displayMyAge(bornDate) {
    return new Date().getFullYear() - bornDate;
}
~~~

**Callback Function:**

~~~javascript

const displayMyAge = (bornDate) => new Date().getFullYear() - bornDate;
~~~

(topic) ⇒ **Using a mathematical operations:**
- _In the world of programming, mathematical operations are fundamental. In them we can add, decrease, divide, multiply, increase, decrement and perform other operations, as the example below shows:_

~~~javascript

cconst evenOrOdd = (number1, number2) => (number1 % number2) > 0 ? "odd" : "even"; 
console.log(`Dividing ${number1} by ${number2} has a reminder is:`,number1 % number2,`so the number is ${evenOrOdd(number1, number2)}.`);
console.log(`Dividing ${number1} by ${number3} has a reminder is:`, number1 % number3,`so the number is ${evenOrOdd(number1, number3)}.`);
~~~

## Project Status:
- _Work In Progress..._

👨🏻‍💻
