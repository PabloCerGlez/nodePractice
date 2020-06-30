const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
const { crearArchivo, listar } = require('./multiplicar/multiplicar')
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(lista => console.log('Listado'))
            .catch(err => console.log(err))

        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log('Archivo creado'))
            .catch(err => console.log(err))
        break;
    default:
        console.log('no es');
        break;


}
//let parametro = argv[2];
//let base = parametro.split('=')[1]