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

// JsUser.greetings()
// JsUser.greetingsTwo()

// 02 contractor -> singleton

// Object.create

const tinderUser = new Object()

tinderUser.name = "oma"
tinderUser.location = "nagpur"
tinderUser.id = 937
tinderUser.age = 20

// console.log(tinderUser)

const regularUser = {
    id: 2933,
    fullName : {
        firstName: "oma",
        lastName: "deshmukh"
    }
}

// console.log(regularUser.fullName.firstName)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj4 = {5: "e", 6:"f"}

// const obj3 = { obj1, obj2}  <- wrong way
// const obj3 = Object.assign({}, obj1, obj2, obj4) <- rarelly used
const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3)

const users = [
    one = {
        name: "oma",
        age: 20
    },

    two = {
        name: "niku",
        age: 20
    }, 

    three = {
        name: "kuldya",
        age: 16
    }
]

// console.log(users[1].name)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("age"))

// Destructuring of objects

const course = {
    courseName: "JS in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor
// const {courseInstructor} = course

const {courseInstructor: instructor} = course

console.log(instructor)

// JSON

// {
//     "name": "oma",
//     "id": 123,
//     "location": "nagpur"
// }