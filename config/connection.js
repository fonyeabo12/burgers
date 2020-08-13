// Set up MySQL connection.
var mysql = require('mysql2');

var connection = mysql.createConnection({
        host: 'mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'ybgb69k4f0v7o5k4',
        password: 'olkzdeafperuuqou',
        database: 'bbcfn4r53w57bm7j',
     });


// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;