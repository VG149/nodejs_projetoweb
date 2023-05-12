var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'test'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Conectado com sucesso!');
	}
});

module.exports = connection;