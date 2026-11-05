// Ejercicio 11: Transformación y búsqueda
// Crea un nuevo array con todos los nombres en mayúsculas. Luego encuentra el primer nombre con
// más de 6 caracteres.
// Datos
// const nombres = ["ana", "luis", "valentina", "sara", "sebastian"];
// Resultado esperado
// // ["ANA", "LUIS", "VALENTINA", "SARA", "SEBASTIAN"]
// // "VALENTINA"

const nombres = ["ana", "luis", "valentina", "sara", "sebastian"];

const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());

const nombreEncontrado = nombresMayusculas.find(nombre => nombre.length > 6);

console.log(nombresMayusculas);
console.log(nombreEncontrado);

