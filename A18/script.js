// let person = {
//     firstname: 'filan',
//     lastname: 'fisteku',
//     age: 21
// }

// console.log(person.firstname)
// console.log(person.lastname)

// console.log('une jam ' + person.firstname + '' + person.lastname + 'dhe jam' + person.age + 'vjeq'; )




// let user = new Object()
// console.log(user)

// let dog = {
//     name: 'rex',
//     Race : 'dalmatin',
//     age: 3,
//     color: 'white/black'
// }

// dog.isdangerous = false
// delete dog.color
// console.log('race' in dog)


let person = {
    name : 'Robert',
    surname: 'Lewandowski',
    birthyear : 1988,
    profession: 'Footballer',
    calcAge : function () {
        return 2022 - this.birthyear 
    },
     something: function() {
        return this //=> return all object
     }
}
console.log(person.something().name)
console.log(person.calcAge())

// let str = 'akademia jcoders'

// let num = 55

// console.log(num.toString())

// console.log(str.length)

// console.log(this)

// alert('tell something')

// this.alert('tell something')

let window2 = {
    alert: function(str) {
        window.alert(str)
    }
} 

window2.alert('tell something')