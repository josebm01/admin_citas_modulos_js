//* Campos del formulario
const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

//* UI
const formulario = document.querySelector('#nueva-cita') // Formulario de nuevas citas
const contenedorCitas = document.querySelector('#citas') // Contenedor para las citas

const heading = document.querySelector('#administra')

export {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario,
    contenedorCitas,
    heading
}