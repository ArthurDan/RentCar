var mysql = require('mysql');



deleteDb = function(id){
    var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "rentcar"
  });

    connection.query('DELETE FROM user WHERE id = ' + id,  function(err, result) {
        if (error) throw error;
		if (results != null) {
			return true;
		};
		return false;
	});
};

display = function(id){
    connection.query('SELECT * FROM user WHERE id = ' + id, function(err, rows, fields) {
        if (error) throw error;
		if (results != null) {
			return true;
		};
		return false;
	});
};

connection = function(email, password){
    var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "rentcar"
  });
	connection.query("SELECT * FROM user WHERE email ="+email+" AND mdp = "+password, function (error, results, fields){
		if (error) throw error;
		if (results != null) {
			return true;
		};
		return false;
	});
};

verification = function(email){
    var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "rentcar"
  });
	connection.query("SELECT * FROM user WHERE email ="+email, function (error, results, fields){
		if (error) throw error;
		if (results != null) {
			return true;
		};
		return false;
	});
	

};


register = function(name,email,mdp){
    var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "rentcar"
  });
  connection.query("INSERT INTO user SET name ='"+name+"',email='"+email+"', Password ='"+mdp+"'", function (error, results, fields){
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
};


exports.verification = verification;
exports.register = register;