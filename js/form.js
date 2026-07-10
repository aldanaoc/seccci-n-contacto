// arrancamos con lo del formulario
const formulario = document.getElementById("formulario");


function mensajeUsuario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email =document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
        if (nombre === "" || apellido === "" || email === "" || telefono === "" || asunto === "" || mensaje === "") {
            alert("Complete todos los campos, por favor.");
            return;
        }
    alert("¡Consulta enviada! En un momente nos contactamos con vos.");
    document.querySelector("form").reset();
}