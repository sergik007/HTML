console.log('Connected successfully! Use port: 3002');
var flash = require('connect-flash');
var express = require('express');
const path = require('path');
var server = express();
var bodyParser=require('body-parser');
var cookieParser = require('cookie-parser');

const PORT = 3002;

server.use(cookieParser());
var auth = require('./js/auth');

server.use('/', express.static('../client/authorization'));
server.use('/mainPage', express.static('../client/authorization/mainPage/'));
server.use('/history', express.static('../client/authorization/historyPage/'));
server.use('/shows', express.static('../client/authorization/showsPage/'));
server.use('/aboutShow', express.static('../client/authorization/showsPage/'));

server.use('/check', bodyParser.urlencoded({
    extended: true
}));
server.use('/filmsPage', express.static('../client/authorization/filmsPage'));

server.listen(PORT);
server.get('/', function(req, res) { 
	res.sendFile('C:/TestWork/client/authorization/html/index.html');
});

server.post('/check', function(req, res, next) {
    
	var login = req.body.login;
	var password = req.body.password;
	var newUser = req.body.new;
	
	if (newUser){
		var result = auth.register(login, password);

		if (result.error) {
			res.status(404);
    		res.sendFile('C:/TestWork/client/authorization/html/index.html');
			return;
		}
	} else {
		var result = auth.login(login, password);

		if (result.error) {
			res.status(401);
			res.sendFile('C:/TestWork/client/authorization/html/index.html');
			return;
		}
	}
	res.cookie('token', result.data.token);
	res.redirect('/mainPage/');

	return;
});

server.get('/mainPage', auth.isAuthenticated, function(req, res, next) { 
	res.sendFile('C:/TestWork/client/authorization/mainPage/html/index.html');
	return;
});

server.get('/shows', function(req, res) { 
	res.sendFile('C:/TestWork/client/authorization/showsPage/html/index.html');
});

server.get('/aboutShow', function(req, res) { 
	res.sendFile('C:/TestWork/client/authorization/showsPage/html/index1.html');
});

server.get('/information/:index', function(req, res) {
	console.log(req.params);
	res.json({success:true});
});

server.get('/filmsPage', function(req, res) { 
	res.sendFile('C:/TestWork/client/authorization/filmsPage/html/index.html');
});

server.get('/history', function(req, res) { 
	res.sendFile('C:/TestWork/client/authorization/historyPage/html/index.html');
});