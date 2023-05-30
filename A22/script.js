 //sets

 const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta'])
//  console.log(orderSet)
//me ane te size tregojme sa elemente i ka seti
// console.log(orderSet.size)


// metoda has - tregon a ekziston nje element ne set
// console.log(orderSet.has('Risotto'))
// console.log(orderSet.has('pizza'))


//metoda add shton elemente ne set
orderSet.add('Supe')
orderSet.add('Apple')
// console.log(orderSet)


//metoda delete - fshin elemente ne set
orderSet.delete('Supe')
// console.log(orderSet)


//metoda clear - fshin te gjitha elementet e Set
// orderSet.clear()
// console.log(orderSet)

//iterimi ne Set
for (const order of orderSet){
    // console.log(order)
}

//array to Set
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef',]

const arraySet = new Set(staff)
console.log(arraySet)




//kur ne set kemi string
 const emri = new Set('Whilshere')
//  console.log(emri)

 const emri2 = new Set('Scissors')
//  console.log(emri2)