// Ejercicio 4: Combinar y sumar
// Usa concat() para combinar los dos arrays en uno solo. Luego usa reduce() para obtener la suma
// total del array combinado.
// Datos
// const a = [3, 7, 2];
// const b = [10, 5];
// Resultado esperado
// // [3, 7, 2, 10, 5]
// // suma: 27
// Pregunta de análisis: ¿concat() modificó a o b?

const a = [3, 7, 2];
const b = [10, 5];

const combinado = a.concat(b);

const suma = combinado.reduce((acumulador, actual) => acumulador + actual, 0);

console.log(combinado); 
console.log(suma);     

// Respuesta de análisis:
// No, concat() no modificó ni a a ni a b. Solo crea y devuelve un nuevo array combinando ambos, dejando los originales intactos.
