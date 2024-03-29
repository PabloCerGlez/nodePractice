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


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No exite un empleado con el id ${id}`)

        } else {
            resolve(empleadoDB)
        }
    })

}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`Salario no encontrado`)

        } else {

            resolve({
                id: salarioDB.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario

            })


        }
    })
}





getEmpleado(23).then(empleado => {

        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de  ${resp.salario}`)
    })
    .catch(err => {
        console.log(err)
    })