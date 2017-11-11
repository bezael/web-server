let middleware = {
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
module.exports=middleware;