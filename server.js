const express = require('express');
let app = express();
const port = process.env.PORT  || 3000;
var middleware = require('./modules/middleware.js');

app.use(middleware.logger);

app.use(express.static(__dirname+'/public'));

app.get('/about', middleware.requireAuthenticaion,(req, res)=>{
	res.send('About us!');
});

app.listen(port,()=>{
	console.log(`Express server starting  on port: ${port}`);
});