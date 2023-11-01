

//Carrousel
 
        var images = [
            "img/imagen1.jpg",
            "img/imagen2.jpg",
            "img/imagen3.jpg",
            "img/imagen4.jpg",
            "img/imagen5.jpg",
            "img/imagen6.jpg",
            "img/imagen7.jpg",
            "img/imagen8.jpg",
            "img/imagen9.jpg"
        ];

        var currentIndex = 0;
        var imageList = document.getElementById("image-list");

        // Funcion para mostrar la imagen actual.
        function showImage() { 
            imageList.innerHTML = "<li><img src='" + images[currentIndex] + "' alt='Imagen " + (currentIndex + 1) + "'></li>";
        }

        // Funcion para avanzar a la siguiente imagen
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length; //indice actual +1.
            showImage();
        }

        // Funcion para retroceder a la imagen anterior
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage();
        }

        // Mostrar la primera imagen al cargar la pagina
        showImage();

//FORMULARIO.


function validarFormulario() {
    const envioForm = document.getElementById("envioForm");
    const ltaErrores = document.getElementById("ltaErrores");

//traigo los valores,
    let f_nombre = document.getElementById("f_nombre");
    let nombre = f_nombre.value.trim();
    let f_apellido = document.getElementById("f_apellido");
    let apellido = f_apellido.value.trim();
    let f_email = document.getElementById("f_email");
    let email = f_email.value.trim();
    let f_mensaje = document.getElementById("f_mensaje");
    let mensaje = f_mensaje.value.trim();

    let errores = []; //funcion en donde marca si la lista esta vacia no hay errores.
    let campo_error = null;  //campo donde marca el error.
    let frm = document.getElementById("frm");
    

    for (v of frm.children) {
        v.classList.remove("error");
    }


    //valido cada campo.
    if (nombre == "") {     //si no cumple conlo que pide marca error.
        errores.push("Falta el nombre");
        campo_error = f_nombre;
        f_nombre.classList.add("error");
    }
    else if (nombre.length > f_nombre.maxLength) {
        errores.push("El nombre excede la longitud maxima permitida.");
        campo_error = f_nombre;
        f_nombre.classList.add("error");
    }

    if (apellido == "") {     //si no cumple con lo que pide marca error.
        errores.push("Falta el apellido");
        campo_error = f_nombre;
        f_apellido.classList.add("error");
    }

    if (email == "") {
        errores.push("Falta el email");
        campo_error = f_email;
        f_email.classList.add("error");
    } else {
        // Utilizamos una expresión regular para validar el formato del correo electrónico.
        const emailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailValido.test(email)) {
            errores.push("El email no es válido");
            campo_error = f_email;
            f_email.classList.add("error");
        }

    }


    if (mensaje == "") {
        errores.push("Falta el mensaje");
        campo_error = f_mensaje;
        f_mensaje.classList.add("error");
    }

    ltaErrores.innerHTML = ""; //a toda la lista de errores lo piso.

    if (errores.length > 0) {  //aca si hay error,creo un (li)le seteo el texto
        for (let i = 0; i < errores.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = errores[i];
            ltaErrores.appendChild(li);
        }
        if (campo_error != null) {
            campo_error.focus();
        }
        return false;
    }



    let mje = `Hola ${nombre} ${apellido} Recibimos desde el correo ${email}, tu Mensaje! Gracias por tus Palabras! te esperamos Pronto!!`;
    envioForm.innerHTML = mje;
   

    if (errores.length === 0) {
        // Limpio los campos despues de enviar el formulario
        f_nombre.value = "";
        f_apellido.value = "";
        f_email.value = "";
        f_mensaje.value = "";
    }

    return false;

}
          




    
    
  
          
   
    

