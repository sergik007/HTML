var fs = require('fs');
var md5 = require('md5');

function login(login,password)
{
	login=login;
	password=password;

	var users = getData();
	var result = null;

	users.forEach(function(user) {
		if (user.login === login) {
			if (user.password === password) {
				result = {
					error: false,
					data: {
						token: generateToken(user)
					}
				}
			} else {
				result = {
					error: true,
					msg: 'Wrong password.'
				}
			}
		}
	});

	if (!result) {
		return {
			error: true,
			msg: 'User not found.'
		}	
	} else {
		return result;
	}
}

function register(login,password) {
	login=login;
	password=password;

	var users = getData();
	var i;
	for (i = 0; i < users.length; ++i) {
		var user = users[i];
		if (user.login === login) {
			return {
				error: true,
				msg: 'User with such login already exists.'
			}
		}
	}

	users.push({
		login:login,
		password: password
	});

	saveData(users);

	return {
		error:false,
		data: {
			token: generateToken({login: login, password: password})
		}
	}
}

function getData() {
	data = JSON.parse(fs.readFileSync('./data/users.json'));
	return data;
}

function saveData(data) {
	fs.writeFile('./data/users.json', JSON.stringify(data));
}

function isAuthenticated(req, res, next) {

	if (req.cookies['token']) {

		var users = getData();
		
		var i;
		for ( i = 0; i < users.length; ++i) {
			var user = users[i];

			if (generateToken(user) === req.cookies['token']) {
				next();
				return;
			};
		}

		res.status(401);
		res.redirect('C:/TestWork/client/authorization/html/index.html');
		return;
	} else {
		res.status(401);
		res.redirect('C:/TestWork/client/authorization/html/index.html');

		return;
	}
}

function generateToken(user) {
	return md5(user.login + user.password);
}

module.exports.login = login;
module.exports.register = register;
module.exports.isAuthenticated = isAuthenticated;