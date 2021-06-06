/** 
 * all client side javaScript is Placed
 */
const socket = io('http://localhost:3000') //get server side port 
const messageform=document.getElementById('send-container');
const messageinput=document.getElementById('message-input');

socket.on('chat-Message', data =>{
	/**
	 * chat-message is event which we define in socket.js
	 * if chat-message event is triggred then data funtion body executed
	 * data store Hello World which pass from socket.js
	 */
	console.log(data);
})

messageform.addEventListener('submit', e => {
	//disable refresh page on submit
	//if it's enable then data losed
	e.preventDefault();
	const message=messageinput.value;
	socket.emit('send-chat-message',message);
	messageinput.value='';
})
