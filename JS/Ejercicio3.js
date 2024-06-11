// Dividir dos números sin el operador de la división 

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero.";
    }

    let signo = (a < 0) ^ (b < 0) ? -1 : 1; // Determina el signo del resultado
    a = Math.abs(a);
    b = Math.abs(b);

    let cociente = 0;
    while (a >= b) {
        a -= b;
        cociente++;
    }

    return signo * cociente;
}

// Ejemplo de uso
let a = parseInt(prompt("Ingrese el dividendo:"));
let b = parseInt(prompt("Ingrese el divisor:"));
let resultado = dividir(a, b);
alert(resultado);
