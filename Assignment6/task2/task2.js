let table = document.getElementById("table");
let addbtn = document.getElementById("add-btn");
let delbtn = document.getElementById("delete-btn");

table.style.border = "1px solid black";
addbtn.style.color = "green";
addbtn.style.marginTop = "2vh";
addbtn.style.padding = "0.5rem";

delbtn.style.color = "red";
delbtn.style.marginTop = "2vh";
delbtn.style.padding = "0.5rem";

addbtn.addEventListener("click", addRow);

delbtn.addEventListener("click", removeRow);

function addRow() {
  let newrow = table.insertRow();
  let cell = newrow.insertCell();
  cell.innerHTML = "New Row";
}
function removeRow() {
  var rowCount = table.rows.length;
  table.deleteRow(rowCount - 1);
}
