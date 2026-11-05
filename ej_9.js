// Ejercicio 9: Buscar con condición
// Usa findIndex() para encontrar el índice del primer producto cuyo precio sea mayor a 100. Prueba
// también con una condición que ningún producto cumpla.
// Datos
// const productos = [
// { nombre: "Lápiz", precio: 50 },
// { nombre: "Cuaderno", precio: 120 },
// { nombre: "Libro", precio: 200 },
// ];
// Resultado esperado
// // 1
// // si ninguno cumple: -1
// Pregunta de análisis: ¿Qué te devolvería find() en lugar de findIndex() con esos mismos datos?

const productos = [
    { nombre: "Lápiz", precio: 50 },
    { nombre: "Cuaderno", precio: 120 },
    { nombre: "Libro", precio: 200 }
];

const indice = productos.findIndex(producto => producto.precio > 100);

console.log(indice);

const indice2 = productos.findIndex(producto => producto.precio > 300);

console.log(indice2);

// ¿Que te devolveria find() en lugar de findIndex() con esos mismos datos?

// Devolveria el objeto completo del primer producto que cumpla la condicion,
//  en este caso { nombre: "Cuaderno", precio: 120 }. Si ninguno cumple, devolveria undefined.