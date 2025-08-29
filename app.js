let amigoSecreto = generarAmigoSecreto ();
let intentos = 0;
let numeroMáximo = 5;
let listaDeAmigos = [];


function asignarTextoElemento (elemento,texto); {
let elementoHTML = document. querySelector(elemento);
elementoHTML.innerHTML= texto;
return;

}

function verificarIntento() {
 let amigoSecreto = parseInt(document.getElementById('amigo').value);

if (listaDeAmigos === amigoSecreto) {
        asignarTextoElemento('p',`Acertó el nombre del Amigo Secreto ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (listaDeAmigos = amigoSecreto) {
            asignarTextoElemento('p','El nombre del amigo no es ese');
        } else {
            asignarTextoElemento('p','El nombre del amigo no inicia con esa inicial');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}



function generarAmigoSecreto (){
let amigoSecreto = Math.floor(Math.random ()* numeroMáximo + 1);

console.log(amigoSecretoGenerado);
    console.log(listaDeAmigos);
    //Si ya sorteamos todos los números
    if (listaDeAmigosSecretos.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los nombres de amigos');
    } else {
        //Si el nombre generado está incluido en la lista 
        if (listaDeAmigos.includes(amigoSecretoGenerado)) {
            return generarAmigoSecreto();
        } else {
            listaDeAmigos.push(amigoSecretoGenerado);
            return amigoSecretoGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','¡Juego del amigo secreto!');
    asignarTextoElemento('p',`Indica nombre de amigos ${numeroMáximo}`);
    amigoSecreto = generarAmigoSecreto();
    intentos = 1;
    console.log(amigoSecreto);
}



function condicionesIniciales() {
    asignarTextoElemento('h1','¡Juego del amigo secreto!');
    asignarTextoElemento('p',`Indica nombre de amigos ${numeroMáximo}`);
    amigoSecreto = generarAmigoSecreto();
    intentos = 1;
    console.log(amigoSecreto);
}
