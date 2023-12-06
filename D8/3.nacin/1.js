window.onload = function(){

async function fetchDataAndDisplay(){
	try{
		const response = await fetch("https://swapi.dev/api/people/?format=json")
		const data = await response.json()
		const results = data.results

		// Table

		var input = Object.keys(results[0])
		var table = document.querySelector("table")
		var tr1 = document.createElement("tr")
		table.appendChild(tr1)

		input.forEach(ele=>{
			let th = document.createElement("th")
			tr1.appendChild(th)
			th.innerText= ele
		})
		
		for(let i=0 ;i<results.length;i++){
				var value = Object.values(results[i])		
				var tr = document.createElement("tr")
				
				value.forEach(ele=>{
				let td = document.createElement("td")
				table.appendChild(tr)
				tr.appendChild(td)
				td.innerHTML = ele		
			})
		}
	}catch (error){
		console.log(error)
	}
}

fetchDataAndDisplay()
}