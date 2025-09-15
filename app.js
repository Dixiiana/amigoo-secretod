let amigos = [];
let numeroMaximo = 5;
let amigoSecreto = '';
let intentos = 0;

function asignarTextoElemento('#amigos-list', `Amigos agregados: ${amigos.join(', ')}`); {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
    return;
}

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value.trim(); // Usa trim() para eliminar espacios en blanco
}

    function agregarAmigo() {
      // Your code to add an amigo goes here
      console.log("Adding an amigo!");
    }

    if (amigo === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

    if (amigos.length >= numeroMaximo) {
        alert("Ya has agregado el número máximo de amigos.");
        return;
    }

    amigos.push(amigo);
    inputAmigo.value = ''; // Limpia el input después de agregar
    console.log(amigos);
    asignarTextoElemento('p', `Amigos agregados: ${amigos.join(', ')}`);
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos cinco amigos para generar un amigo secreto.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    amigoSecreto = amigos[indiceAleatorio];
    console.log("Amigo secreto generado:", amigoSecreto);
    asignarTextoElemento('p', '¡Amigo secreto generado! Adivina quién es.');
    return amigoSecreto;
}

function verificarIntento() {
    let inputIntento = document.getElementById('amigo');
    let intentoUsuario = inputIntento.value.trim();

    if (intentoUsuario === "") {
        alert("Por favor, ingresa tu intento.");
        return;
    }

    if (intentoUsuario === amigoSecreto) {
        asignarTextoElemento('p', `¡Acertaste! El amigo secreto era **${amigoSecreto}**.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        intentos = 0; // Reinicia los intentos
    } else {
        intentos++;
        asignarTextoElemento('p', `Incorrecto. Llevas ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
    }

    inputIntento.value = '';
}

function reiniciarJuego() {
    amigos = [];
    amigoSecreto = '';
    intentos = 0;
    asignarTextoElemento('h1', '¡Juego del amigo secreto!');
    asignarTextoElemento('p', `Agrega hasta ${numeroMaximo} nombres de amigos.`);
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('amigo').value = '';
}

// Llamada inicial para establecer las condiciones del juego
reiniciarJuego();
