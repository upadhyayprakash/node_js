// import add from "./math-esm.mjs" // For Pattern-1 and Pattern-2 of ESM 'export'

// import math from "./math-esm.mjs"; // For Pattern-3 of ESM 'export'
// const { add, subtract } = math;

// import * as math from "./math-esm.mjs"; // For Pattern-4 of 'export' aka 'named export'
// const { add, subtract } = math;


import { add, subtract } from "./math-esm.mjs"; // For Pattern-4 of 'export' aka 'named export'. Destructure the exported object.
console.log(add(5, 5));
console.log(subtract(5, 5));