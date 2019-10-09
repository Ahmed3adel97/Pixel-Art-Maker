// Select color input
// Select size input
let hight, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
  hight = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(hight, width);
});

let table = document.getElementById("pixelCanvas");
let colorPicker = document.getElementById("colorPicker");

function makeGrid(h, w) {
  $('tr').remove();

 
 for(let i = 0; i<h; i++){  
   let row = table.insertRow(i);
   for(let j = 0;j<w; j++){
     let cell = row.insertCell(j);
     cell.onclick = function() {
      cell.style.backgroundColor = cell.style.backgroundColor ? null : colorPicker.value;
     }
    }
  }
}
