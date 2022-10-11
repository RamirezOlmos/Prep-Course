
function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
    let result = numero;
    let i = 1;

    do {
        ++i;
        result = result + 5;
    } while (i < 9);

    return result;
}

console.log(doWhile(1));
console.log(doWhile(2));
//console.log(doWhile(97));
//console.log(doWhile(4000));
//console.log(doWhile(170));

