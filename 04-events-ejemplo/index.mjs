import { EventEmitter } from 'events'; 

//Crear una instancia de EventEmitter
const emisor = new EventEmitter();

//Definir un evento personalizado
emisor.on('saludo', (nombre) => {
    console.log("--- PRUEBA MÓDULO EVENTS ---"); 
    console.log(`¡Hola, ${nombre}! El evento de saludo se ha disparado.`); 
});

//Emitir el evento 'saludo'
emisor.emit('saludo', 'Mundo');
