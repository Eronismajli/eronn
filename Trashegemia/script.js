// class Person {
//     constructor(name){
//         this.name = name
//     }

//     hello(){
//         console.log(`hello ${this.name}`)
//     }
// }


// class Student extends Person {}

// let studenti1 = new Student("Endi")
// studenti1.hello()


//fjala kyqe super

// class Person{
//     constructor(name){
//         this.name = name
//     }

//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// class Student extends Person {
//     constructor(name){
//         console.log("Creating student class")
//         super(name)
//     }
// }


// let student1 = new Student("Shuajb")
// student1.greet()


class Mall{
    constructor(name) {
        this.name = name
    }

    store(){
        console.log(`${this.name} is present in the Albi Mall`)
    }
}
    class store extends Mall {
        constructor(name) {
            super(name)
        }
    }
let store1 = new store("Zara")
let store2 = new store("KFC")

console.log(store1.store())
store2.store()
