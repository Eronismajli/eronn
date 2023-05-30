console.log("Eksportimi i modulit")

export const card = []

export let addToCard = function(product, quantity){
    card.push({product, quantity})
    console.log(`${quantity} ${product} added to card`)
}