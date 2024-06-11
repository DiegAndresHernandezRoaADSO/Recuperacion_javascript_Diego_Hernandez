// Definición de la función multiplicacion
function multiplicacion(a, b) {
    let ac = 0; // Inicializamos el acumulador en 0, donde se almacenará el resultado final
    let c = 0; // Inicializamos el contador en 0, para controlar las iteraciones del bucle

    // Utilizamos un bucle while para repetir la suma de 'a' tantas veces como 'b'
    while (c < b) {
        ac = ac + a; // Sumamos 'a' al acumulador en cada iteración
        c = c + 1; // Incrementamos el contador en 1 en cada iteración para controlar el bucle
    }
    return ac; // Devolvemos el valor del acumulador, que es el resultado de la multiplicación
}


let a = parseInt(prompt("Ingrese el valor de a:")); 
let b = parseInt(prompt("Ingrese el valor de b:")); 

// Llamamos a la función 'multiplicacion' con los valores ingresados por el usuario como argumentos
let resultado = multiplicacion(a, b); // Almacenamos el resultado de la multiplicación en la variable 'resultado'

// Mostramos el resultado al usuario mediante un mensaje de alerta
alert(resultado); // Mostramos el resultado de la multiplicación al usuario


// Explicación detallada del código
// La función 'multiplicacion' calcula el producto de 'a' y 'b' mediante la suma repetida de 'a' tantas veces como 'b'.
// Luego, se solicita al usuario que ingrese los valores de 'a' y 'b' mediante el método 'prompt'.
// Estos valores se pasan como argumentos a la función 'multiplicacion'.
// Finalmente, se muestra el resultado de la multiplicación al usuario mediante un mensaje de alerta.