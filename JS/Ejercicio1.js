// Restar dos números sin utilizar el operador de resta.

let a = parseInt(prompt("ingrese el valor de a"));
let b = parseInt(prompt("ingrese el valor de b"));

function Restar (a,b){
    let valor = 0
    while (a > b){
        b += 1
        valor += 1
    }
    return valor
}



alert(Restar(a,b));


// Primero, creamos una función llamada Restar que recibe dos parámetros: a y b.
// Dentro de la función, creamos una variable llamada valor y la inicializamos en 0.
// Luego, utilizamos un bucle while que se ejecutará mientras a sea mayor que b.
// Dentro del bucle, incrementamos b en 1 y también incrementamos valor en 1.
// Cuando b alcanza o supera a, el bucle termina y la función devuelve el valor de valor.

// Solicitamos al usuario que ingrese los valores de a y b mediante el método prompt.
// Convertimos los valores ingresados a números enteros usando parseInt.
// Llamamos a la función Restar con los valores ingresados y mostramos el resultado en la consola.

