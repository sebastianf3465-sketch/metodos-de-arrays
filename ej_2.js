// Ejercicio 2: Invertir y encontrar
// Usa reverse() para invertir el orden de las palabras. Luego usa find() para encontrar la primera
// palabra con más de 3 caracteres.
// Datos
// const palabras = ["sol", "luna", "mar", "estrella"];
// Resultado esperado
// // invertido: ["estrella", "mar", "luna", "sol"]
// // find: "estrella"
// Pregunta de análisis: ¿Qué palabra habría encontrado find() sin el reverse()? ¿Qué le pasó al
// array palabras?

const palabras = ["sol", "luna", "mar", "estrella"];

const resultadoFind = palabrasInvertidas.find( palabra => palabra.length > 3 );

console.log("Invertido:", palabrasInvertidas);
console.log("Find:", resultadoFind);

// ¿Que palabra habria encontrado find() sin el reverse()?
//     Habria encontrado "luna", ya que era la primera palabra del array 
//     original con mas de 3 caracteres.

//     ¿Que le paso al array palabras?
//     El array original palabras si cambio (muto) y ahora esta invertido, 
//     a menos que hagamos una copia previa como [..."palabras"] para evitarlo.