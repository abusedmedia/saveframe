# WebAppSaveFrames

[![npm version](https://badge.fury.io/js/saveframe.svg)](https://badge.fury.io/js/saveframe)


### Installation

	npm install saveframe


### Run the server

The server is a Node.js script, you can run it with:

	node server.js


### Configure the client

Include the required libraries and use the proper method to interact with the server.

Here a quick sample:

```html
<html>
	<head>
		<script src="node_modules/socket.io-client/dist/socket.io.js"></script>
		<script src="node_modules/saveframe/client.js"></script>
	</head>

	<body>
		<canvas></canvas>

		<script type="text/javascript">
			var canvas = document.querySelector('canvas')
			
			// specify the canvas you want to render to disk
			SaveFrame.init(canvas)

			// draw something on your canvas
			
			// save the frame to disk (into 'tmp/frame-0.png')
			SaveFrame.save()
		</script>
	</body>
</html>

```


### Run the client

To run the client file with the browser use a local webserver of your choice (http-server, browser-sync, python SimpleHTTPServer).



