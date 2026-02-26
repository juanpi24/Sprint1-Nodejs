import fs from 'fs';

//Leer un archivo de manera asíncrona
fs.readFile('./data/ejemplo.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log("--- PRUEBA MÓDULO FS ---");
    console.log("Contenido del archivo:", data);

});
    //Escribir en un nuevo archivo
    fs.writeFile('./data/nuevo.txt', 'Contenido nuevo', (err) => {
        if (err) throw err;
        console.log("¡Archivo 'nuevo.txt' creado con éxito!");
});

//Renombrar un archivo
fs.rename('./data/nuevo.txt', './data/nuevo-renombrado.txt', (err) => {
        if (err) throw err;
        console.log("¡Archivo 'nuevo.txt' renombrado con éxito!");
});
