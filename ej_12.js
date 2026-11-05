// Ejercicio 12: Ordenar y modificar
// Ordena las edades de mayor a menor. Después elimina la edad más joven y agrega una nueva edad
// (19) al final.
// Datos
// const edades = [15, 32, 8, 21, 40];
// Resultado esperado
// // ordenado: [40, 32, 21, 15, 8]
// // sin la más joven: [40, 32, 21, 15]
// // con la nueva: [40, 32, 21, 15, 19]
// Pregunta de análisis: ¿Qué método usaste para quitar la edad más joven y por qué ese y no otro?

const edades = [15, 32, 8, 21, 40];

edades.sort((a, b) => b - a);

console.log("Ordenado:", edades);

edades.pop();

console.log("Sin la mas joven:", edades);

edades.push(19);

// console.log("Con la nueva:", edades);
// ¿Que metodo usaste para quitar la edad mas joven y por que ese y no otro?

// Use pop() porque elimina el ultimo elemento del array. Como las edades estaban ordenadas
//  de mayor a menor, la edad mas joven quedo al final.