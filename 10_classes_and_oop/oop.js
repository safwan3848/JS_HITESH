const user = {
  username: "safwan",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("user details");
    console.log(`Username: ${this.username}`);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.gretting = function () {
    console.log(this.username);
  };
  //return this;
}

const userOne = new User("safwan", 12, true);
const userTwo = new User("test", 67, false);
console.log(userOne);
