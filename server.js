const express = require('express');
const app = express();
const port = 3000;
const getRecommendation = require('./index.js').getRecommendation;

app.get('/', (req, res) => {
	res.send('Hello World');
});


app.get('/ventilation-guide', (req, res) => {
	let tempIn = Number(req.query.tempIn);
    let humIn = Number(req.query.humIn);
    let tempOut = Number(req.query.tempOut);
	let humOut = Number(req.query.humOut);

	res.send(getRecommendation(tempIn, humIn, tempOut, humOut));
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));