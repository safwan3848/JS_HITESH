// array

const myArr = [0, 1, 2, 3, 4, 5];

const myArr2 = new Array(1, 3, 5, 6);

// console.log(myArr2[3]);
//console.log(myArr[0]);

// Array Methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(5);
// myArr.shift();

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

//slice , splice

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3);

console.log(myN1);
console.log("B ", myArr);

const myN2 = myArr.splice(1, 3);
console.log("C ", myArr);

console.log(myN2);
