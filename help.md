## How to use cSocketServers and cWebSockets

## Socket Server
```js
	var wss = new cSocketServer("ws://test.ws/", {
		"cookie": function(data) {
			return {
				kind: "cookie",
				cookie: Math.random()
			};
		}
	});
```

## WebSocket
```js
	var socket = new cWebSocket("ws://test.ws/", {
		"cookie": function(data) {
			console.log(data.cookie);
		}
	});
	
	socket.send({
		kind: "cookie"
	});
	//(cookie in logs)
```