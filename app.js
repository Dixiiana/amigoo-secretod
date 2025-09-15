let amigos = [];
let intentos = 0;
let numeroMáximo = 5;



function agregarAmigo () {
 let inputAmigo = document.getElementById('amigo');
 let amigo = inputAmigo.value;

 if (amigo === ""){
  alert ("Por favor, ingresa el nombre de un amigo");
  return;
}

 amigos.push(amigo);
}

function verificarIntento() {
 let amigoSecreto = parseInt(document.getElementById('amigo').value);

if (amigo === amigoSecreto) {
        asignarTextoElemento('p',`Acertó el nombre del Amigo Secreto ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        
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
let amigo = Math.floor(Math.random ()* numeroMáximo + 1);

console.log(amigoSecretoGenerado);
   
    if (amigo.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los nombres de amigos');
    } else {
        
        if (amigo.includes(amigoSecretoGenerado)) {
            return generarAmigoSecreto();
        } else {
            amigo.push(amigoSecretoGenerado);
            return amigoSecretoGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','¡Juego del amigo secreto!');
    asignarTextoElemento('p',`Indica nombre de amigos ${numeroMáximo}`);
    amigo = generarAmigoSecreto();
    intentos = 1;
 
}



function condicionesIniciales() {
    asignarTextoElemento('h1','¡Juego del amigo secreto!');
    asignarTextoElemento('p',`Indica nombre de amigos ${numeroMáximo}`);
    amigo = generarAmigoSecreto();
    intentos = 1;
}
