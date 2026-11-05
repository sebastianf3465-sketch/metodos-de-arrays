// Ejercicio 15: Extracción y unión
// Crea una nueva lista con los tres primeros colores, sin modificar el array original. Luego crea otra lista
// que combine esa con los colores secundarios.
// Datos
// const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
// const secundarios = ["naranja", "violeta"];
// Resultado esperado
// // ["rojo", "azul", "verde"]
// // ["rojo", "azul", "verde", "naranja", "violeta"]
// // colores sigue con sus 5 elementos
// Pregunta de análisis: ¿Cómo comprobaste que colores no cambió?

const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const secundarios = ["naranja", "violeta"];

const primeros = colores.slice(0, 3);

console.log(primeros);

const combinados = primeros.concat(secundarios);

console.log(combinados);

console.log(colores);

// ¿Como comprobaste que colores no cambio?

// Lo comprobe mostrando el array original con console.log(colores) y verifique que seguia
//  teniendo sus cinco elementos. Esto sucede porque slice() y concat() crean nuevos arrays
//   sin modificar el original.