// Ejercicio 14: Promedio y verificación
// Calcula el promedio de los precios con reduce(). Si el promedio es mayor a 100, crea un nuevo array
// con los precios menores al promedio.
// Datos
// const precios = [120, 80, 250, 60, 90];
// Resultado esperado
// // promedio: 120
// // [80, 60, 90]

// 12

// Pregunta de análisis: ¿Qué pasa con tu código si el array de precios está vacío? ¿Cómo lo evitas?

const precios = [120, 80, 250, 60, 90];

if (precios.length > 0) {
    const suma = precios.reduce((total, precio) => total + precio, 0);
    const promedio = suma / precios.length;

    console.log("Promedio:", promedio);

    if (promedio > 100) {
        const menores = precios.filter(precio => precio < promedio);
        console.log(menores);
    }
}

// ¿Que pasa con tu codigo si el array de precios esta vacio? ¿Como lo evitas?

// Si el array esta vacio, no se puede calcular el promedio porque se divide entre cero.
//  Lo evito usando if (precios.length > 0) para comprobar que el array tenga elementos
//   antes de realizar la operacion.
