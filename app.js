// funcion numero random
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// funcion para generar numeros randoms sin repetirse
function generateNumbersRandoms(min, max, amount) {
  const result = new Set();
  while (result.size < amount) {
    result.add(random(min, max));
  }
  return Array.from(result);
}

// declaramos las 9 columnas con sus respectivos numeros randomns ordenados
const col1 = generateNumbersRandoms(1, 9, 3).sort((a, b) => a - b);
const col2 = generateNumbersRandoms(10, 19, 3).sort((a, b) => a - b);
const col3 = generateNumbersRandoms(20, 29, 3).sort((a, b) => a - b);
const col4 = generateNumbersRandoms(30, 39, 3).sort((a, b) => a - b);
const col5 = generateNumbersRandoms(40, 49, 3).sort((a, b) => a - b);
const col6 = generateNumbersRandoms(50, 59, 3).sort((a, b) => a - b);
const col7 = generateNumbersRandoms(60, 69, 3).sort((a, b) => a - b);
const col8 = generateNumbersRandoms(70, 79, 3).sort((a, b) => a - b);
const col9 = generateNumbersRandoms(80, 90, 3).sort((a, b) => a - b);

// funcion para generar las filas
function generateRow(row) {
  const rowSelect = [];
  rowSelect.push(col1[row]);
  rowSelect.push(col2[row]);
  rowSelect.push(col3[row]);
  rowSelect.push(col4[row]);
  rowSelect.push(col5[row]);
  rowSelect.push(col6[row]);
  rowSelect.push(col7[row]);
  rowSelect.push(col8[row]);
  rowSelect.push(col9[row]);
  return rowSelect;
}

const row1 = generateRow(0);
const row2 = generateRow(1);
const row3 = generateRow(2);

// funcion para reemplazar numeros por espacios vacios
function emptyPlaces() {
  const rows = generateNumbersRandoms(0, 8, 9);
  row1[rows[0]] = "";
  row3[rows[0]] = "";

  row1[rows[1]] = "";
  row2[rows[1]] = "";

  row1[rows[2]] = "";
  row3[rows[2]] = "";

  row1[rows[3]] = "";

  row2[rows[4]] = "";
  row2[rows[5]] = "";
  row2[rows[6]] = "";

  row3[rows[7]] = "";
  row3[rows[8]] = "";
}

// Funcion para agregar el cero a numeros de 1 digito
function addZero(row) {
  const rowGenerate = (row[0] = `0${row[0]}`);
  return parseInt(rowGenerate);
}
addZero(row1);
addZero(row2);
addZero(row3);

emptyPlaces();

document.getElementById("row-one").innerHTML = row1
  .map((row) => `<td>${row}</td>`)
  .join("");
document.getElementById("row-two").innerHTML = row2
  .map((row) => `<td>${row}</td>`)
  .join("");
document.getElementById("row-three").innerHTML = row3
  .map((row) => `<td>${row}</td>`)
  .join("");

function cambiar() {
  location.reload();
}

// * agregar colores y estilos para asemjar a un carton de loteria
// * agregar boton para cambiar el color del carton
// * envolver la funcion para que el boton no refresque la pagina
// * agregar boton para descargar el carton para imprimir
// * agregar funcion para generar varios cartones aleatorios
