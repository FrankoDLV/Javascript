// Declaramos las variables en las que vamos a alojar los datos que vamos a ingresar a trav[es] del prompt

let nombreRecorrido;
let velocidadSubida;
let velocidadPlano;
let velocidadBajada;
let tiempoBajada;

// Creo la funcion mediante la que voy a calcular la velocidad promedio. La funcion va a tomar 3 parametros y va a retornar el resultado de una operacion

function calcularPromedio(v1, v2, v3) {
  return (v1 + v2 + v3) / 3;
}

// Asigno el nombre del recorrido mediante un prompt

nombreRecorrido = prompt("Ingresa el nombre del recorrido");

// Creo la funcion que va a realizar el pedido y el calculo del promedio

function circuitoApp() {
  // Creo un ciclo do while que me va a ejecutar un prompt mientras el valor ingresado no sea un numero.

  do {
    // Convierto el valor ingresado a un numero decimal mediante parseFloat
    velocidadBajada = parseFloat(
      prompt("Ingresa la velidad de bajada en kilometros por hora")
    );

    // Planteo la condicion de salida, en este caso lo que evaluo es que el valor ingresado NO SEA UN NUMERO o NO SEA isNaN.
  } while (isNaN(velocidadBajada) === true);

  do {
    velocidadSubida = parseFloat(
      prompt("Ingresa la velidad de subida en kilometros por hora")
    );
  } while (isNaN(velocidadSubida) === true);

  do {
    velocidadPlano = parseFloat(
      prompt("Ingresa la velidad de plano en kilometros por hora")
    );
  } while (isNaN(velocidadPlano) === true);

  const promedio = calcularPromedio(
    velocidadBajada,
    velocidadPlano,
    velocidadSubida
  );

  const seguir = confirm(
    "Registraste correctamente los datos? Si no lo hiciste, apretá CANCELAR para reiniciar el registro"
  );

  if (seguir === true) {
    alert(
      "El recorrido fue: " +
        nombreRecorrido +
        " y la velocidad promedio es de: " +
        promedio +
        "Km por hora"
    );
    alert("Gracias por registrar tu recorrido.");
  } else {
    circuitoApp();
  }
}

circuitoApp();