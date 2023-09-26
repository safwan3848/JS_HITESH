//single ton object
// const tinderUser = new Object()

//non single ton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sami";
tinderUser.isLoggedIn = "false";

// console.log(tinderUser);

const regularUser = {
  email: "Test@gmail.com",
  fullname: {
    userfullname: {
      firstname: "safwan",
      lastname: "shaikh",
    },
  },
};
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

const obj4 = {
  5: "a",
  6: "b",
};

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {
  ...obj1,
  ...obj2,
};
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
];

users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

// de structuring

const course = {
  coursename: "Js in hindi",
  price: "999",
  courseInstructor: "Safwan",
};

// course.courseInstructor;

const { courseInstructor: instructor } = course;
console.log(instructor);

//react part start
// const navbar = ({ company }) => {};
// navbar((company = "safwan"));
//react part end

// {
//     "name": "safwan",
//     "coursename": "js",
//     "price": "free"
// }

// [{}, {}, {}];
