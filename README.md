# WebAppSaveFrames


### Installation

	npm install


### Run the server

The server is a simple Node.js script that run an Express application with a socket connection:

	node server.js


### Configure the client

- Include the 'client.js' file
- Init the client connector with window.initSaveFrame(canvas) passing the 'canvas' element you want to render
- Call within the main loop function the method ```window.saveFrame()``` to save each frame, you may put it typically at the end of the drawing routine.
- The .png frames are saved in a ```tmp``` folder within the script folder

Here a tiny sample

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
			SaveFrame.init(canvas)

			// draw something on your canvas
			SaveFrame.save()
		</script>
	</body>
</html>

```


### Run the client

To run the client file with the browser use a local webserver of your choice (http-server, browser-sync, python SimpleHTTPServer).



## API

### window.initSaveFrame

Pass the following arguments:

- ```canvas``` element ( e.g. with document.querySelector('canvas') or $('canvas')[0] )