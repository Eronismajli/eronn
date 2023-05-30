//callback function

// function greeting(name) {
//     alert("Hello " + name)
// }


// function myfunction(callback){
//     let name = prompt("Please enter your name.")
//     callback(name)
// }

// myfunction(greeting)



// metoda call
const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe",
}

const person2 = {
    firstName: "Smith",
    lastName: "Doe",
}

console.log(person.fullName.call(person1))
console.log(person.fullName.call(person2))


//metoda apply  - grupon argumentet

var fruits = ["banana", "ananas", "lemon"]
var elements = [0,1,2]
fruits.push.apply(fruits,elements)
console.log(fruits)

console.log("---------------------------------")

//metoda bind - metoden e nje objekti e perdoret e nje objekt tjeter por pa e kopju
// kjo njihet edhe si huazim funksional ne javascript

const obj = {
    name: "John"
}

let greeting = function(a,b) {
    return `${a} ${this.name}. ${b}?`
}

let test = greeting.bind(obj)
console.log(test("Hello", "how are you"))