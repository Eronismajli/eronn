// let example = async () => {
//     let x = await "Hello World"
//     console.log(x)

// }

// console.log("akademia")
// example()
// console.log("jcoders")
// console.log(2022)

// Promises - kane dy gjendje ressolve dhe reject. Kur rezultati eshte i papercaktuar gjendja e Promise eshte pending. Nese nuk kemi rezultatin e duhur gjendja e Promise eshte Ressolve. Nese nuk e kemi rezultatin e duhur eshte Reject.


// const Akademia = new Promise((resolve, reject) =>{
// let x = "Akademia jCoders"
// if(x=== "Akademia jCoders") resolve("Me sukses")
// reject("Ka gabime")
// })

// Akademia.then ((res)=> {
//     console.log(res)
// }) .catch((error)=> {
//     console.log(error)
// })

//detyra me promise

let x = 4
const Img = new Promise((resolve, reject) =>{
    if(x <= 5) resolve("Upload succesfully completed")
    reject()
})

