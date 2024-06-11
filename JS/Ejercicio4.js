//Elevar un numero entero a su potencia sin utilizar el operador de la potencia
const base = parseInt(prompt("Introduce la base:"));
const exponente = parseInt(prompt("Introduce el exponente:"));

const resultado = Math.pow(base, exponente);
console.log(`El resultado de ${base} elevado a la potencia ${exponente} es: ${resultado}`);