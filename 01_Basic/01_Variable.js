const accountId = 1;
let accountEmail = "shaikhsafwan040@gmail.com";
var accountPassword = "Safwan@123"
accountCity = "Ahmedabad";
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])