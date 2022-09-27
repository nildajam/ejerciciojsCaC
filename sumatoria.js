// CONSIGNA (ejercicio no obligatorio):
// - Ingresar 5 precios por Prompt (desde el Navegador)
// - Mediante una función hacer la sumatoria de los 5 productos, y mostrar el mismo por un alert

// Ejercicio:
// - Ingresar 5 precios por Prompt (desde el Navegador)
let p1 = Number(prompt("Ingrese precio 1:"));
let p2 = Number(prompt("Ingrese precio 2:"));
let p3 = Number(prompt("Ingrese precio 3:"));
let p4 = Number(prompt("Ingrese precio 4:"));
let p5 = Number(prompt("Ingrese precio 5:"));

// - Mediante una función hacer la sumatoria de los 5 productos, y mostrar el mismo por un alert
function suma() {
  const sumatoria = p1 + p2 + p3 + p4 + p5;

  // Esta parte la agregué para ver en consola los valores ingresados y la sumatoria
  // {
  console.log("El 1º precio ingresado es: $" + p1);
  console.log("El 2º precio ingresado es: $" + p2);
  console.log("El 3º precio ingresado es: $" + p3);
  console.log("El 4º precio ingresado es: $" + p4);
  console.log("El 5º precio ingresado es: $" + p5);
  console.log(
    "La suma de precios de los 5 productos que ingresó es de: $" + sumatoria
  );
  // }

  alert(
    "La suma de precios de los 5 productos que ingresó es de: $" + sumatoria
  );
}

suma();
