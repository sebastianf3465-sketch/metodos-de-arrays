// Ejercicio 5: Quitar y agregar
// Usa shift() para eliminar el primer número, unshift() para agregar un 5 al principio y push() para
// agregar un 50 al final. Imprime lo que devuelve cada método.
// Datos
// const numeros = [10, 20, 30, 40];
// Resultado esperado
// // shift devuelve: 10
// // unshift devuelve: 4
// // push devuelve: 5
// // numeros queda: [5, 20, 30, 40, 50]
// Pregunta de análisis: ¿Qué devuelven unshift() y push()? ¿Es el array?

const numeros = [10, 20, 30, 40];

const valorShift = numeros.shift();
console.log("shift devuelve:", valorShift); 

const valorUnshift = numeros.unshift(5);
console.log("unshift devuelve:", valorUnshift); 

const valorPush = numeros.push(50);
console.log("push devuelve:", valorPush); 

console.log("numeros queda:", numeros);




//    ¿Que devuelven unshift() y push()? ¿Es el array?
//     No, no devuelven el array. Devuelven un numero que representa 
//     la nueva longitud (la cantidad total de elementos) que tiene el array 
//     despues de modificarse.