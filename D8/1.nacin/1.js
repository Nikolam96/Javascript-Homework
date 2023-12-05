window.onload = function(){

async function fetchDataAndDisplay(){
	try{
		const response = await fetch("https://swapi.dev/api/people/4/?format=json")
		const data = await response.json()

		let niko = Object.values(data) 
		let niko1 = Object.keys(data)

		console.dir(niko)
		let thead = document.querySelector("thead")
		let tbody = document.querySelector("tbody")
		
		niko1.forEach(e=>{
			let th = document.createElement("th")
			thead.appendChild(th)
			th.innerText = e
		})

		niko.forEach(e=>{
			let td = document.createElement("td")
			tbody.appendChild(td)
			td.innerHTML = e
		})

		
	} catch (error){
		console.log(error)
	}
}

fetchDataAndDisplay()
}