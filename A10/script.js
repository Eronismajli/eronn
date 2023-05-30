function calcavg(a, b, c) {
    let result = (a + b + c) / 3
    return result
}


let avg1 = calcavg(44, 23, 71)
let avg2 = calcavg(65, 54, 49)

const checkwinner = (team1, team2) => {
    if (team1 >= 2 * team2) {
        return "Team 1 Win"
    } else if (team2 >= 2 * team1) {
        return "Team 2 Win"
    } else {
        return "No one win"
    }
}

console.log(checkwinner(avg1, avg2))
console.log(winner)

