let empleados = [{
    id: 1,
    nombre: 'Juan'
}, {
    id: 2,
    nombre: 'pablo'
}, {
    id: 3,
    nombre: 'juan'
}]


let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 3000
}]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`No exite un empleado con el id ${id}`)

    } else {
        callback(null, empleadoDB)

    }
}
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`Salario no encontrado`)

    } else {
        let respuesta = {
            id: salarioDB.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario

        }
        callback(null, respuesta)

    }

}


getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err)
    }
    console.log(empleado)
    getSalario(empleado, (err, salario) => {
        if (err) {
            console.log(err)
        }
        console.log(salario)
    })
})