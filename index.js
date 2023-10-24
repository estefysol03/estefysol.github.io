


   // Carrusel

   let currentIndex = 0;  //indice actual.

        function showImage(index) {   //nos muestra las imagenes.
            const imageList = document.getElementById("image-list");
            imageList.style.transform = `translateX(-${index * 400}px)`; //trae la lista y su estilo.
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % 9;   
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + 9) % 9; // 9 Cantidad de imagenes que tengo.
            showImage(currentIndex);
        }
 


//FORMULARIO.


function validarFormulario() {
    const envioForm = document.getElementById("envioForm");
    const ltaErrores = document.getElementById("ltaErrores");

//traigo los valores,
    let f_nombre = document.getElementById("f_nombre");
    let nombre = f_nombre.value.trim();
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

    if (email == "") {
        errores.push("Falta el email");
        campo_error = f_email;
        f_email.classList.add("error");
    }

    if (mensaje == "") {
        errores.push("Falta el mensaje");
        campo_error = f_mensaje;
        f_mensaje.classList.add("error");
    }

    ltaErrores.innerHTML = ""; //a todo lista errores lo piso.

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
    let mje = `Hola ${nombre} ${email}, ¡Recibimos tu MENSAJE ${mensaje}!`;
    envioForm.innerHTML = mje;
    return false;
}
          




    
    
  
          
   
    

