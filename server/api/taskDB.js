var mysql = require('mysql');



var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rentcar"
});




addTask = function(){
	connection.query("SELECT * FROM users WHERE Name ="+email+" AND Password = "+password, function (error, results, fields){
	if (error) throw error;		
	});
};

connection = function(email, password){
	connection.query("SELECT * FROM users WHERE Name ="+email+" AND Password = "+password, function (error, results, fields){
		if (error) throw error;
		if (results != null) {
			return true;
		};
		return false;
	});
};

verification = function(email){
	connection.query("SELECT * FROM users WHERE Name ="+email, function (error, results, fields){
		if (error) throw error;
		if (results != null) {
			return true;
		};
		return false;
	});

};

register = function(name,email,password){
	var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "rentcar"
	});
	connection.query("INSERT INTO users SET name ='"+name+"', email='"+email+"', mdp ='"+password+"'", function (error, results, fields){
	if (error) throw error;		
	});
};


exports.verification = verification;
exports.register = register;