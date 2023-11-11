console.log("Daily Menu in Interspar")
var dayMenu = 2;
switch (dayMenu) {
    case 1:
        console.log("Pasta Bolognjese and Cheese")
        break
    case 2:
        console.log("Chicken burger and BBQ sause")
        break
    case 3:
        console.log("Meatball with Tomato sause")
        break
    case 4:
        console.log("Eggs with hotdog")
        break
    case 5:
        console.log("Pasulj with meat")
        break
    default:
        console.log("Please enter number 1 to 5 for your's daily menu")
}

console.log("Choose 1 to 5 and win a price")
var price = 3;

switch (price) {
    case 1: 
        console.log("Better luck next time!")
        break
    case 2:
        console.log("You win a belgium chocolade")
        break
    case 3:
        console.log("You win a brand new Mercedes A class")
        break
    case 4:
        console.log("You win a new Dior parfum")
        break
    case 5:
        console.log("Pick a new number")
        break
    default:
        console.log("Please pick a number 1 to 5. Have a nice day")
}

console.log("Pick your best Laptop")
var laptop = 2

switch(laptop) {
    case 1:
        console.log("Macbook")
        break
    case 2:
        console.log("HP")
        break
    case 3:
        console.log("Dell")
        break
    case 4:
        console.log("Asus")
        break
    case 5: 
        console.log("Lenovo")
        break
    default:
        console.log("Please enter nubmer 1 to 5")
}

console.log("What your favorite season of the year?")
var season = 4 ;

switch(season) {
    case 1:
        console.log("Witner")
        break
    case 2:
        console.log("Spring")
        break
    case 3:
        console.log("Summer")
        break
    case 4:
        console.log("Autumn")
        break
    default:
        console.log("You choose a wrong number,please enter 1 to 4")
}

console.log("Favotire car?")
var car = 3;

switch(car) {
    case 1:
        console.log ("Audi")
        break
    case 2:
        console.log("BMW")
        break
    case 3: 
        console.log("Mercedes")
        break
    case 4: 
        console.log("Skoda")
        break
    case 5:
        console.log("Aston martin")
        break
    default:
        console.log("Plase enter number 1 to 5")
    }

// Funkciji

var Wellcome = (Age, City, State, Car, Profession, name) =>{
    console.log ("My name is " + name + " i'm " + Age + " and i come from " + State + ".I was born in " + City + ".My favorite car is "+ Car + ".Im working as " + Profession + "in Ljubljana.")
}

Wellcome (27, "Nis", "Srbija", "Audi", "Serviser", "Nikola")
Wellcome

var operators = (a, b, c) => {
   return a*(b+c) 
}
// console.log(operators(25, 40, 41))

var multiple = (a, b, c) => {
    console.log (a+a+a*b)
    console.log ("Im a new in this")
    console.log (typeof car)
}
multiple(10,4,1)

var idk = () => {
    console.log("NO name")
}
idk ()

var lastone = (n, a, m) => {
    console.log(n+a-m)
}
lastone(14, 2, 12)

var toFarenheit = (c) => {
    console.log(c*33.8)
}
toFarenheit(20)

var toCelsius = (f) => {
    console.log(f/33.8)
}
toCelsius(33.8)

var toMeters= (f) => {
    console.log(f*0.3048)
}
toMeters (10)

var Nizz = ["Nis","Skoplje","Ljubljana","Bec"]
console.log(Nizz)

var nica = 3 
console.log(Nizz[nica])

var test = () => {
    let pops = Nizz.pop()
    console.log(Nizz)
    Nizz.push("Beograd","Novi Sad")
    console.log(Nizz)
    let popis = Nizz.toString()
    console.log(popis)
}

var Drzave = ["Slovenija", "Srbija", "Makedonija", "Grcka", "Italija", "Austrija", "Danska", "Norveska", "Finska", "Spanija"]
console.log(Drzave)

console.log(Drzave.includes("Slovenija"))
console.log(Drzave.sort())
console.log(Drzave.join(" - "))

let example = "Nikola Mitic"
console.log(example.substring(1, 9))
console.log(example.substr(1, 9))
console.log(example.replace("Mitic", "Mitovski"))
let deloviString = example.split ("")
console.log(deloviString)
console.log(typeof Drzave)