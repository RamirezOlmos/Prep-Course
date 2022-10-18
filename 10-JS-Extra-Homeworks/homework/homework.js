// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    let all_pairs = [];
    let pair = [];
    for(let clave in objeto){
        pair.push(clave);
        pair.push(objeto[clave]);
        all_pairs.push(pair);
        pair = [];
    }

    return all_pairs;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4,
  //s: 5 } 
  //Escribe tu código aquí
    let char_count = {};

    for(let c of string){
        if(c in char_count){
            ++char_count[c];
        }
        else
            char_count[c] = 1;
    }

    return char_count;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
    let new_string = "";
    let lower_case = [];
    let upper_case = [];

    for(let c of s){
        if(c == c.toUpperCase())
            upper_case.push(c);
        else
            lower_case.push(c);
    }
    for(const c of upper_case)
        new_string = new_string + c;
    for(const c of lower_case)
        new_string = new_string + c;

    return new_string;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda
  //a derecha pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
    let new_string = "";
    let invert_string = [];
    for(let c of str){
        if(c != " ")
            invert_string.push(c);
        else{
            for(let i = invert_string.length - 1; i >= 0; i--){
                new_string = new_string + invert_string[i];
            }
            invert_string = [];
            new_string = new_string + " ";
        }
    }
    for(let i = invert_string.length - 1; i >= 0; i--){
        new_string = new_string + invert_string[i];
    }

    return new_string;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    var str_num = numero.toString();
    var from_back = str_num.length - 1;
    for(let i = 0; i < str_num.length; i++){
      if(str_num[i] != str_num[from_back--])
        return "No es capicua";
    }
    return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    var new_string = "";

    for(let c of cadena){
        if(c != "a" && c != "b" && c != "c")
            new_string = new_string + c;
    }

    return new_string;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking",
  // "beautiful"]
  //Escribe tu código aquí
    var str_length = [];
    let length_pair = [];

    for(const str of arr){
        str_length.push(str);
        str_length.push(str.length)
        length_pair.push(str_length)
        str_length = [];
    }

    length_pair.sort(function(a, b){
          return a[1] - b[1];
      });

    for(const pair of length_pair){
          str_length.push(pair[0])
      }

    return str_length;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
    let intersection = [];

    if(arreglo1.length > arreglo2.length){
        for(const num of arreglo2){
            if(arreglo1.includes(num))
                intersection.push(num);
        }
    }
    else{
        for(const num of arreglo1){
            if(arreglo2.includes(num))
                intersection.push(num);
        }
    }

    return intersection;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

