import path from 'path';

//Definir una ruta de archivo de ejemplo
const filePath = './data/ejemplo.txt';

console.log("--- PRUEBA MÓDULO PATH ---");

//Obtener el directorio base
const dirName= path.dirname(filePath);
console.log("Direcorio base:", dirName);

//Obtener el nombre del archivo sin extensión
const baseName= path.basename(filePath,'.txt');
console.log("Nombre del archivo:", baseName);

//Obtener la extesnsión del archivo
const extName= path.extname(filePath);
console.log("Extensión del archivo:",extName);

//Crear una ruta unida
const newPath=path.join('/user','docs','newfile.txt');
console.log("Nueva ruta:", newPath);
