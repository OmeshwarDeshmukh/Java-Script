const accountId = 123
let accountEmail = "omeshwardeshmukh12@gmail.com"
var accountPassword = "321"
accountCity = "Nagpur"

// accountId = 242 - not allowed in const
accountEmail = "oma@google.com"
accountPassword = "13992"
accountCity = "Mumbai"

// console.log(accountEmail)
// console.log(accountPassword)
// console.log(accountCity)

console.table([accountEmail, accountPassword, accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/