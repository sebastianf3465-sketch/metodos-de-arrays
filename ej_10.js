// Ejercicio 10: Transformar y verificar
// Usa map() para crear un nuevo array donde cada número se divide entre 2. Luego usa includes()
// para verificar si el número 5 está en el array resultante. Prueba con los dos arrays.
// Datos
// const a = [4, 10, 7, 12];
// const b = [4, 9];
// Resultado esperado
// // a: [2, 5, 3.5, 6] -> true
// // b: [2, 4.5] -> false

// 11

// Pregunta de análisis: includes() no acepta una condición como n => n === 5. ¿Qué método usarías
// si necesitaras una condición?

const a = [4, 10, 7, 12];
const b = [4, 9];

const resultadoA = a.map(numero => numero / 2);
const verificarA = resultadoA.includes(5);

console.log(resultadoA, "->", verificarA);

const resultadoB = b.map(numero => numero / 2);
const verificarB = resultadoB.includes(5);

console.log(resultadoB, "->", verificarB);

// ¿Que metodo usarias si necesitaras una condicion?

// Usaria some(), porque permite comprobar si al menos un elemento
//  del array cumple una condicion especifica.

