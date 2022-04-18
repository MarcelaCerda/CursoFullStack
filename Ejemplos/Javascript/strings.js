// https://www.w3schools.com/js/js_strings.asp
// https://www.w3schools.com/js/js_string_methods.asp

// Literales
const texto1 = "¡Hola a todos!";
const texto2 = "Otro mensaje de texto";

// split
let sep= " ";
console.log(texto1.split(sep));

/*
// Objeto
const texto3 = new String("¡Hola a todos!  ");
const texto4 = new String("Otro mensaje de texto");

// Propiedades
console.log(texto3.length);

// Métodos
console.log(texto1.charAt(1));
console.log(texto1[1]);
console.log(texto1.concat(texto2, ". FIN"));
console.log(texto1.indexOf("to"));
console.log(texto1.lastIndexOf("o", 13)); // 11
console.log(texto1.lastIndexOf("o", 11)); // 11 (2do parámetro es inclusive)
console.log(texto1.lastIndexOf("o", 10)); // 9

// For in - For of
for (const i in texto1) {
    console.log(i);
}

for (const car of texto1) {
    console.log(car);
}

// Template Strings
// Las plantillas de cadena de texto (template strings) son literales de texto que habilitan el uso de expresiones incrustadas. Es posible utilizar cadenas de texto de más de una línea.
function sumar(a, b) {
    return a + b;
}

var a = Number(prompt("Ingrese un numero a: "));
var b = Number(prompt("Ingrese un numero b: "));
console.log("La suma entre " + a + " y " + b + " es: " + sumar(a, b)); //  la suma entre 12 y 21 es: 33
console.log(`la suma entre ${a} y ${b} es: ${sumar(a, b)}`);           //  la suma entre 12 y 21 es: 33
*/