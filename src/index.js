const express = require('express');

const app = express();
const port = 3000;

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
