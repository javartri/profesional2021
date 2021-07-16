

( function () {
    // buscar los inputs 
    var nombre = document.getElementById('nombre')
    var email = document.getElementById('email')
    var tel = document.getElementById('tel')
    var edad = document.getElementById('edad')
    var btnGuardar = document.getElementById('guardar')
    

    // validar formulario (No estén vacios los campos)
    function formularioValido (name, mail, phone, age) {
        if (name === '' || mail === '' || phone === '' || age === '') {
            return false
        } else {
            return true
        }
    }

    // que va hacer mi btn cuando lo clickeen 
    

    // escuchar cuando alguien le de clikc
    btnGuardar.addEventListener('click', function () {
        //alert('Guardaste la informacion')
        console.log(nombre.value)
        console.log(email.value)
        console.log(tel.value)
        console.log(edad.value)

        var x = formularioValido(nombre.value, email.value, tel.value, edad.value)

        if (x) {
            alert('Formulario completo')
        } else {
            alert('Complete el formulario')
        }
    })

}) ()