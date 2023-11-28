//creamos la plantilla de autos
class Autos {
  constructor(marca, modelo, precio, fabricacion) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.fabricacion = fabricacion;
  }
}
//creamos concecionaria
const concesionaria = [
  new Autos("Fiat", "Argo", 100000, 2018),
  new Autos("Fiat", "Cronos", 250000, 2018),
  new Autos("Toyota", "Etios", 280000, 2020),
  new Autos("Porche", "911 carreras", 500000, 2021),
  new Autos("Porche", "cayene", 720000, 2023),
];
// array donde se va acumulando los objetos seleccionados
const vehiculoSeleccionado = [];

//funcion que va a mostrar el menu

function seleccionAuto() {
  let nombre = prompt("ingrese su nombre y apellido").toUpperCase();
  let listadoAutos = `Bienvenido ${nombre}  al listado de autos de Driver Max \n`;
  concesionaria.forEach((concesionaria, index) => {
    listadoAutos =
      listadoAutos +
      `
        ${index + 1} - ${concesionaria.marca} - ${concesionaria.modelo} -${
        concesionaria.fabricacion
      } : $ ${concesionaria.precio} \n `;
  });

  let catalogo = prompt(listadoAutos);

  while (catalogo < 1 || catalogo > concesionaria.length) {
    catalogo = prompt(
      listadoAutos + "\n" + "vuelva a ingresar una opcion correcta: "
    );
  }
  vehiculoSeleccionado.push(concesionaria[catalogo - 1]);
}

function comprarVehiculo() {
  let catalogo;
  do {
    seleccionAuto();
    catalogo = prompt("Desea agregar otro vehiculo s/n").toLocaleLowerCase();
  } while (catalogo !== "n");
}

// funcion que va a dar el total de la compra
function totalCompra() {
  let total = vehiculoSeleccionado.reduce((total, concesionaria) => {
    return total + concesionaria.precio;
  }, 0);
  alert(
    `Gracias por su compra el vehiculo estara disponible en 15 dias, el total es de: $${total}`
  );
}

//funcion que va a ejecutar el pago del mismo.
function pagoVehiculos() {
  let metodoDePago = prompt(
    `Bien estamos en la intancia final ¿Como desea abonar? :\n` +
      "\n" +
      "1-Tarjeta de credito o credito." +
      "\n" +
      "2-Retiro en la concesionaria."
  );
  switch (metodoDePago) {
    case "1":
      prompt("ingrese el numero de su tarjeta");
      prompt("ingrese el codigo de seguridad");
      alert(
        "Gracias por su compra, lo esperamos en DRIVER MAX de lunes a viernes, en los horarios de 16:30 a 20:30"
      );
      break;
    case "2":
      alert(
        "Lo esperamos en DRIVER MAX para finalizar su compra de lunes a viernes, en los horarios de 16:30 a 20:30"
      );
      break;
    default:
      alert("opcion incorrecta Seleccione un metodo correcto");
      pagoVehiculos();
  }
}
comprarVehiculo();
totalCompra();
pagoVehiculos();
