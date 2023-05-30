const restaurant = {
    namename: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread","Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open:12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        }, 
        sat: {
            open: 0,
            close: 24
        }

    }
}


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

//litrerimi ne te dhenat e starterMenu dhe Mainmenu


// unaza for qe e kemi mesu me heret
// for (let i=0; i<menu.length; 1++) {
//     console.log(menu[i])
// }

// for of - metoda entries() - krijon nje array te re duke shfaqur keys/values

// for(const item of menu.entries()){
//     console.log(item)
// }

// printimi i menuse sukur ne restaurante te verteta

// for (const item of menu.entries()){
//     console.log(`${item[0]+1}: ${item[1]}`)
// }

//shembulli tjeter- me ane te destrukturimit per paraqitjen e indeksit dhe elementit

for (const[i, el] of menu.entries()) {
    console.log(`${i+1}: ${el}`)
}

//shtypja e keys te nje objekti
const karakteristikat = Object.keys(restaurant)
console.log(karakteristikat)

// te tregohet kur eshte i hapur restauranti duke perdorur object.keys

let schedule = Object.keys(restaurant.openingHours)
// console.log(schedule)

let openres = `We are open on ${schedule.length} days `
console.log(openres)

for (const day of schedule){
    openres = openres + `${day},`
}

console.log(openres)

//shtypja e vlerave te objektit
let vlerat = Object.values(restaurant)
console.log(vlerat)

//Object.entries
const entries = Object.entries(restaurant)
console.log(entries)

//iterimi ne variabla entries

// for (const )