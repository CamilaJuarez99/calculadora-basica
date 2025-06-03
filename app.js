let pantalla = document.getElementById('pantalla');

function agregar(valor) {
  if (pantalla.innerText === '0') {
    pantalla.innerText = valor;
  } else {
    pantalla.innerText += valor;
  }
}

function limpiar() {
  pantalla.innerText = '0';
}

function calcular() {
  try {
    pantalla.innerText = eval(pantalla.innerText);
  } catch (e) {
    pantalla.innerText = 'Error';
  }
}

