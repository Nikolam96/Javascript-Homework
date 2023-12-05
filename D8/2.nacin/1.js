window.onload = function(){

async function fetchDataAndDisplay(){
	try{
		const response = await fetch("https://swapi.dev/api/people/4/?format=json")
		const data = await response.json()
		
		var thead = document.querySelector("thead")
		var tbody = document.querySelector("tbody")
		
		console.log(data)

		for(key in data){
			let th = document.createElement("th");
			thead.appendChild(th)
			th.innerHTML= key
		}

		for(key in data){
			let td = document.createElement("td");
			tbody.appendChild(td)
			td.innerHTML =  data[key]
		}
	} catch (error){
		console.log(error)
	}
}

fetchDataAndDisplay()
}