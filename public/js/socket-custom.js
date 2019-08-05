
// emit para enviar  y on para escuchar
var socket = io();

socket.on('connect', function () {
    console.log('conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Se perdió la conexión con el servidor');
});

//enviar al servidor
socket.emit('enviarMensaje', {
    usuario: 'Francisco',
    mensaje: 'Hola mundo'
}, function (resp) {
        console.log('respuesta', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(resp){
        console.log('El servidor envió: ',resp);
});
