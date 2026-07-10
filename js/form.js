// arrancamos con lo del formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    mensajeUsuario();
});

function mensajeUsuario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email =document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    let valido = true;

    // errores
    if(nombre===""){
        mostrarError("nombre","Ingrese su nombre");
        valido = false;
    }
    

    alert("¡Consulta enviada! En un momente nos contactamos con vos.");
    document.querySelector("form").reset();
}