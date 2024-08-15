//Validacion que se cumpla que ningun campo se encuentra vacio 
function validarCampos(nombre, apellido, email, password1, password2) {
    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "") {
        return "Todos los campos son obligatorios.";
    }
    return null;
}



function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}