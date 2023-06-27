var formulario = document.querySelector("#form");

formulario.onsubmit = function (e) {
    e.preventDefault(); //Es recomendado pasarlo a default para evitar envio de formulario

    var n = formulario.elements[0];
    var e = formulario.elements[1];
    var na = formulario.elements[2];

    var nombre = n.value;
    var edad = e.value;

    var i = na.selectedIndex;
    var nacionalidad = na.options[i].value; //Se agregan ;
    console.log(nombre, edad); //;
    console.log(nacionalidad); //;

    if (nombre.length === 0) {
        n.classList.add("error"); // Agrega error si el nombre está vacío.
    }

    if (edad < 18 || edad > 120) {
        e.classList.add("error"); // Agrega error si la edad está fuera del rango.
    }

    if (nombre.length > 0 &&
        (edad >= 18 && edad <= 120)
    ) {
        agregarInvitado(nombre, edad, nacionalidad); // ; Se llama la funcion de agregar invitado
    }
};

var botonBorrar = document.createElement("button"); // Puntos y coma para las siguientes lineas
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.getElementById("lista-de-invitados").appendChild(corteLinea);//se adjuntan mejor al body para  que se muestren en vez de elemento lista
document.getElementById("lista-de-invitados").appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
    if (nacionalidad === "ar") {
        nacionalidad = "Argentina";
    } else if (nacionalidad === "mx") {
        nacionalidad = "Mexicana";
    } else if (nacionalidad === "vnzl") {
        nacionalidad = "Venezolana";
    } else if (nacionalidad === "per") {
        nacionalidad = "Peruana";
    }

    var lista = document.getElementById("lista-de-invitados");//;

    var elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista");//se quita la ed del added
    lista.appendChild(elementoLista);

    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = "Nombre: ";
    inputNombre.value = nombre;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);

    function crearElemento(descripcion, valor) {
        var spanDescripcion = document.createElement("span"); //Se cambia variable a "spanDescripcion"
        var inputValor = document.createElement("input");//Para evitar confusion
        var espacio = document.createElement("br");
        spanDescripcion.textContent = descripcion + ": ";
        inputValor.value = valor;
        elementoLista.appendChild(spanDescripcion);
        elementoLista.appendChild(inputValor);
        elementoLista.appendChild(espacio);
    }

    //crearElemento("Nombre", nombre); En el output se repite dos veces el nombre 
    crearElemento("Edad", edad);
    crearElemento("Nacionalidad", nacionalidad);

    var botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";
    botonBorrar.id = "boton-borrar";
    var corteLinea = document.createElement("br");
    elementoLista.appendChild(corteLinea);
    elementoLista.appendChild(botonBorrar);

    botonBorrar.onclick = function () {
        elementoLista.remove(); // Eliminamos el elemento de la lista al hacer clic en el botón "Eliminar invitado"
    };
}

//Se añaden correciones al añadir ";" y documentacion a lo largo de todo el doc.
