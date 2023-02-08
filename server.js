let openServers = {};
let universalListener = new EventWrapper();

const cSocketServer = function(address, responses) {
	var top = this;
	this.open = true;
	this.responses = responses;
	this.clients = {};
	universalListener.on(address, ({data, socket}) => {
		var kind = data.kind;
		if(socket.path !== address) return;
		if(!top.open) return;
		if(top.responses[kind]) socket.onmessage(top.responses[kind](data));
	});
	
	this.broadcast = function(data) {
		for(var channel in top.clients) {
			var client = top.clients[channel];
			client.onmessage(data);
		};
	};
	
	this.addClient = function(client) {
		top.clients[client.channel] = {
			...client,
			sdata: {}
		}
	};
	
	this.close = function() {
		top.open = false;
		top.broadcast({
			kind: "close"
		});
	};
	
	this.reopen = function() {
		top.open = true;
		top.broadcast({
			kind: "reopen"
		});
	};
	
	openServers[address] = {
		onmessage: top.onmessage,
		addClient: top.addClient
	};
};