// class Coffemachine {
//     waterAmount = 0

//     constructor(power){
//         this.power = power
//         console.log(`Created coffe machine, power: ${power} `)
//     }
// }

// let coffemachine = new Coffemachine(100)
// console.log(coffemachine)

// coofemachine.waterAmount = 200

//krijimi i protected property wateramount duke vendosur _

// class Coffemachine {
//     _waterAmount = 10

//     set waterAmount(value){
//         if(value <0){
//             value = 0
//         }
//         this._waterAmount = value
//     }

//     get waterAmount() {
//         return this._wateramount
//     }

//     constructor(power) {
//         this.power = power
//     }
// }

// let coffe = new Coffemachine(100)
// console.log(coffe)

// coffe.waterAmount = -10
// console.log(coffe)


class Coffemachine{
    #waterLimit = 200;
 /// metode private, duke i shtuar #
    #fixWaterAmount(value){
        if(value < 0) return 0
        if(value > this.#waterLimit) return this.#waterLimit
    }

    //metoda publike
    setWaterAmount(){
        this.#waterLimit = this.#fixWaterAmount(value)
    }
}

let coffemachine = new Coffemachine()
// coffemachine.fixWaterAmount(123)
coffemachine.waterLimit = 1000
coffemachine.setWaterAmount = 200
console.log(coffemachine)
coffemachine.fixWaterAmount = 123
console.log(coffemachine)