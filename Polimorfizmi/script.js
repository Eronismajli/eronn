// polimorfizat - objekte te ndryshme te klasave femije perdorin metoda te ndryshme

// class Animal {
//     speak(){
//         console.log("Animals have different sounds")
//     }
// }

// class Dog extends Animal {}
// class Cat extends Animal {}


// krijohet objektet

// let dog = new Dog()
// dog.speak()
// let cat = new Dog()
// cat.speak()


// class Car {
//     Bmw() {
//         console.log("Origin of Bmw is Deutschland")
//     }
// }

// class BmwX1 extends Car {}
// class BmwX3 extends Car {}
// class BmwX5 extends Car {}
// class BmwX6 extends Car {}

// let bmwx1 = new BmwX1()
// bmwx1.Bmw()
// let bmwx3 = new BmwX3()
// bmwx3.Bmw()
// let bmwx5 = new BmwX5()
// bmwx5.Bmw()
// let bmwx6 = new BmwX6()
// bmwx6.Bmw()


//metoda overriding 

// class Animal {
//     speak(){
//         console.log("Animals have different sounds")
//     }
// }

// class Dog extends Animal {
//     speak(){
//         console.log("Dog says hum hum")
//     }}

//     class Cat extends Animal {
//         speak(){
//             console.log("Cat says miau miau")
//         }}  

//         class Fox extends Animal {
//     speak(){
//         console.log("Fox says uu")
//     }} 

//     let x = [new Dog(), new Cat(), new Fox()]
//     x.forEach(function(info) {
//         info.speak()
//     })

class Car {
    Bmw() {
        console.log("Origin of Bmw is Deutschland")
    }
}

class BmwX1 extends Car {
    Bmw() {
        console.log("Small car")
    }
}
class BmwX3 extends Car {
    Bmw(){
        console.log("Mid car")
    }
}
class BmwX5 extends Car {
    Bmw(){
        console.log("Big car")
    }
}
class BmwX6 extends Car {
    Bmw(){
        console.log("Luxury car")
    }
}
let x = [new BmwX1(), new BmwX3(),new BmwX3(),new BmwX5(),new BmwX6() ]
x.forEach(function(info){
    info.Bmw()
})