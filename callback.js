let getUsuarioById = (id, callback) => {
    let usuario = {
        name: 'fernando',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id}`)
    } else {
        callback(null, usuario);


    }
}


getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err)
    }
    console.log(`el usuario ${usuario}`)
})