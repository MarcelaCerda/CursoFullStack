// Cómo solicitar datos
// Prompt Box
var num = parseInt(prompt("Ingrese un número: ", ""));

// Condicionales: if (Condicional Simple)
// var num= 5;
/* if (num>0) {
    alert("El número es positivo.")
} */

// Condicionales: if-else (Condicional Doble)
// var num= 5;
/* if (num>0) {
    alert("El número es positivo.")
} else {
    alert("El número es negativo o cero.")
} */

// Condicionales anidados
// elif: else if
// Ejemplo: menu de usuario (3 opciones)
var menu = prompt("Ingrese una opción (1: Abrir programa, 2: Salir del programa, etc.): ", "");
if (menu=="1") {
    alert("Bienvenido!");
}
else if (menu=="2") {
    alert("Adiós!");
}
else if (menu=="3") {
    alert("Opción 3");
}
else {
    alert("No ha ingresado una opción válida!");
}
