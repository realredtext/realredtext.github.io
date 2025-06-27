var keys = Object.keys;
var values = Object.values;

function EventWrapper() {
    let top = this;
	this.events = {};
	this.on = function(type, cb) {
		if(typeof cb !== "function") throw new TypeError("Callback must be a function!");
		type += "";
		type = type.toLowerCase();
		if(!(type in top.events)) top.events[type] = {};
		
		top.events[type][Math.random().toString().slice(2)] = cb;
	};
	
	this.emit = function(kind, ...params) {
		kind = kind.toLowerCase();
		if(!(kind in top.events)) throw `No events of type "${kind}"`;
		
		values(top.events[kind]).forEach((e) => {e(...params)});
	};
	
	this.off = function(type, id) { //id is random number
		if(!top.events[type]) throw `No events of type "${type}"`;
		if(!top.events[type][id]) throw `That function is not in the "${type}" events!`
		
		let eventsOfType = top.events[type];
		delete eventsOfType[id];
		top.events[type] = eventsOfType;
	};
	
	this.hasEvents = function(type) {
		return type.toLowerCase in top.events;
	};
	
	return this;
};