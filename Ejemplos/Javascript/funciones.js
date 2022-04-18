// Funciones
// Declaración de la función "saludar"
function saludar(miNombre) {
    console.log("Hola, " + miNombre); // Contenido de la función
}

function sumar(num1, num2) {
    var suma= num1+num2
    num1= 0
    // console.log("Suma: " + suma);
    return suma; // Dato de salida de la fx
}

function esPar(num) {
    es= false;
    if (num%2==0) {
        es= true;
    }
    return es;
}

function esPar2(num) {
    return num%2==0;
}

// Programa Ppal
// Ejecución de la función
// console.log("Hola!");
// saludar("Ramiro");
// var nombre= prompt("Tu nombre: ", "Ingrese su nombre...");
// saludar(nombre);

// return
/*
n1= 2;
n2= 3;
var resultado = sumar(n1,n2);
console.log(n1);
console.log(resultado);
*/

// Función tradicional 
function cuadrado(x){ 
    return x*x;
}
console.log(cuadrado(2));

// Función Arrow
// var aCuadrado = x => x*x;
var aCuadrado = (x) => { return x*x; };
// var aSumar = (num1,num2) => num1+num2;
var aSumar = (num1,num2) => 
    {   
        suma= num1+num2;
        return suma; 
    }

var numero= 2;
console.log(aCuadrado(numero));
console.log(aSumar(2,3));
