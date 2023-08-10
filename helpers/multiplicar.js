const fs = require('node:fs');
const colors = require('colors')

const crearArchivo = async(base = 5, listar=false, limite = 10) => {

    try {         
        let salida = '';
        let consola = '';
        
        for(let i=1;i<=limite;i++){
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`);
            salida += (`${base} x ${i} = ${base*i}\n`)
        }

        if(listar){
            console.log('=================='.green);
            console.log(colors.green('   Tabla del'),colors.blue(base));
            console.log('=================='.green);
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return(`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}