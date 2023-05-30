///destrukturimi i objekteve


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

// console.log(restaurant)

const {namename, openingHours, categories} = restaurant 
// console.log(namename, openingHours, categories)

const{
    namename: restaurantName, openingHours : hours, categories:tags 
} = restaurant
// console.log(restaurantName, hours,tags)

//spread operator

const arr = [7,8,9]
const newarr = [1,2, arr[0], arr[1], arr[2]]
console.log(newarr)


// me ane te spread operatorit

const newarri = [1,2,...arr]
console.log(newarri)


//spread operator - strings

const tekst = 'jCoders'

const karakteret = [...tekst,'', '2023']
console.log(karakteret)

const shkronjat = [...tekst,'', '2023']
console.log(...tekst)


//shtimi i vetive te reja duke perdorur objektin restaurant
const newRestaurant = {foundedIn : 1998, ...restaurant, founder: 'Kris'}

//ndryshimi i vetive te reja duke perdorur 
newRestaurant.namename = 'Endri'
newRestaurant.categories = ['Javascript','Python']
console.log(newRestaurant)
