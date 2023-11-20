let gradovi = [
    {city:"Skoplje", popularity:546824, state:"Macedonia"},
    {city:"Nis", popularity:185987, state:"Serbia"},
    {city:"Belgrade", popularity:1374245, state:"Serbia"},
    {city:"Zagreb", popularity:806341, state:"Croatia"},
    {city:"Ljubljana", popularity:279631, state:"Slovenia"},
    {city:"Verona", popularity:257353, state:"Italy"},
    {city:"Amsterdam", popularity:821752, state:"Netherlands"},
]

let zbir = gradovi.reduce((acc,sum) => acc + sum.popularity,0)
console.log(zbir)

let prosek = (b) => {return zbir/b}
console.log(prosek(7))

let populacija = gradovi.sort((a, b) => b.popularity - a.popularity)
console.log(populacija)

let sortA = gradovi.filter((a) => a.popularity > 100000 && a.city[0] == "A")
console.log(sortA) 

let prvaTri = gradovi.slice(0,3)
console.log(prvaTri)