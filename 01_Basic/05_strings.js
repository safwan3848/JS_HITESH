const name = "safwan"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('safwan-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.charAt(0));
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(1, 4)
// console.log(anotherString);

const newStringOne = "          safwan      "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://safwan.com/safwan%20shaikh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));