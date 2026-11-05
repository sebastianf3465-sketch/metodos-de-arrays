// Ejercicio 6: Buscar y reemplazar
// Usa indexOf() para encontrar el índice de un nombre. Si existe (índice distinto de -1), reemplázalo por
// otro nombre en esa posición. Hazlo primero con fill(valor, indice, indice + 1) y luego con
// splice(). Prueba con un nombre que no exista.
// Datos
// const nombres = ["Ana", "Luis", "Sara", "Pedro"];
// Resultado esperado
// // reemplazar "Sara" por "Camila": ["Ana", "Luis", "Camila", "Pedro"]
// // reemplazar "Juan" (no existe): el array no cambia
// Pregunta de análisis: Si no validas el -1, ¿qué haría nombres.splice(-1, 1, "Camila")?

const nombres = ["Ana", "Luis", "Sara", "Pedro"];

let indice = nombres.indexOf("Sara");

if (indice !== -1) {
    nombres.fill("Camila", indice, indice + 1);
}

console.log(nombres);

let indice2 = nombres.indexOf("Camila");

if (indice2 !== -1) {
    nombres.splice(indice2, 1, "Sara");
}

console.log(nombres);

let indice3 = nombres.indexOf("Juan");

if (indice3 !== -1) {
    nombres.splice(indice3, 1, "Camila");
}

console.log(nombres);



  
//   ¿Que haria nombres.splice(-1, 1, "Camila") si no validas el -1?
// Reemplazaria el ultimo elemento del array por "Camila", porque splice(-1) toma como posicion
//  el ultimo elemento.
// Conclusion: Es importante validar que indexOf() no devuelva -1 para evitar reemplazar
//  accidentalmente el ultimo elemento del array.
