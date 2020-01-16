var mysql = require("mysql");

var connection = mysql.createConnection({
  host:"locathost",
  port:3306,
  user:"root",
  password:"Passw0rd",
  database:"burgers_db"
})

connection.connect(function(){
if(err) {

  console.log(
     err.stack
  );
  return;
}

console.log(connection.threadId);


})

module.exports = connection;