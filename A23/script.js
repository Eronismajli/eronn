const Staff = new Map([['Menaxher',1], ['Kuzhinier',2], ['Kamarier',3]])
// console.log(Staff)

//metoda set - shtimi i elementeve ne map
Staff.set('Programer',3)
Staff.set('Menaxher',1)
// console.log(Staff)
// console.log(Staff.size)


//metoda has - nese ekziston elementi ne map
Staff.has('Kamarier')
// console.log(Staff.has('Kamarier'))

console.log(Staff.delete('Menaxher'))
console.log(Staff)
console.log(Staff.delete('Kuzhinier'))
console.log(Staff)

//metoda clear fshin elementet ne map

console.log(Staff.clear())
console.log(Staff)