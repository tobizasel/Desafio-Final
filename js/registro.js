
let numUsuario = 1;

function registrarse(){
    
    
    const nombreUsuario = document.querySelector("#form__nombreUsuario")
    const nombreUsuarioValor = nombreUsuario.value;

    const mail = document.querySelector("#form__mail")
    const mailValor = mail.value;

    const contraseña = document.querySelector("#form__contraseña")
    const contraseñaValor = contraseña.value;

    const usuario = {nombre: nombreUsuarioValor, email: mailValor, contraseña: contraseñaValor}

    if (nombreUsuarioValor.trim() && mailValor.trim() && contraseñaValor.trim()){
        usuarioJSON = JSON.stringify(usuario);
        localStorage.setItem('usuario ' + numUsuario, usuarioJSON);
        numUsuario++;
    }else{
        alert("Debes completar todos los campos")
    }

}


