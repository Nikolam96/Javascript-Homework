window.onload = function(){

async function fetchDataAndDisplay(){
	try{
		const response = await fetch("https://swapi.dev/api/people/?format=json")
		const data = await response.json()
		const results = data.results
		console.log(results)
		
		var thead = document.querySelector("thead")
		var tbody = document.querySelector("tbody")

		// let input = results.forEach(element => {
		// 	let obj= element
		// 	let key = Object.keys(obj)[0]
		// 	let value = Object.values(obj)[0]
			
		// 	let th = document.createElement("th")
		// 	thead.appendChild(th)
		// 	th.textContent = key

		// 	let td = document.createElement("td")
		// 	tbody.appendChild(td)
		// 	td.textContent = value
		// });
		
		// for(element of results){
		// 	let th = document.createElement("th")
		// 	thead.appendChild(th)
		// 	let name = "Films" 
		// 	th.textContent = name

		// 	let td = document.createElement("td")
		// 	tbody.appendChild(td)
		// 	td.textContent = element.films[0]
		// }
	} catch (error){
		console.log(error)
	}
}

fetchDataAndDisplay()
}