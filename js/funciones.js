import UI from "./classes/UI.js"
import Citas from './classes/Citas.js'

import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario,
} from "./selectores.js"

//* Instancia de la clase
const administrarCitas = new Citas()
//* Pasando el arreglo de citas para validar si hay o no hay citas agregadas
const ui = new UI({ citas: administrarCitas.citas })

let editando = false

//* Objeto principal con la información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '', 
    hora: '',
    sintomas: ''
}


//* FUNCIONES
//? Agrega datos escritos en el formulario al objeto de cita
export const datosCita = (e) => {
    //* Buscando la propiedad del objeto por medio del name del formulario y asignandole el valor escrito dentro del formulario
    citaObj[e.target.name] = e.target.value
}

//? Valida y agrega nueva cita a la clase de Citas
export const nuevaCita = (e) => {

    e.preventDefault()

    //* Extraer información del objeto de cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj

    // Validar que los inputs tengan información
    if ( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ){
        ui.mostrarAlerta('Todos los campos son obligatorios', 'error')
        return
    }

    // Validación para identifica si es nueva o actualizar cita
    if ( editando ) {
        // console.log('Modo edición')

        //* Mensaje de agreado correctamente
        ui.mostrarAlerta('Se editó correctamente la cita')

        //* Pasar el objeto de la cita a edición
        administrarCitas.editarCita({ ...citaObj })

        //* Regresando el texto del botón a su título original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita'
        
        //* Quitar modo edición
        editando = false

    } else {
        // console.log('Modo nueva cita')

        //* Generar id
        citaObj.id = Date.now()
    
        /**
         * Creando nueva cita por medio de la función que tiene la instancia la Clase Citas
         * Pasando una copia del objeto y no todo porque se agrega el último la cantidad de registros que tuviera
         */
        administrarCitas.agregarCita({ ...citaObj })

        //* Mensaje de agreado correctamente
        ui.mostrarAlerta('Se agregó correctamente la cita')
    }


    // Reiniciar el objeto para la validación
    reiniciarObj()

    // Reiniciar formulario
    formulario.reset()

    /**
     * Mostrar HTML de la cita creada
     * Se le pasa el arreglo de las citas 
     */
    ui.imprimirCitas(administrarCitas)

}

//?  Reinicia valores del formulario 
export const reiniciarObj = () => {
    citaObj.mascota = ''
    citaObj.propietario = ''
    citaObj.telefono = ''
    citaObj.fecha = ''
    citaObj.hora = ''
    citaObj.sintomas = ''
}

//? Eliminar cita
export const eliminarCita = (id) => {
    
    //* Limpiar formularios
    formulario.reset()

    //* Eliminar cita
    administrarCitas.eliminarCita(id)

    //* Muestra un mensaje
    ui.mostrarAlerta('La cita se eliminó correctamente')

    //* Refresca las citas
    ui.imprimirCitas(administrarCitas)

}

//? Cargar los datos y el modo edición
export const cargarEdicion = ( cita ) => {
    // Extrayendo las propiedades del objeto
    const { mascota, propietario, telefono, fecha, hora, sintomas } = cita

    // Llenar los inputs
    mascotaInput.value = mascota
    propietarioInput.value = propietario
    telefonoInput.value = telefono
    fechaInput.value = fecha
    horaInput.value = hora
    sintomasInput.value = sintomas

    // Llenar valores en el objeto
    citaObj.mascota = mascota
    citaObj.propietario = propietario
    citaObj.telefono = telefono
    citaObj.fecha = fecha
    citaObj.hora = hora
    citaObj.sintomas = sintomas


    // Cambiar el texto del botón cuando se quiera editar
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios'

    editando = true

}


