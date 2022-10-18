
  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.domicilio = domicilio;
    }

    detalle() {
        var detail = {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            domicilio: this.domicilio,
        }
        return detail;
    }

}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona
  //(creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
    const new_person = new Persona(nombre, apellido, edad, dir);

    return new_person;
}

function agregarMetodo(){
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la
  //persona y devuelve: 
  //Ej: "Juan, 22 años"
    Persona.prototype.datos = function(){
        return this.nombre + ", " + this.edad + " años";
    }

}

const carlito = crearInstanciaPersona("Carlos", "Ramirez", 32, "Sutano 9");
let arr = ["arroyo", "canasto", "color", "arugula", "astuto", "carnal"];
const car2 = { myCar: 'Saturn', precio: 25000, porcentajeDeDescuento: 0.10};
const car3 = {D: 1, B: 2, C: 3};
const car = { myCar: 'Saturn', posts: [car2, car3]};
let arr1 = [car, car2];
agregarMetodo();


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

console.log(buscoInterseccion([1, 3, 4, 5], [2, 3, 6, 5, 8]));
console.log(buscoInterseccion([1, 2, 7, 3, 4, 5], [2, 3, 6, 5]));
console.log(buscoInterseccion([1, 2, 7, 3, 4, 5], [8, 9, 6, 10]));
//console.log(mayorACien(arr1));
//console.log(tieneTresDigitos(1));
//console.log(multiplicarArgumentos(1, 2, 3));
//console.log(multiplicarArgumentos(5, 5, 5));
//console.log(multiplicarArgumentos());

