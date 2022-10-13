
function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]")
  // y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
    producto["calcularPrecioDescuento"] = function() {
        var precio_descuento = 0;
        precio_descuento = this.precio - (this.precio * this.porcentajeDeDescuento);
        return precio_descuento;
    }
    return producto;
}

let arr = [1, 120, 133, 3, 50, 60];
const car2 = { myCar: 'Saturn', precio: 25000, porcentajeDeDescuento: 0.10};
const car3 = { myCar: 'Saturn', likes: 5};
const car = { myCar: 'Saturn', posts: [car2, car3]};
let arr1 = [car, car2];

console.log(agregarMetodoCalculoDescuento(car2.calcularPrecioDescuento()));
//console.log(actualizarPassword(car2, "1"));
//console.log(mayorACien(arr1));
//console.log(tieneTresDigitos(1));
//console.log(multiplicarArgumentos(1, 2, 3));
//console.log(multiplicarArgumentos(5, 5, 5));
//console.log(multiplicarArgumentos());

