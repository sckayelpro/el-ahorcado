// variables que contienen elementos del html
const palabra = document.getElementById("palabra");
const letrasContainer = document.getElementById("letras-container");
const buttonPalabra = document.getElementById("button-palabra");
const buttonComparar = document.getElementById("button-comparar");
const letrasInputEscritas = document.getElementsByClassName("letras-input");
const letrasInputComparar = document.getElementsByClassName("comparar-input");
const attemptsRemaining = document.querySelector("#attempts-remaining");
// variables que contienen a los botones de modo de juego
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const extrem = document.querySelector("#extrem");
const modoSeleccionadoVar = document.querySelector("#modo-seleccionado");
// variables contadores
var contador = 0;
var contadorClicks = 0;
var attempts = 0;
var comprobaciones = 0;
// Muestra los intentos iniciales
attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;

// Evento click de los botones
easy.addEventListener("click", function () {
  attempts = 10;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
});
medium.addEventListener("click", function () {
  attempts = 7;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
});
hard.addEventListener("click", function () {
  attempts = 5;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
});
extrem.addEventListener("click", function () {
  attempts = 3;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
});

// Funcion modo seleccionado
function modoSeleccionado() {
  // Cuanto se da click empieza el juego
  buttonPalabra.addEventListener("click", function () {
    dividirPalabra();
    easy.style.display = "none";
    medium.style.display = "none";
    hard.style.display = "none";
    extrem.style.display = "none";
    palabra.style.display = "none";
    buttonPalabra.style.display = "none";
    attemptsRemaining.style.display = "block";
    buttonComparar.style.display = "inline-block";
  });
}

// Convierte la palabra en mayúsculas
palabra.addEventListener("keyup", function () {
  palabra.value = palabra.value.toUpperCase();
});

// Funcion para dividir las palabras
function dividirPalabra() {
  letrasContainer.innerHTML = "";
  const palabraValue = palabra.value;
  var letras = palabraValue.split("");
// Bucle para crear los input para comparar
  for (var i = 0; i < letras.length; i++) {
    const inputComparar = document.createElement("input");
    inputComparar.className = "comparar-input";
    inputComparar.maxLength = "1";
    inputComparar.value = letras[i].toUpperCase();
    letrasContainer.appendChild(inputComparar);
    inputComparar.addEventListener("keyup", function () {
      inputComparar.value = inputComparar.value.toUpperCase();
    });
    const letrasComparar = document.getElementsByClassName("comparar-letras");
    if (palabraValue.indexOf(" ") !== -1) {
      for (var k = 0; k < letrasComparar.length; k++) {
        if (letrasComparar[k].value === " ") {
          letrasComparar[k].style.visibility = "hidden";
        }
      }
    }
  }
// Bucle para crear los input para escribir
  for (var j = 0; j < letras.length; j++) {
    const inputEscribir = document.createElement("input");
    inputEscribir.className = "letras-input";
    inputEscribir.maxLength = "1";
    inputEscribir.value = letras[j].toUpperCase();
    letrasContainer.appendChild(inputEscribir);
    inputEscribir.addEventListener("keyup", function () {
      inputEscribir.value = inputEscribir.value.toUpperCase();
    });
    const letrasInput = document.getElementsByClassName("letras-input");
    if (palabraValue.indexOf(" ") !== -1) {
      for (var k = 0; k < letrasInput.length; k++) {
        if (letrasInput[k].value === " ") {
          letrasInput[k].style.visibility = "hidden";
        }
      }
    }
    inputEscribir.value = "";
  }
  presionarLetra();
  clickLetrasBotones();
}
// Funcion para que aparezcan las letras cuando se da click a una tecla
function presionarLetra() {
  document.addEventListener("keydown", function (event) {
    contadorClicks++;
    if (attempts - contadorClicks >= 0) {
      attemptsRemaining.innerHTML = `Intentos restantes: ${
        attempts - contadorClicks
      }`;
    } else {
      attemptsRemaining.innerHTML = `Intentos restantes: 0`;
    }
    // Obtenemos el valor de la tecla presionada
    let teclaPresionada = event.key.toUpperCase();
    // Recorremos los elementos input con clase "comparar-input"
    const letrasInputCompararArray = Array.from(letrasInputComparar);

    for (let i = 0; i < letrasInputCompararArray.length; i++) {
      // Eliminamos los espacios en blanco al principio y al final del valor del elemento
      let valorComparar = letrasInputCompararArray[i].value.trim();
      // Si el valor de la tecla presionada es igual al valor del elemento, asignamos el valor de la tecla al elemento input con clase "letras-input" correspondiente
      if (teclaPresionada === valorComparar) {
        letrasInputEscritas[i].value = teclaPresionada;
      }
      // Si el contador de clicks es mayor al permitido salimos del bucle
      if (contadorClicks > attempts) {
        break;
      }
    }
  });
}

// Funcion para aparezcan las letras cuando se da click al botón
function clickLetrasBotones() {
  let botonesLetras = document.querySelectorAll(".letras-abecedario");
  botonesLetras.forEach(function (boton) {
    // Añadimos un evento "click" a cada botón
    boton.addEventListener("click", function () {
      var valorBoton = boton.textContent;
      contadorClicks++;
      if (attempts - contadorClicks >= 0) {
        attemptsRemaining.innerHTML = `Intentos restantes: ${
          attempts - contadorClicks
        }`;
      } else {
        attemptsRemaining.innerHTML = `Intentos restantes: 0`;
      }
      // Obtenemos el valor del botón (la letra)
      for (var i = 0; i < letrasInputComparar.length; i++) {
        // Eliminamos los espacios en blanco al principio y al final del valor del elemento
        let valorComparar = letrasInputComparar[i].value.trim();
        // Si el valor del botón coincide con el valor del elemento "comparar-input"
        if (valorBoton === valorComparar) {
          // Asignamos el valor del botón al elemento "letras-input" correspondiente
          letrasInputEscritas[i].value = valorBoton;
        }
        // Si el contador de clicks es mayor al permitido salimos del bucle
        if (contadorClicks > attempts) {
          break;
        }
      }
    });
  });
}

function comprobarLetras() {
  // Recorremos ambos arrays de elementos input
  for (var i = 0; i < letrasInputEscritas.length; i++) {
    // Eliminamos los espacios en blanco del valor del elemento
    var valorEscrito = letrasInputEscritas[i].value.replace(/\s/g, "").trim();
    var valorComparar = letrasInputComparar[i].value.replace(/\s/g, "").trim();
    // Si el valor del elemento es vacío, ignoramos el elemento y seguimos comparando los demás
    if (valorEscrito === "" || valorComparar === "") {
      continue;
    }
    // Comparamos el valor de cada elemento
    if (valorEscrito === valorComparar) {
      contador++;
    }
  }
  // Obtenemos los valores de los elementos input con clase "letras-input" en una lista
  let valoresInput1 = [];
  for (let i = 0; i < letrasInputEscritas.length; i++) {
    valoresInput1.push(letrasInputEscritas[i].value);
  }
  let palabraUnida1 = valoresInput1.join("");
  let valoresInput2 = [];
  for (let i = 0; i < letrasInputComparar.length; i++) {
    valoresInput2.push(letrasInputComparar[i].value.replace(/\s/g, "").trim());
  }
  let palabraUnida2 = valoresInput2.join("");

  // Comparamos el contador con el número total de letras de la palabra original y la palabra inicial con la palabra escrita
  if (
    contador === letrasInputComparar.length ||
    palabraUnida1 === palabraUnida2
  ) {
    // Si el contador es igual al número total de letras o a la palabra correcta, mostramos el mensaje "Es correcto"
    alert(`CORRECTO, frase correcta era: ${palabra.value}`);
    window.location.reload();
  } else {
    // Si el contador es menor al número total de letras o la palabra no coincide, mostramos el mensaje "Es incorrecto"
    if (comprobaciones >= 1) {
      alert(`INCORRECTO, la palabra o frase correcta era: ${palabra.value}`);
      window.location.reload();
    }
  }
}
// boton para verificar si es correcto o no
buttonComparar.addEventListener("click", function () {
  comprobaciones++;
  comprobarLetras();
});
