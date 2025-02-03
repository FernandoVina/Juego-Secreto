let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//texto y elemento en linea anterior sin comillas se transforman en varaiables
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//alterniativa document.querySelector('input');
   
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
        return;
}
// funcion limpiar caja sinmpre es afuera del programa antes del ultimo}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 
   // lo anterior es mas optimizado que   let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // antes era return Math.floor(Math.random()*10)+1;
    // Si el numero generado esta incluido en la lista hacemos un  operacion sino la otra  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sorteron todos los números posibles');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    //elimino let numeroSecreto lo dejo como variable arriba
    //dejo  return Math...etc
    //arriba let numeroSecreto = generarNumeroSecreto()
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto'); //con comillas porque son datos
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego(){
  // limpiar la caja
  limpiarCaja();
  //importante indicar mensaje de intervalo de numeros de inicio
  condicionesIniciales();
  //generar numero aleatorioa 
  //desahabilitar el boton de nuevo juego
  //inicializar el numero de intetntos 
document.querySelector('#reiniciar').setAttribute('disabled','true');//#porque es numeral
}

condicionesIniciales();

//llama a la funcion por el nombre, se optimiza
//en este caso se puede usar al final y HTML solo cuando es evento