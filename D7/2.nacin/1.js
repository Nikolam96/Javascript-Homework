window.onload = function() {

	var tabla = document.createElement("table")
	var caption = document.createElement("caption")
	var th = document.createElement('th')
	var th1 = document.createElement('th')
	var th2 = document.createElement('th')
	var firstRow = document.createElement('tr')

	caption.innerText= "books"
	th.innerText="Author"
	th1.innerText="Book"
	th2.innerText="Delete"

	tabla.appendChild(caption)
	document.body.appendChild(tabla)
	tabla.appendChild(firstRow)
	firstRow.appendChild(th)
	firstRow.appendChild(th1)
	firstRow.appendChild(th2)
	tabla.setAttribute("border","1px")

	function deletebtn(e) {
		 e.target.closest("tr").remove();
		
	  }
	
	addEventListener("submit",(e)=>{
		e.preventDefault()
		let author = document.querySelectorAll("input")[0].value
		let book = document.querySelectorAll("input")[1].value

		var tr= document.createElement('tr')
		var td= document.createElement('td')
		var td1= document.createElement('td')
		var td2= document.createElement('td')
		let button = document.createElement('button')
		
		td.innerText = author
		td1.innerText = book
		button.innerText= "delete"

		tr.appendChild(td)
		tr.appendChild(td1)
		tr.appendChild(td2)
		td2.appendChild(button)
		tabla.appendChild(tr)

		tr.addEventListener("click", deletebtn);
	})



}
	



