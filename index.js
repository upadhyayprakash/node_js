console.log("Hello from index.js!");
/**
 * Module Import
 */
/*
const addFn = require('./add');

const sum = addFn(1,2);
console.log({sum});
*/

/*
require('./batman')
require('./superman')
*/


/**
 * Module Caching Example
 */

/*
const superHero = require("./super-hero"); // imports an instance of 'SuperHero' (modify 'super-hero.js' file to export instance)

console.log(superHero.getName());
superHero.setName("Superman");
console.log(superHero.getName());

const superHero2 = require("./super-hero");
console.log(superHero2.getName());
*/

/*
const SuperHero = require("./super-hero"); // imports 'SuperHero' class
const batman = new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new SuperHero("Supermna");
console.log(superman.getName());

const math = require("./math");

const { add, subtract } = math;
console.log(add(2, 3));
console.log(subtract(2, 3));
*/

/**
 * Import JSON files
 */
/*
const data = require("./data.json"); // can ignore extension, but better to keep it
console.log(data.address);
*/

/**
 * Core Modules: "path"
 */
const path = require("node:path"); // can skip the 'node:'
/*
console.log(__filename);
console.group(__dirname);

console.log(path.basename(__filename));
console.group(path.basename(__dirname));

console.log(path.extname(__filename));
console.group(path.extname(__dirname));

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

console.log("Is absolute?(__filename)", path.isAbsolute(__filename));
console.log("Is absolute?(./data.json)", path.isAbsolute("./data.json"));
*/

/**
 * Callback Pattern: Synchronous and Asynchronous
 */
/*
function greet(name) {
    console.log(name);
}

function greetMorning(fn, name) { // Higher order function
    const prefix = "Morning, ";
    fn(prefix + name); // callback function
}

greetMorning(greet, "Prakash"); // 'function' passed as param
*/

/**
 * 'events' module with 'EventEmitter' class
 */
/*
const EventEmitter = require("node:events"); // exports a class 'EventEmitter' with emit event and respond events features.
const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => { // event handler
    console.log("Order Received:", size, topping);
})

emitter.on("order-pizza", (size) => { // event handler
    console.log("Serving complementary drink!");
})

emitter.emit("order-pizza", "large", "mushroom"); // dispatching event
*/

const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log("Order Received:", size, topping);
    drinkMachine.serveDrink(size);
})

pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();
