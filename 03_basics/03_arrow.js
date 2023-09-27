const user = {
  username: "safwan",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// //change name
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);

// function one() {
//     let usernmae ="safwan";
// //   console.log(this);
// console.log(this.username);

// }

// one();

// const chai = function () {
//     let username = "safwan"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "safwan"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// {aa use kar su to return word use karna he pde ga }

//emplicit return
// const addTwo = (num1, num2) => num1 + num2;

//  (aa use kar su to return word ne jarur nathi)
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "safwan" });

console.log(addTwo(3, 5));
