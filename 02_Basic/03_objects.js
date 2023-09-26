// singleton
// Object.create : consturctor method inside single ton

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Safwan",
  "full name": "Safwan Shaikh",
  age: 23,
  location: "Ahmedabad",
  [mySym]: "My Key 1",
  email: "safwan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["MOnday", "Saturday", "Friday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "safwan@chat.com";
// Object.freeze(JsUser);
JsUser.email = "safwan@chatmico.com";
// console.log(JsUser);

JsUser.gretting = function () {
  console.log("Hello Js User");
};

JsUser.grettingTwo = function () {
  console.log(`Hello Js User, ${this.name}`);
};

console.log(JsUser.gretting());
console.log(JsUser.grettingTwo());
