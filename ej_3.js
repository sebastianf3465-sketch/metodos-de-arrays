// Ejercicio 3: Verificar, ordenar y encontrar
// Primero usa some() para verificar si hay al menos una persona menor de 18 años. Luego usa sort()
// para ordenar de menor a mayor edad y find() para obtener la persona mayor de edad (18 o más) más
// joven.
// Datos
// const personas = [
// { nombre: "Sara", edad: 31 },
// { nombre: "Luis", edad: 17 },
// { nombre: "Ana", edad: 25 },
// { nombre: "Pedro", edad: 15 },
// ];

// 9

// Resultado esperado
// // some: true
// // ordenado: Pedro (15), Luis (17), Ana (25), Sara (31)
// // find: { nombre: "Ana", edad: 25 }
// Pregunta de análisis: Si no ordenas antes, ¿a quién devuelve find()? ¿Por qué el orden cambia el
// resultado?

const personas = [
  { nombre: "Sara", edad: 31 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 15 },
];

const hayMenores = personas.some(p => p.edad < 18);


personas.sort((a, b) => a.edad - b.edad);


const personaMayorMasJoven = personas.find(p => p.edad >= 18);

console.log("some:", hayMenores);
console.log("ordenado:", personas);
console.log("find:", personaMayorMasJoven);
 
//    Si no ordenas antes, ¿a quien devuelve find()?
//     Devuelve a Sara ({ nombre: "Sara", edad: 31 }).

//    ¿Por que el orden cambia el resultado?
//     Porque find() recorre el array de izquierda a derecha y se detiene 
//     en la primera coincidencia que encuentra. Sin ordenar, Sara es la 
//     primera persona en la lista que cumple la condicion (edad >= 18). 
//     Al ordenar de menor a mayor, Ana (25) pasa a estar antes que Sara (31), 
//     por lo que find() la encuentra a ella primero.
