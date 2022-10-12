
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua
  //con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
    let sum_by_2 = [];
    var adding = numero;

    for(let i = 1; i < 11; i++){
        if(i !== 5)
            adding = adding + 2;
            sum_by_2.push(adding);
    }
    return sum_by_2;
}

let arr = [1, 120, 133, 3, 50, 60];
let arr1 = [100, 120, 133, 3, 50, 200];

console.log(continueStatement(2));
//console.log(mayorACien(arr1));
//console.log(tieneTresDigitos(1));
//console.log(multiplicarArgumentos(1, 2, 3));
//console.log(multiplicarArgumentos(5, 5, 5));
//console.log(multiplicarArgumentos());

