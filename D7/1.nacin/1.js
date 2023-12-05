window.onload = function(){

  const tBodyEl = document.querySelector("tbody")

  function addBook(e) {
    e.preventDefault();
    const author = document.getElementById('author').value;
    const book = document.getElementById('book').value;

    tBodyEl.innerHTML += `
    <tr>
          <td>${book}</td>
          <td>${author}</td>
          <td><button class="delbtn">Delete</button></td>
    </tr>`;

    function deletebtn(e) {
      const btn = e.target;
      btn.closest("tr").remove();
    }
    tBodyEl.addEventListener("click", deletebtn);
  } addEventListener('submit',addBook )
    






}