// const addFn = require('./add');
// require('./batman')
// require('./superman')

console.log("Hello from index.js!");

// const sum = addFn(1,2);
// console.log({sum});

/**
 * Module Caching Example
 */
// const superHero = require("./super-hero"); // imports an instance of 'SuperHero'

// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const superHero2 = require("./super-hero");
// console.log(superHero2.getName());

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


/**
 * Import JSON files
 */
const data = require("./data.json"); // can ignore extension, but better to keep it
console.log(data.address.street);