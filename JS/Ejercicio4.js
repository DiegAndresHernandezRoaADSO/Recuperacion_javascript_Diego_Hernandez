//Elevar un numero entero a su potencia sin utilizar el operador de la potencia
const base = parseInt(prompt("Introduce la base:"));
const exponente = parseInt(prompt("Introduce el exponente:"));

let resultado = 1;

for (let i = 0; i < exponente; i++) {
    resultado *= base;
}

console.log(`El resultado de ${base} elevado a la potencia ${exponente} es: ${resultado}`);
