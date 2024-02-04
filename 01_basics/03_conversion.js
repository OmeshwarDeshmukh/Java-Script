let age = "19abc"

// console.log(typeof age)

let valueInNumber = Number(age)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" it will easily convert in to 33
// "33abc" it will convert in to NotANumber (NaN) but type is number
// true -> 1 and false -> 0

let isLoggedIn = true

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// "" after convert in boolean it gives false
// "oma" afetr convert in boolean it gives true

let someNumber = 33
let someNumberInString = String(someNumber)
console.log(someNumberInString)
console.log(typeof someNumberInString)