// let varg = [22,14,21,45,66]

// numritek = varg.findIndex(function(element){
//     return element % 3 == 0
// })

// console.log(numritek)




//// SOME /////

// let vargu = [5,10,15,20,25]

// vargu_some = vargu.some(function(elementi){
//     return elementi < 20
// })

// console.log(vargu_some)



//// EVERY //////

// let vargu = [5,10,15,20,25]

// vargu_every = vargu.every(function(elementi){
//     return elementi > 5
// })

// console.log(vargu_every)



//// REDUCE /////

// let vargu = [10,20,30,40,50,60]

// shuma = vargu.reduce(function(mbledhesi, vleraaktuale){
//     return mbledhesi + vleraaktuale
// })

// console.log(shuma)



// let vargu = [100,50,10]

// shuma1=vargu.reduce(function(mbledhesi, vleraaktuale){
//     return mbledhesi / vleraaktuale
// })

// console.log(shuma1)
// console.log('--------------')

// shuma2 = vargu.reduceRight(function(mbledhesi, vleraaktuale){
//     return mbledhesi / vleraaktuale
// })

// console.log(shuma2)




/////// FLAT ///////

// let lista = [
//     ['a','b','c'],
//     ['d','e','f'],
//     ['g','h','i']
// ]

// a = lista.flat()

// console.log(a)

let vargu = [5,10,12,4,8]

vargu2 = vargu.flatMap(function(elementi){
    return elementi **2
})

console.log(vargu2)