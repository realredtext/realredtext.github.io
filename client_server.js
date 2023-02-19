let openServers = {};
let universalListener = new EventWrapper();

const cSocketServer = function(address, responses) {
	var top = this;
	this.open = true;
	if(openServers[address]) throw new Error(`Server of address ${address} is already open!`);
	this.clients = {};
	
	this.broadcast = function(data) {
		for(var channel in top.clients) {
			if(!client.open) return;
			if(!top.open) return;
			var client = top.clients[channel];
			client.onmessage(data);
		};
	};
	this.close = function() {
		top.open = false;
		top.broadcast({
			kind: "close"
		});
		openServers[address] = {
			status: false
		};
	};
	this.reopen = function() {
		top.open = true;
		top.broadcast({
			kind: "reopen"
		});
		openServers[address] = {
			status: true
		};
	};
	
	openServers[address] = {
		status: true
	};
	
	this.addClient = function(client) {
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
		if(responses[kind]) socket.onmessage(responses[kind]({data, socket}));
	});
	universalListener.on("svr_dsc_"+address, (socket) => {
		if(!top.clients[socket.channel]) return;
		delete top.clients[socket.channel];
		if(responses.DISCONN) responses.DISCONN(socket);
	});
	universalListener.on("conn"+address, (socket) => {
		if(!top.clients[socket.channel]) top.addClient(socket);
		if(responses.CONN) responses.CONN(socket);
	});
};

const cWebSocket = function(address, onmessages) {
	var top = this;
	this.open = true;
	this.path = address;
	if(!openServers[address]) throw new Error(`No server with address ${address} is open!`);
	this.channel = (Math.random()*16**14).toString(16).padStart(14, 0);
		
	this.send = function(data) {
		universalListener.emit("msg"+address, {
			data: data,
			channel: top.channel
		});
	};
	
	this.close = function() {
		top.open = false;
		universalListener.emit("svr_dsc_"+address, top);
	};
	
	this.reconnect = function() {
		top.open = true;
		universalListener.emit("svr_com_"+address, top);
	};
	
	this.onmessage = function(data) {
		if(!top.open) return;
		var kind = data.kind;
		if(onmessages[kind]) {onmessages[kind](data)} else {console.log("HOLY PISS")};
	};
	
	universalListener.emit("conn"+address, top);
};