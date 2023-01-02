// variables que contienen elementos del html
const palabra = document.getElementById("palabra");
const letrasContainer = document.getElementById("letras-container");
const buttonPalabra = document.getElementById("button-palabra");
const buttonComparar = document.getElementById("button-comparar");
const letrasInputEscritas = document.getElementsByClassName("letras-input");
const letrasInputComparar = document.getElementsByClassName("comparar-input");
const attemptsRemaining = document.querySelector("#attempts-remaining");
const imagenAhorcado0 = document.getElementById("ahorcado-0");
const imagenAhorcado1 = document.getElementById("ahorcado-1");
const imagenAhorcado2 = document.getElementById("ahorcado-2");
const imagenAhorcado3 = document.getElementById("ahorcado-3");
const imagenAhorcado4 = document.getElementById("ahorcado-4");
const imagenAhorcado5 = document.getElementById("ahorcado-5");
const imagenAhorcado6 = document.getElementById("ahorcado-6");
const imagenAhorcado7 = document.getElementById("ahorcado-7");
const imagenAhorcado8 = document.getElementById("ahorcado-8");
const imagenAhorcado9 = document.getElementById("ahorcado-9");
const imagenAhorcado10 = document.getElementById("ahorcado-10");
const imagenAhorcado11 = document.getElementById("ahorcado-11");

// variables que contienen a los botones de modo de juego
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const extreme = document.getElementById("extreme");
const modoSeleccionadoVar = document.querySelector("#modo-seleccionado");
const aleatorio = document.getElementById("aleatorio");

// variables container
const modoDeJuegoContainer = document.getElementById("modo-de-juego-container");
const palabraContainer = document.getElementById("palabra-container");

// variables contadores
var contador = 0;
var contadorClicks = 0;
var attempts = 0;
var comprobaciones = 0;

// Evento click de los botones
easy.addEventListener("click", function () {
  modoSeleccionadoVar.id = this.id;
  attempts = 10;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado9.style.display = "none";
  imagenAhorcado8.style.display = "none";
  imagenAhorcado11.style.display = "inline";
});
medium.addEventListener("click", function () {
  modoSeleccionadoVar.id = this.id;
  attempts = 7;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado11.style.display = "none";
  imagenAhorcado8.style.display = "none";
  imagenAhorcado9.style.display = "inline";
});
hard.addEventListener("click", function () {
  modoSeleccionadoVar.id = this.id;
  attempts = 5;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado11.style.display = "none";
  imagenAhorcado9.style.display = "none";
  imagenAhorcado8.style.display = "inline";
});
extreme.addEventListener("click", function () {
  modoSeleccionadoVar.id = this.id;
  attempts = 3;
  modoSeleccionado();
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado11.style.display = "none";
  imagenAhorcado9.style.display = "none";
  imagenAhorcado8.style.display = "inline";
});
aleatorio.addEventListener("click", function () {
  modoSeleccionadoVar.id = this.id;
   // imprime una palabra aleatoria, como "pájaro"
  const palabraRandom = generateRandomWord();
  palabra.value = palabraRandom;
  attempts = 10;
  palabra.style.display = "inline";
  buttonPalabra.style.display = "inline-block";
  // Muestra los intentos iniciales
  easy.style.display = "none";
  medium.style.display = "none";
  hard.style.display = "none";
  extreme.style.display = "none";
  aleatorio.style.display = "none";
  palabra.style.display = "none";
  buttonPalabra.style.display = "none";
  attemptsRemaining.style.display = "block";
  buttonComparar.style.display = "inline-block";
  attemptsRemaining.innerHTML = `Intentos restantes: ${attempts}`;
  imagenAhorcado10.style.display = "inline";

  letrasContainer.innerHTML = "";
  var letras = palabra.value.split("");
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
    if (palabra.value.indexOf(" ") !== -1) {
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
    if (palabra.value.indexOf(" ") !== -1) {
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
})
function generateRandomWord() {
  // Una lista de palabras que se pueden elegir
  const words = ['sueño', 'mariposa', 'destello', 'sol', 'tigre', 'caracol', 'poema', 'mar', 'enredado', 'ciervo', 'grano', 'elefante', 'tren', 'reloj', 'verde', 'tijera', 'piedra', 'cintura', 'cabeza', 'vientre', 'dedo', 'ave', 'ojo', 'oido', 'nariz', 'boca', 'mano', 'pie', 'rodilla', 'espalda', 'pecho', 'muslo', 'pierna', 'tobillo', 'tallo', 'dedo del pie', 'pulgar', 'índice', 'medio', 'anular', 'meñique', 'cadera', 'cuello', 'mente', 'frente', 'oreja', 'ceja', 'labio', 'diente', 'lengua', 'barbilla', 'hueso', 'masa', 'grasa', 'piel', 'cabello', 'uña', 'sangre', 'hueso', 'médula', 'nervio', 'cerebro', 'corazón', 'riñón', 'hígado', 'pulmón', 'estómago', 'intestino', 'luna', 'aguja', 'vela', 'huevo', 'planta', 'flor', 'plantilla', 'gato', 'perro', 'tigre', 'mono', 'conejo', 'zorro', 'sapo', 'lluvia', 'nube', 'arcoiris', 'brillar', 'sutil', 'guitarra', 'travieso', 'alboroto', 'globo','Abismo','Alfombra','Andamio','Anillo','Anzuelo','Aparador','Arco','Árbol de navidad','Arcoiris','Asiento','Atardecer','Aurora','cofre','Bolsa','Bolsillo','Bala','Broche','Brújula','Bufanda','Bolsa','Caja','herramientas','Caja fuerte','carne','Cama','Cantar','Cangrejo','Capa','Caramelo','Caramelo','Carpintería','Casa','Cepillo','Chaleco','cepillo','Cinta','Cinturón','Cisne','Clavo','Colgador','Concha','Cuchillo'];

  // Obtén un número aleatorio entre 0 y la longitud de la lista de palabras
  const randomIndex = Math.floor(Math.random() * words.length);

  // Devuelve la palabra aleatoria
  return words[randomIndex];
}


// Funcion modo seleccionado
function modoSeleccionado() {
  // Cuanto se da click empieza el juego
  buttonPalabra.addEventListener("click", function () {
    dividirPalabra();
    easy.style.display = "none";
    medium.style.display = "none";
    hard.style.display = "none";
    extreme.style.display = "none";
    aleatorio.style.display = "none";
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
  document.addEventListener("keyup", function (event) {
    contadorClicks++;
    mostrarImagen();
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
      mostrarImagen();
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
    imagenAhorcado1.style.display = "none";
    imagenAhorcado2.style.display = "none";
    imagenAhorcado3.style.display = "none";
    imagenAhorcado4.style.display = "none";
    imagenAhorcado5.style.display = "none";
    imagenAhorcado6.style.display = "none";
    imagenAhorcado7.style.display = "none";
    imagenAhorcado8.style.display = "none";
    imagenAhorcado9.style.display = "none";
    imagenAhorcado10.style.display = "none";
    imagenAhorcado11.style.display = "none";
    imagenAhorcado0.style.display = "inline";
    setTimeout(() => {
      alert(`GANASTE, la palabra o frase correcta era: ${palabra.value}`);
      window.location.reload();
    }, 1000);
  } else {
    // Si el contador es menor al número total de letras o la palabra no coincide, mostramos el mensaje "Es incorrecto"
    if (comprobaciones >= 1) {
    imagenAhorcado2.style.display = "none";
    imagenAhorcado3.style.display = "none";
    imagenAhorcado4.style.display = "none";
    imagenAhorcado5.style.display = "none";
    imagenAhorcado6.style.display = "none";
    imagenAhorcado7.style.display = "none";
    imagenAhorcado8.style.display = "none";
    imagenAhorcado9.style.display = "none";
    imagenAhorcado10.style.display = "none";
    imagenAhorcado11.style.display = "none";
      imagenAhorcado1.style.display = "inline";
      setTimeout(() => {
        alert(`PERDISTE, la palabra o frase correcta era: ${palabra.value}`);
        window.location.reload();
      }, 1000);
    }
  }
}
// function para mostrar imagen
function mostrarImagen() {
  if (modoSeleccionadoVar.id == "easy") {
    if (contadorClicks == 1) {
      // Muestra la imagen del ahorcado
      imagenAhorcado11.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado10.style.display = "inline";
    } else if (contadorClicks == 2) {
      // Muestra la imagen del ahorcado
      imagenAhorcado11.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado10.style.display = "inline";
    } else if (contadorClicks == 3) {
      // Muestra la imagen del ahorcado
      imagenAhorcado10.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado9.style.display = "inline";
    } else if (contadorClicks == 4) {
      // Muestra la imagen del ahorcado
      imagenAhorcado9.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado8.style.display = "inline";
    } else if (contadorClicks == 5) {
      // Muestra la imagen del ahorcado
      imagenAhorcado8.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "inline";
    } else if (contadorClicks == 6) {
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado6.style.display = "inline";
    } else if (contadorClicks == 7) {
      // Muestra la imagen del ahorcado
      imagenAhorcado6.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado5.style.display = "inline";
    } else if (contadorClicks == 8) {
      // Muestra la imagen del ahorcado
      imagenAhorcado5.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado4.style.display = "inline";
    } else if (contadorClicks == 9) {
      // Muestra la imagen del ahorcado
      imagenAhorcado4.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "inline";
    } else if (contadorClicks == 10) {
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado2.style.display = "inline";
    }
  } else if (modoSeleccionadoVar.id == "medium") {
    if (contadorClicks == 1) {
      // Muestra la imagen del ahorcado
      imagenAhorcado9.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado8.style.display = "inline";
    } else if (contadorClicks == 2) {
      // Muestra la imagen del ahorcado
      imagenAhorcado8.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "inline";
    } else if (contadorClicks == 3) {
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado6.style.display = "inline";
    } else if (contadorClicks == 4) {
      // Muestra la imagen del ahorcado
      imagenAhorcado6.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado5.style.display = "inline";
    } else if (contadorClicks == 5) {
      // Muestra la imagen del ahorcado
      imagenAhorcado5.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado4.style.display = "inline";
    } else if (contadorClicks == 6) {
      // Muestra la imagen del ahorcado
      imagenAhorcado4.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "inline";
    } else if (contadorClicks == 7) {
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado2.style.display = "inline";
    }
  } else if (modoSeleccionadoVar.id == "hard") {
    if (contadorClicks == 1) {
      // Muestra la imagen del ahorcado
      imagenAhorcado8.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "inline";
    } else if (contadorClicks == 2) {
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado5.style.display = "inline";
    } else if (contadorClicks == 3) {
      // Muestra la imagen del ahorcado
      imagenAhorcado5.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado4.style.display = "inline";
    } else if (contadorClicks == 4) {
      // Muestra la imagen del ahorcado
      imagenAhorcado4.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "inline";
    } else if (contadorClicks == 5) {
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado2.style.display = "inline";
    }
  } else if (modoSeleccionadoVar.id == "extreme") {
    if (contadorClicks == 1) {
      // Muestra la imagen del ahorcado
      imagenAhorcado8.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "inline";
    } else if (contadorClicks == 2) {
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "inline";
    } else if (contadorClicks == 3) {
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado2.style.display = "inline";
    }
  } else if (modoSeleccionadoVar.id == "aleatorio") {
    if (contadorClicks == 1) {
      // Muestra la imagen del ahorcado
      imagenAhorcado11.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado10.style.display = "inline";
    } else if (contadorClicks == 2) {
      // Muestra la imagen del ahorcado
      imagenAhorcado11.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado10.style.display = "inline";
    } else if (contadorClicks == 3) {
      // Muestra la imagen del ahorcado
      imagenAhorcado10.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado9.style.display = "inline";
    } else if (contadorClicks == 4) {
      // Muestra la imagen del ahorcado
      imagenAhorcado9.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado8.style.display = "inline";
    } else if (contadorClicks == 5) {
      // Muestra la imagen del ahorcado
      imagenAhorcado8.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "inline";
    } else if (contadorClicks == 6) {
      // Muestra la imagen del ahorcado
      imagenAhorcado7.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado6.style.display = "inline";
    } else if (contadorClicks == 7) {
      // Muestra la imagen del ahorcado
      imagenAhorcado6.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado5.style.display = "inline";
    } else if (contadorClicks == 8) {
      // Muestra la imagen del ahorcado
      imagenAhorcado5.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado4.style.display = "inline";
    } else if (contadorClicks == 9) {
      // Muestra la imagen del ahorcado
      imagenAhorcado4.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "inline";
    } else if (contadorClicks == 10) {
      // Muestra la imagen del ahorcado
      imagenAhorcado3.style.display = "none";
      // Muestra la imagen del ahorcado
      imagenAhorcado2.style.display = "inline";
    }
  }
}
// boton para verificar si es correcto o no
buttonComparar.addEventListener("click", function () {
  comprobaciones++;
  comprobarLetras();
});
