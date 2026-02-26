
import http from 'http'; 
const PORT=3000;

//Crear un servidor HTTP básico
const server = http.createServer((req, res) => { 
    res.statusCode = 200; // 
       
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');  
    
    res.end('¡Servidor funcionando! Tarea del Sprint 2 completada con éxito.'); 
});

//Configurar el servidor para que escuche en el puerto 3000
server.listen(PORT,'127.0.0.1', () => {
    console.log("--- MÓDULO 05: HTTP ---");
  
    console.log(`Servidor corriendo en: http://127.0.0.1:${PORT}/`); 

    console.log(    );
    console.log('Para salir del servidor presione Ctrl+C');
});

