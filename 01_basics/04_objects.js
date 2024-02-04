// 01 literals

let symbol = Symbol("key1")

const JsUser = {
    name: "oma",
    "full name": "omeshwar deshmukh",
    age: 19,
    [symbol]: "symbol",
    email: "oma@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["mon", "thu", "sat"]
}

// getting data from object 

// console.log(JsUser["name"])
// console.log(JsUser["full name"])
// console.log(JsUser[symbol])
// console.log(typeof JsUser[symbol])

// changing values of object

JsUser.email = "oma@chatgpt.com"

// console.log(JsUser["email"])

// locking object

// Object.freeze(JsUser)

JsUser.age = 22

// console.log(JsUser)

JsUser.greetings = function() {
    console.log("Hello user!")
}

JsUser.greetingsTwo = function() {
    console.log(`Hello, ${this.name}!`)
}

JsUser.greetings()
JsUser.greetingsTwo()

// 02 contractor -> singleton

// Object.create