// Immediately Invoked Function Expressions (IIFE)

(function one() {
  //names IIFE
  console.log("DB CONNECT");
})();

// arrow function IIFE
(() => {
  console.log("DB CONNECT TWO");
})();

//parameters IIFE
((name) => {
  console.log(`DB CONNECT TWO ${name}`);
})("safwan");
