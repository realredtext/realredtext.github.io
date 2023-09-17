let openServers = {};
let universalListener = new EventWrapper();

const cSocketServer = function(address, responses) {
	if(!new.target) throw new Error("Failed to construct 'cSocketServer': Please use the 'new' operator, this class constructor cannot be called as a function");
	var top = this;
	this.open = true;
	this.responses = responses;
	if(openServers[address]) throw new Error(`Server of address ${address} is already open!`);
	this.clients = {};
	
	this.broadcast = function(data) {
		for(var channel in top.clients) {
			var client = top.clients[channel];
			if(!client.open) return;
			if(!top.open) return;
			client.onmessage(data);
		};
	};
	this.close = function() {
		top.open = false;
		openServers[address] = {
			status: false
		};
	};
	this.reopen = function() {
		top.open = true;
		openServers[address] = {
			status: true
		};
	};
	
	openServers[address] = {
		status: true
	};
	
	this.addClient = function(client) {
		if(!(client instanceof cSocket)) return;
		if(top.clients[client.channel]) return;
		top.clients[client.channel] = {
			...client,
			sdata: {}
		};
	};
	
	universalListener.on("msg"+address, ({data, channel}) => {
		var kind = data.kind;
		var socket = top.clients[channel];
		if(!socket) return;
		if(socket.path !== address) return;
		if(!top.open) return;
		if(top.responses[kind]) socket.onmessage({
			...top.responses[kind]({data, socket}),
			kind: kind
		});
	});
	universalListener.on("svr_dsc_"+address, (socket) => {
		if(!top.clients[socket.channel]) return;
		delete top.clients[socket.channel];
	});
	universalListener.on("conn"+address, (socket) => {
		if(!top.clients[socket.channel]) top.addClient(socket);
		if(top.responses.CONN) top.responses.CONN(socket); //sdata manip
	});
};

const cSocket = function(address, onmessages) {
	if(!new.target) throw new Error("Failed to construct 'cSocket': Please use the 'new' operator, this class constructor cannot be called as a function");
	var top = this;
	this.open = true;
	this.onmessages = onmessages;
	this.path = address;
	if(!openServers[address]) throw new Error(`No server with address ${address} is open!`);
	this.channel = (Math.random()*16**14).toString(16).padStart(14, 0);
	this.localData = {}; //mirror to sdata

	this.send = function(data) {
		universalListener.emit("msg"+address, {
			data: data,
			channel: top.channel
		});
	};
	
	this.onmessage = function(data) {
		if(!top.open) return;
		var kind = data.kind;
		if(top.onmessages[kind]) top.onmessages[kind](data);
	};
	
	this.close = function() {
		top.open = false;
		universalListener.emit("svr_dsc_"+address, top);
	};
	this.reconnect = function() {
		top.open = true;
		universalListener.emit("con"+address, top);
	};
	
	universalListener.emit("conn"+address, top);
};