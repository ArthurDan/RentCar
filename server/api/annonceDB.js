var mysql = require('mysql');

connec = function(){
    var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "rentcar"
  });
}

addAnnonce = function(marque,user_id,ville,adresse){
    connec();
    connection.query("INSERT INTO annonce SET marque ='"+marque+"',user_id='"+user_id+"', ville ='"+ville+"',modele ='"+modele+"'adresse ='"+adresse+"'", function (error, results, fields){
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
}

delAnnonce = function(id){
connection.query('DELETE FROM annonce WHERE id = ' + id,  function(err, result) {
    if (error) throw error;
    if (results != null) {
        return true;
    };
    return false;
});

display = function(id, user_id){
    connection.query("SELECT * FROM annonce WHERE id = '" + id+"'user_id='"+user_id+"'", function(err, rows, fields) {
        if (error) throw error;
		if (results != null) {
			return true;
		};
		return false;
	});
};
};