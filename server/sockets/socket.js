const {io}= require('../server');

io.on('connection', (cliente) =>{
    console.log('cliente conectado');

    //enviar mensaje al cliente
    cliente.emit('enviarMensaje', {
        usuario:'Admin',
        mensaje: 'Welcome to the jungle'
    });

    cliente.on('disconnect', () =>{
        console.log('El cliente se desconectó')
    });


    // escuchar el cliente
    cliente.on('enviarMensaje', (mensaje, callback) =>{
        console.log(mensaje);

        if(mensaje.usuario){
            return callback({
                resp: 'Todo salió bien!'
            });
        }else{
           return   callback({
                resp: 'Error!!!, no se envió el usuario'
            });
        }

    });

    cliente.on('enviarMensajeTodos', (data, callback) =>{
        console.log(data);

        cliente.broadcast.emit('enviarMensaje',data);
        
    });

});
