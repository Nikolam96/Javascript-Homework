window.onload = function(){

//1
 let pick =  document.querySelectorAll("input")
 let inputs = pick.forEach(element=>console.log(element.name + ": " + element.value))
    console.dir(inputs)

//2
let picking = document.querySelectorAll("#frm1 input")
    let piciking1= Array.from(picking).reduce((acc, input) => ({...acc,[input.name]:input.value}),{})
console.log(piciking1)

// //3
let pick2 = document.getElementsByTagName("input")
console.log(pick2[0].value)

// //4
let myUsername = document.getElementsByClassName("username");
console.log(myUsername[3].value);

// //5
for(let i=0;i<pick.length;i++){
  console.log(document.querySelectorAll("#frm1 input")[i].name + ":"+ document.querySelectorAll("#frm1 input")[i].value)
}

// //6
document.querySelectorAll("#frm1 input")
Array.from(picking).forEach(ele=>console.log(ele.name+": "+ele.value))

//7
  document.addEventListener("submit",(e)=>{e.preventDefault();
  if ((pick2[0].value) == "" || (pick2[1].value) == "" || (pick2[2].value) == "" || (pick2[3].value) == ""){alert("Please fill the req")}
     else{ 
      for(let i=0;i<pick.length;i++){
      console.log(document.querySelectorAll("#frm1 input")[i].name + ":"+ document.querySelectorAll("#frm1 input")[i].value)}
  }})

//8
document.addEventListener("submit",(e)=>{e.preventDefault();
let picking = document.querySelectorAll("#frm1 input")
    let piciking1= Array.from(picking).reduce((acc, input) => ({...acc,[input.name]:input.value}),{})
console.log(piciking1)
})

// //Mario
for(let i=0;i<7;i++){
  let text = "#"
  console.log(text.repeat(i))
}
}