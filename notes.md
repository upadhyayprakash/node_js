# Codevolution
YouTube [Playlist](https://www.youtube.com/watch?v=LAUi8pPlcUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY)

Node.js is an open-source, cross-platform _**Javascript runtime Runtime**_.

## Concepts

### ECMAScript
- Language specification for JavaScript led by Technical Committee 39 (TC39)
- ECMAScript 2015(ES6) is where modern Javascript started and serves as base for all JS applications.

### Chrome's V8 Engine
- V8 is Google's open-source JavaScript engine launched in 2008.
- It implements ECMAScript specification using C++ language.
- It can run stand-alone (in a browser) or can be embedded in a C++ application (Node.js)

### JavaScript Runtime
Consists of,
  - V8 JS Engine
    - Callstack
    - Heap (Memory)
  - Browser APIs
    - DOM
    - Timer
    - Promises
    - Browser Storage
  - Event Loop
  - Callback Queue(Task Queue)
  - Microtask Queue

### Node.js JS Runtime
Consists of,
- Dependencies
  - **V8**
  - libuv
  - zlib
  - crypto etc.
- C/C++ implementations of ECMAScript Specs
- JS Libraries (using C++ utilities)
  - `fs.js`
  - `http2.js`
  - `timers.js`
  - `repl.js` etc.

> - As a Node.js developer, we'd be using **JS Libraries** from above.
> - There's no `window` or `document` in Node.js as there's no Browser API in Node.js

## Modules
- Each file is a module in Node.js
- 3 types,
  - Local modules (created by us)
  - In-built modules (out-of-the-box in Node.js)
  - Third-party modules (`npm` packages)

### Local Module
- Any JavaScript file with `.js` extension is a module in Node.js
- A module can be loaded by using `require()` function.
  ```js
  require('./add.js');
  ```

### IIFE
- "Immediately Invoked Function Expression" is a JavaScript feature.
```js
  (function() {
    // an imported module code lives here
  })();
```

- Everytime, a module is loaded in Node.js, it's wrapped in IIFE with its own private scope which ensures encapsulation and avoid naming conflicts.

- When a Node.js module is loaded, it's wrapped in IIFE along with few parameters,
```js
  // Module Wrapper (not IIFE)
  
  (function(exports, require, module, __filename, __dirname) {
    // an imported module code lives here
  });
```

### Module Caching
- Caches a module if loaded once and uses the same object if loaded again in same file.
- Can be used for storing state (or Singleton behaviour)
- Helps avoid reloading same module multiple times.

> #### [Blog]
> What is Node.js module caching and its usecases? [Redit Thread](https://www.reddit.com/r/node/comments/x90rjn/eli5_what_is_module_caching_in_nodejs/)

## Import / Export Patterns

### `module.exports` vs `exports`
- Check `math.js` and `index.js` file for CommonJS patterns for importing and exporting.
- `exports` is an object pointing to `module.exports`
> #### Important
> If you override the exports object by assigning it to an object literal, it'll break the object reference to `module.exports`. Hence, in below code, the `module.exports` is an empty object `{}`.
```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

exports = { add, subtract} // module.exports is '{}'
```
Correct way to use the shorthand is,
```js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

### ES Modules
- EcmaScript Modules or ES Modules or ESM
- It's required to use `.mjs` as file extension instead of `.js`.
- Check the `math-esm.mjs` and `main.mjs` module JS file for ES6 module patterns.

### Watch Mode in Node.js
- You can run the Node.js program with `--watch` flag to enable auto-reload when saving changes in the file or its dependencies.
```sh
node --watch index.js
```

## Glossary
- JavaScript
- ECMAScript
- TC39
- V8
- JS Engine
- JS Runtime
- REPL (Read-Evaluate-Print-Loop)