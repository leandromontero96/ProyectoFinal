// Variables y constantes
let contador = 0; // Variable modificable
const MAX_INTENTOS = 3; // Constante no modificable

// Condicionales
if (contador < MAX_INTENTOS) {
  console.log("Aún tienes intentos disponibles");
} else {
  console.log("Has alcanzado el máximo de intentos");
}

// Funciones
function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 3);
console.log("El resultado de la suma es: " + resultado);

// Métodos
const celular = {
  marca: "Samsung",
  modelo: "Galaxy S20",
  color: "Negro",
  encender: function() {
    console.log("El celular se ha encendido");
  },
  llamar: function(numero) {
    console.log("Llamando al número: " + numero);
  }
};

celular.encender();
celular.llamar("123456789");
