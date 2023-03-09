function EventWrapper() {
    let top = this;
	this.events = {};
	this.on = function(type, cb) {
		if(typeof cb !== "function") throw new TypeError("Callback must be a function!");
		type += "";
		type = type.toLowerCase();
		if(!(type in top.events)) top.events[type] = [];
		
		top.events[type].push(cb);
	};
	
	this.emit = function(kind, data) {
		kind = kind.toLowerCase();
		if(!(kind in top.events)) return `No events of type "${kind}"`;
		
		top.events[kind].forEach((e) => {e(data)});
	};
	
	this.off = function(type, cb) {
		if(!top.events[type]) return `No events of type "${type}"`;
		if(top.events[type].indexOf(cb) === -1) return `That function is not in the "${type}" events!`
		
		let eventsOfType = top.events[type];
		eventsOfType.splice(eventsOfType.indexOf(cb), 1);
		top.events[type] = eventsOfType;
	};
	
	this.hasEvents = function(type) {
		return type.toLowerCase in top.events;
	};
	
	return this;
};