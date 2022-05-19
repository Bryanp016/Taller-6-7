

function validar(){
   const cedula = document.getElementById("cedula").value;
   const nombre = document.getElementById("nombres").value;
   const apellido = document.getElementById("apellidos").value;
   const direccion = document.getElementById("direcciones").value;
   const telefono = document.getElementById("telefonos").value;
   const correo = document.getElementById("correo").value;

   
    if(cedula == null || cedula.length == 0){
       alert("*El campo [Cedula] no puede estar vacío*");
       console.log("Error campo de cedula vacío");

       if(cedula.length < 10){
        alert("Debe ingresar 10 digitos");
        return false;
       }
       return false;
    }

    if(isNaN(cedula)){
        alert("*El campo [Cedula] debe ser numérico*");
        return false;
    }

    if(nombre == null || nombre.length == 0){
        alert("*El campo [Nombre] no puede estar vacío*");
        console.log("Error campo de nombre vacío");
        return false;
    }
 
     if(!isNaN(nombre)){
         alert("*El campo [Nombre] no debe ser numérico*");
         return false;
     }

    if(apellido == null || apellido.length == 0){
        alert("*El campo [Apellido] no puede estar vacío*");
        console.log("Error campo de Apellido vacío");
        return false;
    }
 
     if(!isNaN(apellido)){
         alert("*El campo [Apellido] no debe ser numérico*");
         return false;
     }

    if(direccion == null || direccion.length == 0){
        alert("*El campo [Direccion] no puede estar vacío*");
        console.log("Error campo de Direccion vacío");
        return false;
    }

     if(telefono == null || telefono.length == 0){
        alert("*El campo [telefono] no puede estar vacío*");
        console.log("Error campo de telefono vacío");
        if(telefono.length < 10){
            alert("Debe ingresar 10 digitos");
            return false;
           }
        return false;
    }
 
     if(isNaN(telefono)){
         alert("*El campo [telefono] no debe ser numérico*");
         return false;
     }

        if(correo == null || correo.length == 0){
            alert("*El campo [Correo] no puede estar vacío*");
            console.log("Error campo de Correo vacío");

            if(!(/\w+([-+.’]\w+)*@\w+([-.]\w+)*\.\w+([- .]\w+)/.test(correo))){
                alert("Formato de correo no valido");
                return false; 
                }
            return false;
        }

     
    alert("¡El formulario fue enviado con exito!");
    return true;

   }
