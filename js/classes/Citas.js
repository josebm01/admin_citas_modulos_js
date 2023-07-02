// Classes
class Citas {
    constructor(){
        this.citas = []
    }

    agregarCita( cita ) {
        // Se agrega una copia del arreglo anterior y la nueva cita
        this.citas = [ ...this.citas, cita ]
        console.log(this.citas)
    }

    eliminarCita( id ) {
        // Filtrando el arreglo para mostrar todos menos el id de la cita que se quiere borrar
        this.citas = this.citas.filter( cita => cita.id !== id )
    }

    editarCita( citaActualizada ) {
        // Asignando el valor
        // Si corresponde al id se sobreescribe sobre ese registro, sino retorna la cita actual para mantener las que se tengan
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita )
    }
}


export default Citas
