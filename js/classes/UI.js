import { cargarEdicion, eliminarCita } from "../funciones.js"
import { contenedorCitas, heading } from "../selectores.js"


class UI {
    
    constructor({ citas }) {
        this.textoHeading(citas)
    }


    //? Se definen funciones globales de la clase     
    mostrarAlerta( mensaje, tipo ){
        // Creando div 
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12')

        // Agregar clase en base al tipo de mensaje
        if ( tipo === 'error' ){
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        // Mensaje de error
        divMensaje.textContent = mensaje

        // Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'))

        // Quitar alerta después de 5 segundos
        setTimeout(() => {
            divMensaje.remove()
        }, 2000);
    }


    // Desestructurando el argumento citas del objeto recibido 
    imprimirCitas({ citas }) {

        this.limpiarHTML()
        
        citas.forEach( cita => {
            const { id, mascota, propietario, telefono, fecha, hora, sintomas } = cita

            const divCita = document.createElement('div')
            divCita.classList.add('cita', 'p-3')
            divCita.dataset.id = id // Atributo personalizado

            //? Scripting de los elementos de la cita
            // - Mascota
            const mascotaParrafo = document.createElement('h2')
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder')
            mascotaParrafo.textContent = mascota

            // - Propietario
            const PropietarioParrafo = document.createElement('p')
            PropietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`

            // - Teléfono
            const TelefonoParrafo = document.createElement('p')
            TelefonoParrafo.innerHTML = `<span class="font-weight-bolder">Telefono: </span> ${telefono}`
            
            // - Fecha
            const FechaParrafo = document.createElement('p')
            FechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`
    
            // - Hora
            const HoraParrafo = document.createElement('p')
            HoraParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`
            
            // - Sintomas
            const SintomasParrafo = document.createElement('p')
            SintomasParrafo.innerHTML = `<span class="font-weight-bolder">Sintomas: </span> ${sintomas}`


            //? Botón para eliminar 
            const btnEliminar = document.createElement('button')
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2')
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`
            btnEliminar.onclick = () => eliminarCita(id)


            //? Añade botón para editar
            const btnEditar = document.createElement('button')
            btnEditar.classList.add('btn', 'btn-info')
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>`
            btnEditar.onclick = () => cargarEdicion(cita)


            //? Agregar los párrafos al divCita 
            divCita.appendChild(mascotaParrafo)
            divCita.appendChild(PropietarioParrafo)
            divCita.appendChild(TelefonoParrafo)
            divCita.appendChild(FechaParrafo)
            divCita.appendChild(HoraParrafo)
            divCita.appendChild(SintomasParrafo)
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            //? Agregar citas (con los elementos agregados anteriormente) al HTML
            contenedorCitas.appendChild(divCita)

        })

    }


    textoHeading( citas ) {
        if ( citas.length > 0 ) {
            heading.textContent = 'Administra tus Citaaaaas'
        } else {
            heading.textContent = 'No hay citas, comienza creando una'
        }
    }



    //* Remueve lo que contenga el contenedor para mostrar solo la cita agredada y no duplicar otra
    limpiarHTML() {
        while( contenedorCitas.firstChild ){
            // Eliminando cada uno de los hijos
            contenedorCitas.removeChild( contenedorCitas.firstChild )
        }
    } 

}



export default UI