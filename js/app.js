// boton para enviar datos 

let button = document.getElementById("btn-enviar")

button.addEventListener('click', function () {
    //alert('Enviado')

    let inputNombre = document.getElementById('input-nombre');
    let inputCorreo = document.getElementById('input-correo');
    if (inputNombre.value == '') {
        alert('Error: El nombre está vacio')
    } else if (inputCorreo.value == '') {
        alert('Error: El correo está vacio')
    }

})

//busca el boton de limpiar
let buttonlimpiarDat = document.getElementById("btn-limpiarDat")


buttonlimpiarDat.addEventListener('click', function () {
    alert('Desea limpiar los datos?')

    //busca el input nombre
    let inputNombre = document.getElementById('input-nombre');
    inputNombre.value = '';

    //busca el input correo
    let inputCorreo = document.getElementById('input-correo');
    inputCorreo.value = '';

})