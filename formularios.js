//JS formularios
function validarFormularioDoctores(event) {
    event.preventDefault(); // Evitar envío del formulario por defecto

    // Obtener los elementos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cedula = document.getElementById("cedula").value;
    var especialidad = document.getElementById("especialidad").value;
    var consultorio = document.getElementById("consultorio").value;
    var correo = document.getElementById("correo").value;

    // Expresión regular para validar la cédula (ejemplo)
    var cedulaRegex = /^[0-9]{9}$/;

    // Validar los campos
    if (nombre === "" || apellido === "" || cedula === "" || especialidad === "" || consultorio === "" || correo === "") {
    alert("Todos los campos son obligatorios");
    } else if (!cedulaRegex.test(cedula)) {
    alert("La cédula debe tener 9 dígitos");
    } else {
    //JSON formularios
    var formularioDoctores = {};
    formularioDoctores.nombre = nombre;
    formularioDoctores.apellido = apellido;
    formularioDoctores.cedula = cedula;
    formularioDoctores.especialidad = especialidad;
    formularioDoctores.consultorio = consultorio;
    formularioDoctores.correo = correo;

    var formularioDoctoresJSON = JSON.stringify(formularioDoctores);

    //Guardar archivo JSON:
    guardarJSONEnArchivo(formularioDoctoresJSON, 'formularioDoctores.json');

    }
}

function validarFormularioPersonas(event) {
    event.preventDefault(); // Evitar envío del formulario por defecto

    // Obtener los elementos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cedula = document.getElementById("cedula").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var especialidad = document.getElementById("especialidad").value;


    // Expresión regular para validar la cédula (ejemplo)
    var cedulaRegex = /^[0-9]{9}$/;

    // Validar los campos
    if (nombre === "" || apellido === "" || cedula === "" || edad === "" || telefono === "" || especialidad === "" ) {
    alert("Todos los campos son obligatorios");
    } else if (!cedulaRegex.test(cedula)) {
    alert("La cédula debe tener 9 dígitos");
    } else {
        //JSON formularios
        var formularioPersonas = {};
        formularioPersonas.nombre = nombre;
        formularioPersonas.apellido = apellido;
        formularioPersonas.cedula = cedula;
        formularioPersonas.edad = edad;
        formularioPersonas.telefono = telefono;
        formularioPersonas.especialidad = especialidad;

        var formularioPersonasJSON = JSON.stringify(formularioPersonas);

        //Guardar el archivo JSON
        guardarJSONEnArchivo(formularioPersonasJSON, 'formularioPersonas.json');
    }
}

function guardarJSONEnArchivo(jsonData, nombreArchivo) {
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonData));
    enlaceDescarga.setAttribute('download', nombreArchivo);
    enlaceDescarga.style.display = 'none';
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}


