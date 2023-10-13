const promiseOne = new Promise(function (resolve, reject) {
  //DO an async task
  // DB calls, cryptography, netwoek call

  setTimeout(function () {
    // console.log("A");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //   console.log("Promise Consumed");
});

// optimized
new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  //   console.log("Async 2 complete ");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      username: "Safwan",
      email: "safwan.shaikh@brainvire.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  //   console.log(user);
});

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "safwan",
//         password: "123",
//       });
//     } else {
//       reject("Error");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     // console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     // console.log(username);
//   })
//   .catch(function (error) {
//     // console.log(error);
//   })
//   .finally(() => {
//     // console.log("Final");
//   });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "jS",
        password: "123",
      });
    } else {
      reject("Error: JS");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//using try catch
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

//using then keyword
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
