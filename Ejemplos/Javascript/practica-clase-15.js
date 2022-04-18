// 1)Diseñar una función que reciba como parámetros dos números, y que calcule el máximo. 
function maximo(a, b) {

    return (a >= b) ? a : b;  // operador ternario 
}
var c = Number(prompt("ingrese un numero c:"));
var d = Number(prompt("ingrese un numero d:"));
console.log("El valor maximo entre " + c + " y " + d + " es:", maximo(c, d));



// 2)Crear una función que se llame promedio3, que reciba como parámetro tres valores y devuelva el promedio de los mismos.
function promedio3(a, b, c) {
    return (a + b + c) / 3;
}

var c = Number(prompt("ingrese un numero c:"));
var d = Number(prompt("ingrese un numero d:"));
var e = Number(prompt("ingrese un numero e:"));
console.log(" el promedio entre " + c + " , " + d + " y " + e + " es:", promedio3(c, d, e));

// 3)Crear una función que lea notas hasta que ingrese  -1 y devuelve el promedio de las notas leídas. ( aunque no se suele leer valores en una función)
function promNotasLeidas() {
    var suma = 0;
    var nota = 0;
    var i = 0;
    nota = Number(prompt("ingrese una nota o -1 para finalizar:"));
    while (nota != -1) {
        suma = suma + nota;
        i++;


        nota = Number(prompt("ingrese una nota o -1 para finalizar:"));
    }
    return suma / i;
}

console.log("El promedio de las notas leidas es: " + promNotasLeidas());

// Una función que se denomine ElDobleDelSiguienteAlCuadrado que dado un número por parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado
fuction ElDobleDelSiguienteAlCuadrado(x){
    //2      (3*2)*6

    return cuadrado(doble(siguiente(x)));

}
x = 2;
console.log("El ElDobleDelSiguienteAlCuadrado(x): " + ElDobleDelSiguienteAlCuadrado(x);

/*
Una función que se llame siguiente, que reciba como parámetro un valor entero, y devuelva el siguiente del número ingresado como parámetro
Una función que se llame doble, que reciba como parámetro un valor, y devuelva el doble del número ingresado como parámetro.
Una función que se llame cuadrado, que reciba como parámetro un valor, y devuelva el valor del numero ingresado como parámetro elevado al cuadrado.
Una función que se denomine imprimirValores que dado un número por parámetro, imprima cual es el valor siguiente, el doble y el cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.
Una función que se denomine imprimirElDobleDelSiguiente que dado un número por parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas en los puntos 5) , 6) : siguiente, el doble .
Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado que dado un número por parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado
una función que dado la longitud de un lado de un cuadrado devuelva el perímetro
una función que dado la longitud de un lado de un cuadrado devuelva la superficie.
una función que dado el radio de una círculo devuelva la circunferencia ( perimetro del circulo) (2pi * r)
una función que dado el radio de una círculo devuelva el area del circulo
*/
