/* 

Este programa toma los valores ingresados por el usuario en el formulario,
y los agrega a una lista de invitados (si se cumplen los requerimientos de
tener un nombre y una edad minima de 18 y maxima de 120 años).

Tambien se crea un boton por cada invitado que permite eliminarlos de la lista
en caso de ser necesario

*/



//Ubicaciones de los inputs para cada elemento
const nombre = document.querySelector("#name");
const edad = document.querySelector("#age"); 
const nacionalidad = document.querySelector("#nationality");
const botonAgregarInvitado = document.querySelector("#botonAgregarInvitado");

//Ubicacion de donde se van a agregar los invitados
const listaDeInvitados = document.querySelector("#listaDeInvitados");

//Se le agrega un event listener
botonAgregarInvitado.addEventListener("click",(e)=>{
  
  if(revisarInputs()){
    agregarInvitado();
  }

  //Previene que la pagina se actualice al hacer click en el boton
  e.preventDefault();
})

  //Funcion que revisa si los inputs de nombre y edad cumplen con los requerimientos
function revisarInputs(){
  let nombreLista = nombre.value;
  let edadLista = edad.value;
  let buenosInputs = false;
  let buenNombre = false;
  let buenaEdad = false;

      //revisa si el input esta vacio y se muestra error si es igual 0
    if (nombreLista.length === 0) {
      console.log("Error de nombre");
      alert("El nombre no puede ir vacio, por favor agregue su nombre.")
      nombre.classList.add("error");
      
    }
    //se revisa si la edad es menor de 18 o mayor de 120 y se muestra error
    if (edadLista < 18 || edadLista > 120) {
      console.log("Error de edad");
      alert("Su edad debe ser mayor a 18 años y menor de 120. Por favor verifique su edad.")
      edad.classList.add("error");
      
    }

    //Si el nombre existe, y la edad es correcta, se agrega el invitado a la lista con la funcion agregarInvitado()
    
    if (nombreLista.length > 0) {
      console.log("Buen nombre");
      nombre.classList.remove("error");
      buenNombre=true;
      
    }
    if (edadLista >= 18  && edadLista <= 120) {
      console.log("Buena edad!");
      edad.classList.remove("error");
      buenaEdad=true;
      
    }
    if (buenNombre && buenaEdad) {
      console.log("Buen nombre y edad!");
      buenosInputs=true;
      
    }

    return buenosInputs;
}



// Se crea un arreglo con todos los botones que tengan la clase "delete"
let deleteButons = document.querySelectorAll(".delete")

// Funcion que toma el arreglo de botones y les agrega el event listener
// Esta funcion se llama cada vez que el usuario haga click en el boton de "Agregar invitado a la lista"
function addDeleteFunctionality(){
  //Se actualiza el arreglo de botones para agregar los botones nuevos
  deleteButons = document.querySelectorAll(".delete");

  //A cada boton se le agrega el event listener que invoca a la funcion de eliminarInvitado
  deleteButons.forEach(button=>{
    button.addEventListener("click", eliminarInvitado);
  })

}


function eliminarInvitado(){
  //Aqui this es para cada boton, se busca el div mas proximo y se elimina
  this.closest("div").remove();
}

//Funcion para agregarInvitados a la lista
function agregarInvitado(){
  // Se toman los valores actuales de los inputs y se guardan en variables
  let nombreLista = nombre.value;
  let edadLista = edad.value;
  let nacionalidadLista = nacionalidad.value;

  //Se revisa el input de nacionalidad y se cambia por algo mas descriptivo
  if (nacionalidadLista === "ar") {
    nacionalidadLista = "Argentina"
  }
  else if (nacionalidadLista === "mx") {
    nacionalidadLista = "Mexicana"
  }
  else if (nacionalidadLista === "vnzl") {
    nacionalidadLista = "Venezolana"
  }
  else {
    nacionalidadLista = "Peruana"
  }

  // Se agrega al innerHTML de listaDeInvitados un div con nombre, edad, nacionalidad y un boton para borrar al invitado
  listaDeInvitados.innerHTML += `<div class="elemento-lista">Nombre: ${nombreLista}. <br> 
  Edad: ${edadLista}. <br> 
  Nacionalidad: ${nacionalidadLista}. <br> 
  <button class="delete">Borrar invitado</button>
  </div>
 `;

 //Se llama la funcion addDeleteFunctionality() para agregar funcionalidad de borrar a cada boton que se crea
 addDeleteFunctionality();
  
};




////////////////////Abajo se encuentra el codigo viejo/////////////////////////

//var formulario = document.querySelector("#formulario");
//console.log(formulario);
//console.log(formulario.elements[0]);
//console.log(formulario.elements[1]);
//console.log(formulario.elements[2]);

// Funcion que al hacer click se registren los valores de nombre, edad y nacionalidad.

//Se guardan los valores de nombre, edad, nacionalidad
/*  
formulario.onsubmit = function(e) {

  e.prevent();
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  
  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value

  //se muestra en la consola el nombre, edad, y nacinalidad
  console.log(nombre, edad)
  console.log(nacionalidad)

  //revisa si el input esta vacio y se muestra error si es igual 0
  if (nombre.length === 0) {
    n.classList.add("error")
  }
  //se revisa si la edad es menor de 18 o mayor de 120 y se muestra error
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

  //Si el nombre existe, y la edad es correcta, se agrega el invitado a la lista con la funcion agregarInvitado()
if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
} */

/* formulario.onsubmit = function(e) {

  e.prevent();
} */

/* 

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  //Se podria cambiar por switch case
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
//Todo esto se puede sustituir por un innerHTML = `elementos`
  //Se llama al elemento con id="lista-de-invitados", pero esto no existe
var lista = document.getElementById("lista-de-invitados")

//se crea un elemento div con clase elemento-lista y se agrega a la lista
var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

//Una funcion que permite eliminar cada invitado
 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}  
*/