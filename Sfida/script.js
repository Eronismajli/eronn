class Car{
    constructor(model, speed){
        this.model = model,
        this.speed = speed
    }


    accelerate() {
        this.speed +=10
        console.log(`${this.model} ka shpejtesine ${this.speed} km/h`)
    }

    brake(){
        this.speed -= 5
        console.log(`${this.model} ka shpejtesine ${this.speed} km/h`)
    } 

    get speedus(){
        return this.speed / 1.6
    }

    set speedus(speed){
        this.speed = speed * 1.6
    }
}

let ford = new Car("ford", 120)
ford.accelerate()
ford.brake()
console.log(ford.speedus)

fordspeedus = 50
console.log(ford)