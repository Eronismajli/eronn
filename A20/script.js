// const numbers = [2,3,4]

//sintaksa speciale - destructuring

// const [x,y,z] = numbers 
// console.log(x)
// console.log(y)
// console.log(z)



// emertimi i variablave behet sipas deshires
// const [first,second,third] = numbers
// console.log(second)


// const grupi168 = ['Shpati','Era','Eroni','Olti','Endi']

// const [first , ,second, third, fourth] = grupi168

// console.log(first)
// console.log(second)


//nested arrey
const vargu = [3,4,[5,6]]
const [i,j,[k,l]] = vargu
console.log(j)

//ose 
const vargu1 = [3,4,[5,6]]
const [a, ,b] = vargu1
console.log(b)

const vargu2 = [5,6]
const [o,p,q] = vargu2

console.log(q)

