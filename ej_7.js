// Ejercicio 7: Filtrar y unir
// Usa filter() para quedarte con las frutas que contienen la letra "a" (los strings también tienen
// includes()). Luego usa join() para unirlas en un solo string, separadas por coma y espacio.
// Datos
// const frutas = ["manzana", "kiwi", "pera", "uva"];
// Resultado esperado
// // "manzana, pera, uva"
// Pregunta de análisis: ¿Por qué no puedes hacer primero join() y después filter()?

const frutas = ["manzana", "kiwi", "pera", "uva"];

const frutasFiltradas = frutas.filter(fruta => fruta.includes("a"));

const resultado = frutasFiltradas.join(", ");

console.log(resultado);

// ¿Por que no puedes hacer primero join() y despues filter()?

// Porque join() convierte el array en un solo string, y filter() funciona con arrays,
//  no con strings. Por eso primero debemos filtrar las frutas y despues unirlas.