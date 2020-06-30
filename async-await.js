let getNombre = async() => {
    let nombre = await getNombre();

}




getNombre().then(nombre => {
        console.log(nombre)
    })
    .catch(e => {
        console.log('error de async', e)
    })