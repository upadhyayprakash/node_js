const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

/**
 * Pattern-1
 */
// module.exports = add; // for single export

/**
 * Pattern-2
 */
// module.exports  = (a, b) => {
//     return a + b;
// }

/**
 * Pattern-3
 */
module.exports = { add, subtract }; // multiple exported function

/**
 * Pattern-4
 */
// exports.add = (a, b) => {
//   return a + b;
// };

// exports.subtract = (a, b) => {
//   return a - b;
// };

/**
 * Invalid Pattern
 */
// exports = { add, subtract }; // breaks the code as module.exports reference is broken