
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
let arr = [1, 120, 133, 3, 50, 60];
const car2 = { myCar: 'Saturn', precio: 25000, porcentajeDeDescuento: 0.10};
const car3 = { myCar: 'Saturn', likes: 5};
const car = { myCar: 'Saturn', posts: [car2, car3]};
let arr1 = [car, car2];
agregarMetodo();

console.log(carlito.detalle());
console.log(carlito.datos());
//console.log(user.saludar());
//console.log(mayorACien(arr1));
//console.log(tieneTresDigitos(1));
//console.log(multiplicarArgumentos(1, 2, 3));
//console.log(multiplicarArgumentos(5, 5, 5));
//console.log(multiplicarArgumentos());

