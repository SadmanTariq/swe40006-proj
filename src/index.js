const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
	app.use(morgan('combined', {  // Logs HTTP requests to /var/log/server-access.log
		stream: fs.createWriteStream(
			"/var/log/server-access.log",
			{ flags: 'a' }
		)
	}));
}

app.use(express.static('public'));

app.get('/api/add/:a/:b', (req, res) => {
	// This is a simple endpoint that adds two numbers

	const a = parseInt(req.params.a);
	const b = parseInt(req.params.b);
	res.send({ result: a + b });
});

// Start the server, but only if not running tests
if (process.env.NODE_ENV !== 'test') {
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
	});
}

module.exports = app;
