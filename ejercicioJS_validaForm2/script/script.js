/// variable asociada al formulario para recogerlo. 
const miformularioValidado = document.getElementById("myForm");

/// variables const para recoger cada uno de los campos del formulario. 

const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const edad = document.getElementById("edad");
const nif = document.getElementById("nif");
const email = document.getElementById("email");
const normas = document.getElementById("normas");


let aciertoNombre = `<h4> Campo Correcto </h4>`;
let aciertoApellidos = `<h4> Campo Correcto </h4>`;
let aciertoEdad = `<h4> Campo Correcto </h4>`;
let aciertoNIF = `<h4> Campo Correcto </h4>`
let aciertoEmail = `<h4> Campo Correcto </h4>`;
let aciertoNormas = `<h4> Campo Correcto </h4>`;


/// Regex valid codes
let regexNombreApellidos = /^[a-zA-Z\s]+$/;
let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regexNIF = /^\d{1,8}[A-Za-z]$/;


function validarNombre(nombre) {
  if (regexNombreApellidos.test(nombre.value)) {
    // document.getElementById("aciertoNombre").innerHTML = aciertoNombre;
    // document.getElementById("errorNombre"). innerHTML = '';
    return true;
  } else {
    // document.getElementById("errorNombre").innerHTML = `<h4> Ingrese un nombre válido para enviar el formulario </h4> `;
    return false;
  } 
}

function validarApellidos(apellidos) {
  if (regexNombreApellidos.test(apellidos.value)) {
    // document.getElementById("aciertoApellidos").innerHTML = aciertoApellidos;
    // document.getElementById("errorApellidos"). innerHTML = '';
    return true;
  } else {
    // document.getElementById("errorApellidos").innerHTML = `<h4> Ingrese unos apellidos válidos para enviar el formulario </h4>`;
    
  }
}

function validarEdad (edad) {
  if (edad.value >= 18) {
    // document.getElementById("aciertoEdad").innerHTML = aciertoEdad;
    // document.getElementById("errorEdad"). innerHTML = '';
    return true;
  } else {
    // document.getElementById("errorEdad").innerHTML = `<h4> Ingrese una edad válida: Para inscribirse debe tener más de 18 años </h4>`;
    
  } 
}

function validarNIF (nif) {
  if (regexNIF.test(nif.value)) {
    // document.getElementById("aciertoNIF").innerHTML = aciertoNIF;
    // document.getElementById("errorNIF"). innerHTML = '';
    return true;
  } else {
    // document.getElementById("errorNIF").innerHTML = `<h4> Ingrese un DNI válido para enviar el formulario: Incluya letra. </h4>`;
    
  } 
}

function validarEmail(email){
  if (regexEmail.test(email.value)) {
    // document.getElementById("aciertoEmail").innerHTML = aciertoEmail;
    // document.getElementById("errorEmail"). innerHTML = '';
    return true;
  } else {
    // document.getElementById("errorEmail").innerHTML = `<h4> Ingrese una email válido para enviar el formulario. </h4>`;
    
  } return false;
}

function validarNormas (normas) {
  if (normas.checked) {
    // document.getElementById("aciertoNormas").innerHTML = aciertoNormas;
    // document.getElementById("errorNormas"). innerHTML = '';
    return true;
  } else {
    // document.getElementById("errorNormas").innerHTML = `<h4>Por favor, confirme que ha leído las normas para el envío del formulario </h4>`;

  } return false;
}

function mensajes() {
  
  if (validarNombre(nombre)) {
    document.getElementById("aciertoNombre").style.background = 'green';
    document.getElementById("aciertoNombre").innerHTML = aciertoNombre;
  
  } else {
    document.getElementById("aciertoNombre").style.background = 'red';
    document.getElementById("aciertoNombre").innerHTML = `<h4> Ingrese un apellido válido para enviar el formulario </h4> `;
    nombre.value = ''; 
  }
  

    if (validarApellidos(apellidos)) {
      document.getElementById("aciertoApellidos").style.background = 'green';
      document.getElementById("aciertoApellidos").innerHTML = aciertoApellidos;
    
    } else {
      document.getElementById("aciertoApellidos").style.background = 'red';
      document.getElementById("aciertoApellidos").innerHTML = `<h4> Ingrese un apellido válido para enviar el formulario </h4> `;
      apellidos.value = ''; 
    }

    if (validarEdad(edad)) {
      document.getElementById("aciertoEdad").style.background = 'green';
      document.getElementById("aciertoEdad").innerHTML = aciertoEdad;
      
    } else {
      document.getElementById("aciertoEdad").style.background = 'red';
      document.getElementById("aciertoEdad").innerHTML = `<h4> Ingrese un número válido para enviar el formulario, mayor o igual 18 </h4> `;
      document.getElementById("edad").value = ''; 
    }

    if (validarEmail(email)) {
      document.getElementById("aciertoEmail").style.background = 'green';
      document.getElementById("aciertoEmail").innerHTML = aciertoEmail;
      
    } else {
      document.getElementById("aciertoEmail").style.background = 'red';
      document.getElementById("aciertoEmail").innerHTML = `<h4> Ingrese un email válido para enviar el formulario </h4> `;
      document.getElementById("email").value = ''; 
    }

    if (validarNIF(nif)) {
      document.getElementById("aciertoNIF").style.background = 'green';
      document.getElementById("aciertoNIF").innerHTML = aciertoNIF;
      
    } else {
      document.getElementById("aciertoNIF").style.background = 'red';
      document.getElementById("aciertoNIF").innerHTML = `<h4> Ingrese un NIF válido para enviar el formulario </h4> `;
      document.getElementById("nif").value = ''; 
    }


    if (validarNormas(normas)) {
      document.getElementById("aciertoNormas").style.background = 'green';
      document.getElementById("aciertoNormas").innerHTML = aciertoNormas;
      
    } else {
      document.getElementById("aciertoNormas").style.background = 'red';
      document.getElementById("aciertoNormas").innerHTML = `<h4> Acepte las normas para enviar el formulario </h4> `;
      document.getElementById("normas").value = ''; 
    }



}


miformularioValidado.addEventListener("submit", (event) => {
  event.preventDefault();

   /////// VALIDACIÓN COMPLETA //////
  if (validarNombre(nombre) && validarApellidos(apellidos) && validarEdad(edad) && validarNIF(nif) && validarEmail(email) && validarNormas(normas)) {
    return miformularioValidado.submit();
  } 

  mensajes();

/// DOM mensajes. LLAMADA A LA FUNCION MENSAJES().
});

