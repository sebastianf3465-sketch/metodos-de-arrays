// Ejercicio 13: Comprobación y filtrado
// Verifica si todos los números son positivos. Luego crea un nuevo array solo con los números pares.
// Prueba con los dos arrays.
// Datos
// const a = [4, 7, 10, 3, 8];
// const b = [4, -2, 10];
// Resultado esperado
// // a: true, pares [4, 10, 8]
// // b: false, pares [4, -2, 10]

const a = [4, 7, 10, 3, 8];
const b = [4, -2, 10];

const positivosA = a.every(numero => numero > 0);
const paresA = a.filter(numero => numero % 2 === 0);

console.log("a:", positivosA, "pares:", paresA);

const positivosB = b.every(numero => numero > 0);
const paresB = b.filter(numero => numero % 2 === 0);

console.log("b:", positivosB, "pares:", paresB);

