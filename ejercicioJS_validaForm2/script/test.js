
// testeo de codigo para probar funciones. 



// // Función para mostrar un mensaje de error
// function mostrarError(elemento, mensaje) {
//     // Obtener el elemento que muestra el error
//     let error = document.getElementById("error" + elemento.id);
//     // Asignar el mensaje de error
//     error.innerHTML = `<h4>${mensaje}</h4>`;
//     // Añadir la clase invalid al elemento
//     elemento.classList.add("invalid");
//     // Borrar el valor del elemento
//     elemento.value = "";
//   }
  
//   // Función para ocultar un mensaje de error
//   function ocultarError(elemento) {
//     // Obtener el elemento que muestra el error
//     let error = document.getElementById("error" + elemento.id);
//     // Borrar el mensaje de error
//     error.innerHTML = "";
//     // Quitar la clase invalid al elemento
//     elemento.classList.remove("invalid");
//   }
  
//   // Función para mostrar un mensaje de éxito
//   function mostrarExito(elemento, mensaje) {
//     // Obtener el elemento que muestra el éxito
//     let exito = document.getElementById("exito" + elemento.id);
//     // Asignar el mensaje de éxito
//     exito.innerHTML = `<h4>${mensaje}</h4>`;
//     // Añadir la clase valid al elemento
//     elemento.classList.add("valid");
//   }
  
//   // Función para ocultar un mensaje de éxito
//   function ocultarExito(elemento) {
//     // Obtener el elemento que muestra el éxito
//     let exito = document.getElementById("exito" + elemento.id);
//     // Borrar el mensaje de éxito
//     exito.innerHTML = "";
//     // Quitar la clase valid al elemento
//     elemento.classList.remove("valid");
//   }
  
//   // Función para mostrar un mensaje de sugerencia o un valor por defecto
//   function mostrarSugerencia(elemento, mensaje, valor) {
//     // Obtener el elemento que muestra la sugerencia
//     let sugerencia = document.getElementById("sugerencia" + elemento.id);
//     // Asignar el mensaje de sugerencia
//     sugerencia.innerHTML = `<h4>${mensaje}</h4>`;
//     // Asignar el valor por defecto al elemento
//     elemento.value = valor;
//   }
  
//   // Función para ocultar un mensaje de sugerencia o un valor por defecto
//   function ocultarSugerencia(elemento) {
//     // Obtener el elemento que muestra la sugerencia
//     let sugerencia = document.getElementById("sugerencia" + elemento.id);
//     // Borrar el mensaje de sugerencia
//     sugerencia.innerHTML = "";
//     // Borrar el valor por defecto del elemento
//     elemento.value = "";
//   }
  
//   // Función para validar el nombre
//   function validarNombre(elemento) {
//     // Expresión regular para el nombre (solo letras y espacios)
//     const regexNombre = /^[a-zA-Z\s]+$/;
//     // Comprobar si el valor del elemento cumple la expresión regular
//     if (!regexNombre.test(elemento.value)) {
//       // Mostrar un mensaje de error
//       mostrarError(elemento, "Ingrese un nombre válido para enviar el formulario");
//     } else {
//       // Ocultar el mensaje de error
//       ocultarError(elemento);
//       // Mostrar un mensaje de éxito
//       mostrarExito(elemento, "Nombre válido");
//     }
//   }
  
//   // Función para validar los apellidos
//   function validarApellidos(elemento) {
//     // Expresión regular para los apellidos (solo letras y espacios)
//     const regexApellidos = /^[a-zA-Z\s]+$/;
//     // Comprobar si el valor del elemento cumple la expresión regular
//     if (!regexApellidos.test(elemento.value)) {
//       // Mostrar un mensaje de error
//       mostrarError(elemento, "Ingrese unos apellidos válidos para enviar el formulario");
//     } else {
//       // Ocultar el mensaje de error
//       ocultarError(elemento);
//       // Mostrar un mensaje de éxito
//       mostrarExito(elemento, "Apellidos válidos");
//     }
//   }
  
//   // Función para validar la edad
//   function validarEdad(elemento) {
//     // Comprobar si el valor del elemento es un número mayor que 18
//     if (elemento.value < 18) {
//       // Mostrar un mensaje de error
//       mostrarError(elemento, "Ingrese una edad válida: Para inscribirse debe tener más de 18 años");
//     } else {
//       // Ocultar el mensaje de error
//       ocultarError(elemento);
//       // Mostrar un mensaje de éxito
//       mostrarExito(elemento, "Edad válida");
//     }
//   }
  
//   // Función para validar el NIF
//   function validarNIF(elemento) {
//     // Expresión regular para el NIF (debe tener 8 números y una letra)
//     const regexNIF = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
//     // Comprobar si el valor del elemento cumple la expresión regular
//     if (!regexNIF.test(elemento.value)) {
//       // Mostrar un mensaje de error
//       mostrarError(elemento, "Ingrese un DNI válido para enviar el formulario: Incluya letra.");
//     } else {
//       // Ocultar el mensaje de error
//       ocultarError(elemento);
//       // Mostrar un mensaje de éxito
//       mostrarExito(elemento, "DNI válido");
//     }
//   }
  
//   // Función para validar el email
//   function validarEmail(elemento) {
//     // Expresión regular para el email
//     const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     // Comprobar si el valor del elemento cumple la expresión regular
//     if (!regexEmail.test(elemento.value)) {
//       // Mostrar un mensaje de error
//       mostrarError(elemento, "Ingrese una email válido para enviar el formulario.");
//     } else {
//       // Ocultar el mensaje de error
//       ocultarError(elemento);
//       // Mostrar un mensaje de éxito
//       mostrarExito(elemento, "Email válido");
//     }
//   }
  
//   // Función para validar las normas
//   function validarNormas(elemento) {
//     // Comprobar si el elemento está marcado
//     if (!elemento.checked) {
//       // Mostrar un mensaje de error
//       mostrarError(elemento, "Por favor, confirme que ha leído las normas para el envío del formulario");
//     } else {
//       // Ocultar el mensaje de error
//       ocultarError(elemento);
//       // Mostrar un mensaje de éxito
//       mostrarExito(elemento, "Normas aceptadas");
//     }
//   }
  
//   // Obtener los elementos del formulario
//   let nombre = document.getElementById("nombre");
//   let apellidos = document.getElementById("apellidos");
//   let edad = document.getElementById("edad");
//   let nif = document.getElementById("nif");
//   let email = document.getElementById("email");
//   let normas = document.getElementById("normas");
  
//   // Asignar los eventos onblur y onfocus a cada elemento
//   nombre.onblur = function() {
//     // Validar el nombre al perder el foco
//     validarNombre(this);
//   };
  
//   nombre.onfocus = function() {
//     // Mostrar una sugerencia al ganar el foco
//     mostrarSugerencia(this, "Ingrese su nombre completo", "Ejemplo: Juan Pérez");
//   };
  
//   apellidos.onblur = function() {
//     // Validar los apellidos al perder el foco
//     validarApellidos(this);
//   };
  
//   apellidos.onfocus = function() {
//     // Mostrar una sugerencia al ganar el foco
//     mostrarSugerencia(this, "Ingrese sus apellidos completos", "Ejemplo: García López");
//   };
  
//   edad.onblur = function() {
//     // Validar la edad al perder el foco
//     validarEdad(this);
//   };
  
//   edad.onfocus = function() {
//     // Mostrar una sugerencia al ganar el foco
//     mostrarSugerencia(this, "Ingrese su edad en años", "Ejemplo: 25");
//   };
  
//   nif.onblur = function() {
//     // Validar el NIF al perder el foco
//     validarNIF(this);
//   };
  
//   nif.onfocus = function() {
//     // Mostrar una sugerencia al ganar el foco
//     mostrarSugerencia(this, "Ingrese su NIF con 8 números y una letra", "Ejemplo: 12345678A");
//   };
  
//   email.onblur = function() {
//     // Validar el email al perder el foco
//     validarEmail(this);
//   };
  
//   email.onfocus = function() {
//     // Mostrar una sugerencia
//   }