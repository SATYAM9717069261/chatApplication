const io =require('socket.io')(3000);

/**
 * every time user get in server then he came here 
 */
io.on('connection', socket => {
	/**
	 * socket.emit() send a message to user arg1=> event name , agr2=> message 
	 */
	socket.emit('chat-Message ','Hello World' );
	socket.on('send-chat-message', message=>{
		//console.log(message);
		socket.broadcast.emit('chat-message',message);

	})
});
