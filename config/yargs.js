const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Indica si la tarea esta completada'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento de la lista de tareas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}