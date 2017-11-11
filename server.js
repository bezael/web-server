const express = require('express');
let app = express();
const port = 3080;

var middleware = {
	requireAuthenticaion: function (req, res, next){
		console.log('Private route hit!');
		next();
	},
	logger: function (req, res, next){
		let dateRequest = new Date().toString();
		console.log('Request: ' + dateRequest +' -> '+ req.method + ' '+ req.originalUrl );
		next();
	}
};

app.use(middleware.logger);

app.use(express.static(__dirname+'/public'));

app.get('/about', middleware.requireAuthenticaion,(req, res)=>{
	res.send('About us');
});

app.listen(port,()=>{
	console.log(`Express server starting  on port: ${port}`);
});