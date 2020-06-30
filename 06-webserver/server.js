const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'))
    //app.get('/', (req, res) => {
    // res.send('hello word')
    //    let salida = {
    //       nombre: 'juan',
    //        edad: 32,
    //        url: req.url
    //    }
    //    res.send(salida)
    //})

app.listen(3000)