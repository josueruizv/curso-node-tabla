const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yars')

require('colors');

console.clear();

/* const [,,arg3='base=5'] = process.argv
const [,base=5] = arg3.split('=')
console.log(base); */

//const numero = 5

 crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err))