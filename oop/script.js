//variablat si veti 

// const car = {
//     modeli: "bmw",
//     ngjyra: "black",

//     vozit: function(){
//         console.log("Kjo veture eshte ne rregull")
//     }
// }

// car.vozit()
// console.log(car.ngjyra)


/// konstruktori  emri duhet te jete me te madhe

// function Car(modeli){
//     this.modeli = modeli
//     this.vozit = function(){
//         console.log("Kjo veture eshte ne rregull")
//     }
// }

// const diqka = new Car("bmw")
// console.log("diqka")


//prototype

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName,
//     this.birthYear = birthYear
// }

// const jonas = new Person("Jonas", 1992)
// Person.prototype.calcAge = function(){
//     console.log(2023 - this.birthYear)
// }

// jonas.calcAge()


const Car = function(modeli, shpejtesia){
    this.modeli = modeli,
    this.shpejtesia = shpejtesia
}


Car.prototype.accelerate = function(){
    this.shpejtesia += 10
    console.log(`${this.modeli} ka shpejtesine ${this.shpejtesia} km/h`)
}


Car.prototype.brake = function(){
    this.shpejtesia -= 5
    console.log(`${this.modeli} ka shpejtesine ${this.shpejtesia} km/h `)
}

const bmw = new Car("bmw", 120)
const mercedes = new Car("mercedes", 95)

bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
bmw.brake()
mercedes.accelerate()
