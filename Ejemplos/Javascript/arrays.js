// Arrays: https://www.w3schools.com/jsref/jsref_obj_array.asp
// Métodos: https://www.w3schools.com/js/js_array_methods.asp
// const vector= [1,3,5,8]; // 0 1 2 3
// const vector= []; // Vector vacío
/*
const vector= new Array(1,3,5,8);

console.log(vector[0]);
console.log(vector[3]);
console.log(vector[4]);

// console.log(vector); // Mostrar un vector (PENDIENTE)
for (let i = 0; i < vector.length; i++) {
  const element = vector[i];
  console.log(element);
}

// Agregar un elemento
vector.push(10,14);
valorEliminado= vector.pop();

// console.log(vector); // Mostrar un vector (PENDIENTE)
for (let i = 0; i < vector.length; i++) {
  const element = vector[i];
  console.log(element);
}

var frutas = ["Banana","Orange", "Apple", "Mango"];
frutas.sort();
frutas.reverse();

for (let i = 0; i < frutas.length; i++) {
  const element = frutas[i];
  console.log(element);
}

// sort() Method
// https://www.w3schools.com/jsref/jsref_sort.asp

// Sort numbers in an array in ascending order:
var points = [40, 100, 1, 5, 25, 10];
function ordAsc(a, b) { return a - b; }
points.sort(ordAsc);
console.log(points)

// Sort numbers in an array in descending order:
points.sort(function (a, b) { return b - a }); // Función ANÓNIMA
console.log(points)
*/

// forEach()
/*
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
    arr[index] = item * 10;
}
console.log(numbers);

// some()
var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}

console.log(ages.every(checkAdult));
console.log(ages.some(checkAdult));

// map()
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
console.log(x);

// filter()
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.filter(checkAdult));
*/

// reduce()
// Subtract the numbers in the array, starting from the beginning:
var numbers = [175, 50, 25];

console.log(numbers.reduce(myFunc)); // 100

function myFunc(total, num) {
  return total - num;
}
/*
*/