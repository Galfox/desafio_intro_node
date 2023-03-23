const { registrar, leer } = require('./operaciones.js');

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];
//console.log(operacion);

if (operacion == 'registrar'){
    argumentos.shift();
    const [nombre, edad, animal, color, enfermedad] = argumentos;
    registrar(nombre, edad, animal, color, enfermedad);

}else if (operacion == 'leer'){
    leer();
}else {
    console.log('Operacion no soportada');
}