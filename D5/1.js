// Promises

//1
 function getUserData(){
     return new Promise((resolve,reject)=>{
		setTimeout(()=>{
            let a=1 
            for(i=0; i<3 ;i++){
                console.log(a)
                a++
            }
            if(a=10) {
                resolve("Success")
            }else{
                reject("Failed")
            }
		},1000)
	})
}

async function fetchUser(){
    try{
        const user = await getUserData()
        console.log(user)
    } catch (error) {
            console.log("Something went wrong "+ error)
        } finally {
            console.log("Skloni me")
        }
    }
    
    fetchUser()

    setTimeout(()=>
    getUserData().then(a=>console.log(a)).catch(a=>console.log(a)),5000 )

    console.log("Hello World")

//2 

function promise2(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            var newarray = [123,231,4321,4442]
            var sum = newarray.map(num=>num*10)
            console.log(sum)
            
            if(sum[2]>=2000) {
                resolve("Bravo")
                console.log("Nikolica")
            }else{
                reject("Vise srece")
            }
        },3000)
        
    })
}

async function Promise23 () {
    try {
        const nikola = await promise2()
        console.log(nikola)
    } catch(error) {
        console.log("Something is not okay "+error )
    }
}

setTimeout(()=>Promise23(),10000)

promise2().then(b=>console.log(b)).catch(b=>console.log(b))

console.log("Hello World")


//3

function promise3(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        for(i=0; i<=3; i++){
            if(i == 3) {
                var boolean=true
            }else{
                var boolean=false
            }
        }
        if(boolean == true) {
            resolve("boolean is true")
        }else{
            reject("Ponovi")
        }
       },100)
    })
}

async function promise33() {
    try {
        const promise333 = await promise3()
        console.log(promise333)
    }catch(error){
        console.log("Nesto nije uredu "+error)
    }
}

setTimeout(()=>promise33(),1000)

promise3().then(c=>console.log(c)).catch(c=>console.log(c))

//4 

function incrementCounter(){
    console.log("Some Function")
}
var interval = setInterval((incrementCounter),1000)

setTimeout(()=>{
	clearInterval(interval);//funkcija koja go prekinuva intervalot
},10000)

function promise4() {
    return new Promise((resolve, reject)=>{
        var trust = true
        if(trust == true){
            resolve("Tose Proeski")
        }else{
            reject("Big error")
        }
    })
}

setTimeout(()=>
promise4().then(d=>console.log(d)).catch(d=>(console.log(d))),2800)

async function promise44() {
    try {
        const promise444 = await promise4()
        console.log(promise444)
    }catch(error){
        console.log(error)
    }

}
promise44()

//5

function promise5() {
    return new Promise ((resolve,reject)=> {
        var nizza = ["banana","sljiva","dunja","breskva","pomorandza","kivi","visnja","kruska","lubenica","jabuka","nar","kaki","luk"]
        if (nizza.includes("luk")){
            resolve("Luk je povrce")
        }else{
            reject("error404")
        }
    })
}

setTimeout(()=>{
    promise5().then(f=>console.log(f)).catch(f=>console.log(f))
},10000)

async function promise55(){
    try{
        let promise555 = await promise5()
        console.log(promise555)
    }catch(error){
        console.log(error)
    }
}
promise55()


