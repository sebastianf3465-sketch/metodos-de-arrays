// Ejercicio 1: Transformar y filtrar
// Con map() multiplica cada número por 3. Luego, sobre el nuevo array, usa filter() para quedarte con
// los mayores a 10.
// Datos
// const numeros = [2, 5, 3, 8, 1];
// Resultado esperado
// // [15, 24]
// Pregunta de análisis: ¿Cambió el array numeros? ¿Cómo lo comprobaste?

const numeros = [2, 5, 3, 8, 1];

.map(num => num * 3)

.filter(num => num > 10);

console.log(resultado);

// explicacion de el ejercicio 
// No, el array numeros no cambió. Sigue siendo [2, 5, 3, 8, 1] porque map y filter no modifican el original, sino que crean uno nuevo. Lo comprobamos haciendo un console.log(numeros) al final.