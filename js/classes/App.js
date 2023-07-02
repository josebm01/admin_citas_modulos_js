import { datosCita, nuevaCita } from "../funciones.js"
import { fechaInput, formulario, horaInput, mascotaInput, propietarioInput, sintomasInput, telefonoInput } from "../selectores.js"

class App {
    constructor(){
        // Inicializa 
        this.initApp()
    }

    initApp(){
        //* Registrar eventos
        // Escuchadores de los input del formulario
        mascotaInput.addEventListener('input', datosCita)
        propietarioInput.addEventListener('input', datosCita)
        telefonoInput.addEventListener('input', datosCita)
        fechaInput.addEventListener('input', datosCita)
        horaInput.addEventListener('input', datosCita)
        sintomasInput.addEventListener('input', datosCita)
    
        // Escuchador en el botón de Crear Cita - formulario de nuevas citas
        formulario.addEventListener('submit', nuevaCita)
    }
}


export default App