function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("F");
  console.log("W");
  console.log("A");
  console.log("N");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// const result = addTwoNumbers(2, 5);

function addTwoNumbers(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}
const result = addTwoNumbers(2, 5);
// console.log("Result: ", result);

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("Please enter a usernmae");
//     return;
//   }
//   return `${username} just logged in`;
// }
// console.log(loginUserMessage("safwan"));

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "safwan",
  price: 999,
};

function handleObject(anyobject) {
  console.log(
    `User name is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));