// class Person {
//     constructor(first, last) {
//         this.first = first
//         this.last = last
//     }

//     fullname() {
//         return `${this.first} ${this.last}`
//     }
// }

// const person1 = new Person("Endi", "Fazliu")
// console.log(person1.fullname())

//shtimi i get

// class Person {
//     constructor(first, last) {
//         this.first = first
//         this.last = last
//     }

//     get fullname() {
//         return `${this.first} ${this.last}`
//     }

//     set fullname(newname){
//      const [first, last] = newname.split(" ")
//      this.first = first
//      this.last = last

//     }
// }

// const person1 = new Person("Endi", "Fazliu")
// console.log(person1.fullname)
// person1.first = "Era"

// console.log(person1.fullname)

// person1.fullname = "Daria Gjonbalaj"



class User{
    constructor(first, last){
        this.first = first
        this.last = last
    }
 set first(value){
    this.firstName = value.toLowerCase();
 }

set last(value){
    this.lastName = value.toLowerCase();
}
   get fullname(){
        return this.firstName + " " + this.lastName
    }
}

const user1 = new User("Shpat", "Sadikaj")
const user2 = new User("Shuajb", "Limani")
console.log(user1.fullname)
console.log(user2.fullname)