const fs = require('fs');
const nombre_archivo = 'citas.json';

const registrar = (nombre, edad, animal, color, enfermedad) => {
    let cita = {
                nombre: nombre, 
                edad: edad, 
                animal: animal,
                color: color, 
                enfermedad: enfermedad
    };
    let citas = fs.readFileSync(nombre_archivo, 'utf-8');
    citas = JSON.parse(citas);
    citas.push(cita);
    fs.writeFileSync(nombre_archivo, JSON.stringify(citas));
};

const leer = () => {
    let citas = fs.readFileSync(nombre_archivo, 'utf-8');
    let contador = 1;

    JSON.parse(citas).forEach(cita => {
        let texto = `
        💊  Nombre: ${cita['nombre']}
        💊  Edad: ${cita['edad']}
        💊  Animal: ${cita['animal']}
        💊  Color: ${cita['color']}
        💊  Enfermedad: ${cita['enfermedad']}
        
        `;
        console.log(`🩼  Paciente ${contador}`);
        console.log(texto);
        contador++;
    });


    console.log(citas);
};

module.exports = {registrar, leer};