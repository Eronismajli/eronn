let ditet = [
    'E hene',
    'E marte',
    'E merkure',
    'E enjte',
    'E premte',
    'E shtune',
    'E diele'
]

ditet.forEach(function(elementi, indeksi) {
    document.getElementById('raporti').innerHTML += '<p>' + elementi + ':' + indeksi + '</p>' 

})