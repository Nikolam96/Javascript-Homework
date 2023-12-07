window.onload = function() {
    //1

class transport {
    constructor(name,year){
        this.name = name
        this.year = year
    }

    age() {
        if(this.year < 2013) {
            console.log("This is too old transport")
        }else{
            console.log("This is new transport")
        }
    }
}

let trans = new transport("Ford",2001)
trans.age()
console.log(trans)

class car extends transport {
    constructor(name,year,model){
        super(name,year)
        this.model = model
    }
    age(){
        if (this.name == "ford" && this.year < 2013) {
            console.log("Change car")
        }else{
            console.log("You made a good choise")
        }
    }

}

let ford = new car("ford",2010,"puma")
ford.age()
console.log(ford)

class motor extends transport {
    constructor(name,year,model){
        super(name,year)
        this.model = model
    }
    age(){
        if (this.name == "ducati" && this.year < 2013) {
            console.log("Change motor")
        }else{
            console.log("You made a good choise" +" " + "keep going")
        }
    }

}

let yamaha = new motor("yamaha",2010,"R600")
yamaha.age()
console.log(yamaha)

class forklift extends car {
    constructor(name,year,model,weight){
        super(name,year,model)
        this.weight = weight
    }

    age(){
        if (this.name == "linde" && this.weight < "3T") {
            console.log("Best Forklift")
        }else{
            console.log("You made a good choise" +" " + "keep going")
        }
    }

}

let linde = new forklift("linde",2010,"H25","2T")
linde.age()
console.log(linde)


//2

class animal {
    constructor(name,sort){
        this.name = name
        this.sort = sort
    }

    hello (){
        console.log(`My name is ${this.name} and i'm ${this.sort}`)
    }
}
 let barky = new animal("Rex","Dog")
 console.log(barky)
 barky.hello()

 class cat extends animal {
    constructor(name,sort,color){
        super(name,sort)
        this.color = color
    }

    hello(){
     console.log(`My name is ${this.name},the ${this.sort} and i'm ${this.color}`)
    }
 }

 let katy = new cat("Kat","Cat","white")
console.log(katy)
katy.hello()


//3 
class person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    metMe(){
        console.log(`I'm ${this.name} i have ${this.age}`)
    }
}

let niki = new person("Nikola", 27)
console.log(niki)
niki.metMe()


class employee extends person {
    constructor(name,age,position){
        super(name,age)
        this.position = position
    }

    metMe() {
        console.log(`I'm ${this.name} i have ${this.age},i love my job as ${this.position}`)
    }
}

let progy = new employee("Ana",22,"Programer")
console.log(progy)
progy.metMe()

class customer extends person {
    constructor(name,age,item){
        super(name,age)
        this.item = item

        }

        metMe(){
            console.log(`I'm ${this.name} i have ${this.age},i love to buy ${this.item}`)
        }
    }

let proxy = new customer("Tildla",27,"Proteine bars")
console.log(proxy)
proxy.metMe()
}

