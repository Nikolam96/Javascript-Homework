// 1
var number= 133;

if(number%3 == 0 && number%5 == 0){
	console.log("Fizz buzz")
}
else if(number%5 == 0){
	console.log("Buzz")
}
else if(number%3 == 0){
	console.log("Fizz")
}
else {
	console.log("Please enter a new number!")
}

// 2
var color = "Blue";

if (color == "orange"){
	console.log("You got right answer")
}
else{
	console.log("Wrong answer")
}

// 3
var num = 213;
console.log("What is biggest number u can divide 333 with")

if (num == 333) {
	console.log("I GOT U")
}
else if (num == 111) {
	console.log("BRAVOS")
}
else {
	console.log("LEARN MATH")
}

// 4
var coffe = 1
console.log("How many spoons of coffe u add");

if(coffe >=2 && coffe<= 3){
	console.log("I want u coffe")
}
else{
	console.log("Give me water")
}

// 5
var char = "char"
console.log("What is 'a'?")

if(char == "Char" || char == "Character" ){
	console.log("Right answer")
}
else if(char == "char" || char == "character"){
	console.log("Right answer")
}
else{
	console.log("Wrong answer")
}

// 6
var color = "red";
console.log("What color u get when u mix red and blue?")

if (color == "orange" || color == "onrg"){
	console.log("You got a correct answear!")
}
else {
	console.log("You got a wrong answear!")
}

// 7
var month = 2;
console.log("How many days are in month?")

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8
	 || month == 10  || month == 12){
		console.log ("Month has 31 days");
	 }
else if (month == 2){
	console.log ("Month has 28 days")
}
else if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11){
	console.log ("Month has 30 days")
}

// 8
var time = 3
console.log("What time is it?")

if (time <= 12 && time >= 6){
	console.log("It's morning")
}
else if (time <= 22 && time > 12) {
	console.log("It's afternoon")
}
else {
	console.log("It's evening")
}

//9
var a = 5;
var b = 5;
var c = 5;
console.log("Which number is largest?")

if (a > b && a > c){
	console.log(a+" is the largest number!")
}
else if (b > a && b > c){
	console.log(b+" is the largest number!")
}
else if (c >a && c > b){
	console.log(c+" is the largest number!")
}
else if (a == b  || a == c || b == c || c ==a ){
	console.log("Numbers are equal!")
}
else{
	console.log("Enter a number!")
}

//10
var emoji = "s"
console.log("Plase enter some capital letter: A , B , C or D")

if(emoji == "A") {
	console.log(":-)")
}
else if (emoji =="B"){
	console.log(":-B")
}
else if (emoji =="C"){
	console.log(":-S")
}
else if(emoji == "D"){
	console.log(":-D")
}
else{
	console.log("You enter a wrong letter!")
}

// Presmetki
var x=521432145612;
var y=12121221;

var multiplication = x * y;
var division = x / y;
var addition = x + y;
var deduction = x - y;
var residue = x % y;

console.log(multiplication, division, addition, deduction, residue)