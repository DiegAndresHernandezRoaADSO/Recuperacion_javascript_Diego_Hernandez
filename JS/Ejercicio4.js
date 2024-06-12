//Elevar un numero entero a su potencia sin utilizar el operador de la potencia

// Solicita al usuario que introduzca la base y la convierte a un número entero
const base = parseInt(prompt("Introduce la base:"));

// Solicita al usuario que introduzca el exponente y la convierte a un número entero
const exponente = parseInt(prompt("Introduce el exponente:"));

// Inicializa la variable 'resultado' en 1. Esta variable almacenará el resultado final
let resultado = 1;

// Bucle que se ejecuta 'exponente' veces
for (let i = 0; i < exponente; i++) {
    // Multiplica 'resultado' por 'base' en cada iteración
    resultado *= base;
}

// Muestra el resultado en la consola
console.log(`El resultado de ${base} elevado a la potencia ${exponente} es: ${resultado}`);

