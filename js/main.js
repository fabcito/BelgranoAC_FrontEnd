function validateForm() {

    //Variables
    let registroNombre = document.forms["Registro"]["Nombre"].value;
    let registroApellido = document.forms["Registro"]["Apellido"].value;
    let registroEmail = document.forms["Registro"]["Mail"].value;
    let registroComentarios = document.forms["Registro"]["Comentarios"].value;

    //Nombre
    if (registroNombre == "") {
        alert("Por favor coloque su nombre");
        return false;
    }

    //Apellido
    if (registroApellido == "") {
        alert("Por favor coloque su apellido");
        return false;
    }

    //Email
    if (registroEmail == "") {
        alert("Por favor coloque su dirección de correo electrónico");
        return false;
    }

    //Comentarios
    if (registroComentarios == "") {
        alert("Por favor deje una pregunta, sugerencia o comentario");
        return false;
    }
    return true;
}
function envioForm(event) {
    event.preventDefault();

    if (validateForm()) {
        alert("¡El formulario fué enviado con éxito! ¡Gracias por tu colaboración!");
        document.getElementById("Registro").reset();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Registro").addEventListener("submit", envioForm);
});
