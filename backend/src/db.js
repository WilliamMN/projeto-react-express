const mysql      = require('mysql');

function getConnection() {
  const connection = mysql.createConnection({
    host     : 'localhost',
    database : "mydb",
    user     : 'root',
    password : 'root'
  });
  
  connection.connect();

  return connection
  }
  
  module.exports = {getConnection}