// let x = prompt("Sheno nje numer nga 1-100")
// let f = x + "!=" + faktorieli(x)
// document.getElementById("example").innerHTML = f


// function faktorieli(x){
//     let rezultati = 1
//     if(x== 0 || x==1) {
//         return rezultati
//     } else {
//         for(let i=x; i>=1; i--){
//             rezultati = rezultati *i
//         }
//         return rezultati
//     }
// }


let n = prompt("Pozita e numrit ne sekuence")
document.getElementById("example").innerHTML = fibonacci(n);

function fibonacci(n) {
    var x = 1,
    y = 0,
    tmp;

while (n >= 0) {
    tmp = x;
    x = x + y;
    y = tmp;
    n--;
}

return y;
}
