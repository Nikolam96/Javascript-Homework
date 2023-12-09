
//1


function converter (numb){
    let number = Math.round(numb)
    const numbers=["zero","one","two","three","four","five","six","seven","eight","nine"]
    let string = number.toString()
    let fisrtNumber = string[0]
    let secondNumber = string[1]
    let thirdNumber = string[2]
   if(number>=100 && number<1000){
    console.log(numbers[fisrtNumber] + " " + numbers[secondNumber] + " " + numbers[thirdNumber])
   }else if(number>=10 && number<100){
    console.log(numbers[fisrtNumber] + " " + numbers[secondNumber])
   }else if(number<10) {
    console.log(numbers[fisrtNumber])
   }else{
    alert("enter number beetwen 0 and 999")
   }

}
converter(999)


//2 

function converter1 (numb) {
    let number = Math.round(numb)
    const numbers=["zero","one","two","three","four","five","six","seven","eight","nine"]
if(number>=10){
    let num = number/10
    let rest = number%10
    let round = Math.floor(num)
    console.log(numbers[round] + " " + numbers[rest])    

}else if(number<10){
    console.log(numbers[number])
}else{
    alert("Enter number beetwen 0 and 99")
}
}
converter1(10.88)

