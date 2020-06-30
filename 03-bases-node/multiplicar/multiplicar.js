const filesiystem = require('fs');
let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject('no es un numero');
            return;
        } else { resolve('tabla de multiplicar') }

        for (let i = 1; i <= limite; i++) {
            console.log(i * base);
        }


    })
}
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base*i}`;
        }

        filesiystem.writeFile(`tabla${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve('tabla.txt')

        });

    })

}

module.exports = {
    crearArchivo,
    listar
}