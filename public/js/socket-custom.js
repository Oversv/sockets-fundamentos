//socket.on     -Escuchar información-
//socket.emit   -Emitir información-

var socket = io()

socket.on('connect', function(){
    console.log('Conectado al servidor');
})

socket.on('disconnect', function(){
    console.log('Conexión con el servidor perdida');
})

socket.emit('enviarMensaje', {
    usuario: 'Alberto',
    mensaje: 'Hola Mundo'

}, function(resp){
    console.log('Respuesta servidor: ',resp);
})

socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
})