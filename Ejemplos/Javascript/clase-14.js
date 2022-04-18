// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
/*
Operadores Aritméticos
+: Suma 
-: Resta 
*: Multiplicación 
**: Exponenciación 
/: División 
%: Módulo: resto de dividir 
i++: operador de incremento (incrementa i en 1)
i--: operador de decremento (decrementa i en 1)
*/

console.log(5**2);
i= 0;
/* i++
console.log(i);
i++
console.log(i);
i++
console.log(i);
i++
console.log(i); */

var a;
console.log(a);
console.log(i);
a= i++;
console.log("a: " + a);
console.log("i: " + i);
// console.log("a: " + a);
a= ++i;
console.log("a: " + a);
console.log("i: " + i);

// Operadores de Asignación (Binarios)
var num= 10;
var num2= 23;
num+=1; // num= num+1 (JS y Python) | num++ (JS, no para Python)
num-= num2; // num= num-num2
console.log(num)

// Operadores Relacionales o de Comparación
var num3= 5;
console.log(num3==5); // true
console.log(5!=5); // false
console.log(num3>0);

// Operadores Lógicos: operan sobre valores lógicos (booleanos: true y false).
// && AND (Y: si una es falsa, todo es falso), 
// || OR (O: si una en verdadera, todo es verdadero), 
// ! NOT (Negación: si es verdadero, lo convierte a falso y viceversa)
console.log(true&&true); // true
console.log(true&&false); // false
console.log(true||true); // true
console.log(true||false); // true
console.log(false||false); // false
