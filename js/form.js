// arrancamos con lo del formulario
const formulario = document.getElementById("formulario");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validadores = {
    nombre: (valor) => {
        if (!valor.trim()) return "Ingrese su nombre, por favor";
        if (valor.trim().length < 2) return "El nombre debe tener al menos 2 caracteres";
        return "";
    },
 
    apellido: (valor) => {
        if (!valor.trim()) return "Ingrese su apellido, por favor";
        if (valor.trim().length < 2) return "El apellido debe tener al menos 2 caracteres";
        return "";
    },
 
    email: (valor) => {
        if (!valor.trim()) return "Ingrese su email, por favor";
        if (!emailRegex.test(valor.trim())) return "E-mail inválido";
        return "";
    },
 

    asunto: (valor) => {
        if (!valor) return "Seleccione un motivo de consulta";
        return "";
    },
 
    mensaje: (valor) => {
        if (!valor.trim()) return "Ingrese su mensaje";
        if (valor.trim().length < 10) return "El mensaje debe tener al menos 10 caracteres";
        return "";
    }
};
function mostrarError(idCampo, mensaje) {
    const spanError = document.getElementById(`${idCampo}-error`);
    const input = document.getElementById(idCampo);
 
    if (spanError && input) {
        spanError.textContent = mensaje;
        input.style.borderColor = "#EF4444";
    }
}
function limpiarError(idCampo) {
    const spanError = document.getElementById(`${idCampo}-error`);
    const input = document.getElementById(idCampo);
 
    if (spanError && input) {
        spanError.textContent = "";
        input.style.borderColor = "";
    }
}
function validarCampo(fielId, value) {
    const validator = validators[fielId];
    if (validator) {
        const error = validator(value);
        if (error) {
            showError(fieldId, error);
            return false;
        } else {
            clearError(fieldId);
            return true;
        }
    }
    return true;
}


function mensajeUsuario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email =document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    let valido = true;
}
