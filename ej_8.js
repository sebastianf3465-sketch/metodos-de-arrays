// Ejercicio 8: Mayor y verificar
// Usa reduce() para encontrar el número mayor. Luego usa every() para comprobar si todos los
// números son mayores a 0. Prueba con los dos arrays.
// Datos
// const a = [4, 9, 2, 7];
// const b = [4, -1, 2];
// Resultado esperado
// // a: mayor 9, every: true
// // b: mayor 4, every: false
// Pregunta de análisis: ¿Qué valor inicial usaste en reduce() y por qué?

const a = [4, 9, 2, 7];
const b = [4, -1, 2];

const mayorA = a.reduce((mayor, numero) => numero > mayor ? numero : mayor, a[0]);
const verificarA = a.every(numero => numero > 0);

console.log("a: mayor", mayorA, "every:", verificarA);

const mayorB = b.reduce((mayor, numero) => numero > mayor ? numero : mayor, b[0]);
const verificarB = b.every(numero => numero > 0);

console.log("b: mayor", mayorB, "every:", verificarB);

// ¿Que valor inicial usaste en reduce() y por que?

// Use a[0] y b[0], porque representan el primer numero de cada array y permiten
//  compararlo con los demas para encontrar el mayor sin comenzar con un valor
//  que pueda alterar el resultado.