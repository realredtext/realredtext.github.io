const cWebSocket = function(address, onmessages) {
	var top = this;
	this.onmessages = onmessages;
	this.open = true;
	this.path = address;
	if(!(top.path in openServers)) throw new Error(`No server with address ${address} is open!`);
	this.channel = (Math.random()*16**14).toString(16).padStart(14, 0);
	
	universalListener.emit("CONN"+address, this);
		
	this.onmessage = function(data) {
		var kind = data.kind;
		if(kind in {"open":1,"reopen":0}) {
			console.log(`${kind=="open"?"Server opened.":"Server Closed."}`);
			return;
		};
		if(top.onmessages[data.kind] && top.open) onmessages[kind](data);
	};
	
	this.send = function(data) {
		universalListener.emit("MESSAGE"+address, {
			data: data,
			socket: this
		});
	};
	
	this.close = function() {
		top.open = false;
		universalListener.emit("DISCONN"+address, this);
	};
	
	this.reconnect = function() {
		top.open = true;
		universalListener.emit("CONN"+address, this);
	};
};