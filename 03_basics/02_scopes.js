// let a = 10;
// const b = 20;
// var c = 30;

//Avoid var beacuse if we use var inside condition or other if we try to access outside the condition they print the value so we can't use var.

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "safwan";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  //   console.log(website);
  two();
}
one();

if (true) {
  const username = "safwan";
  if (username === "safwan") {
    const website = " youtube";
    // console.log(username + website);
  }
}

// ++++++++++++++++ Interesting +++++++++++++++++++

function addOne(num) {
  return num + 1;
}

addOne(5);

//expression function
const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
