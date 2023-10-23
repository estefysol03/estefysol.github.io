


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
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;
        
       
        if (nombre == "") {
            errores.push("falta el nombre")
            campo_error=nombre;S
        }
        return false;
    }
    
  
          
   
    

