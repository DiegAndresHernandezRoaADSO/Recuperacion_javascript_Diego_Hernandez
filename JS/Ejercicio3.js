// Dividir dos números sin el operador de la división 

function dividir(a, b) {
    // Verifica si el divisor es 0, en cuyo caso retorna un mensaje de error
    if (b === 0) {
        return "Error: División por cero.";
    }

    // Determina el signo del resultado usando el operador XOR (^)
    // Si uno de los números es negativo y el otro no, el resultado será negativo
    // Si ambos números tienen el mismo signo, el resultado será positivo
    let signo = (a < 0) ^ (b < 0) ? -1 : 1;

    // Convierte 'a' y 'b' a sus valores absolutos para simplificar el cálculo
    a = Math.abs(a);
    b = Math.abs(b);

    // Inicializa el cociente en 0
    let cociente = 0;

    // Realiza la resta sucesiva para encontrar el cociente
    while (a >= b) {
        a -= b; // Resta el divisor del dividendo
        cociente++; // Incrementa el cociente en 1
    }

    // Devuelve el cociente ajustado con el signo determinado
    return signo * cociente;
}

// Ejemplo de uso
let a = parseInt(prompt("Ingrese el dividendo:")); // Solicita el dividendo al usuario y lo convierte a entero
let b = parseInt(prompt("Ingrese el divisor:")); // Solicita el divisor al usuario y lo convierte a entero
let resultado = dividir(a, b); // Llama a la función 'dividir' con los valores introducidos
alert(resultado); // Muestra el resultado de la división al usuario
