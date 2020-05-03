const express = require('express');
const app = express();
const port = 3000;
const getRecommendation = require('./index.js').getRecommendation;

app.get('/', (req, res) => {
	res.send('Hello World');
});


app.get('/ventilation-guide', (req, res) => {
	let tempIn = Number(req.query.tempIn.replace(",","."));
    let humIn = Number(req.query.humIn.replace(",","."));
    let tempOut = Number(req.query.tempOut.replace(",","."));
	let humOut = Number(req.query.humOut.replace(",","."));

	res.send(getRecommendation(tempIn, humIn, tempOut, humOut));
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));