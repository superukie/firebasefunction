// var mysql = require('mysql'); // npm install로 이미 설치 되있음 
// var config = require('./mysql_dbinfo').local; 

// module.exports = function() { 
//     return { 
//       init: function() { 
//         return mysql.createConnection({
//           host: config.host, 
//           port: config.port, 
//           user: config.user, 
//           password:config.password, 
//           database: config.database
//         })
//       }, 

//       test_open: function(con) { 
//           con.connect(function(err){
//             if(err) {
//               console.error('mysql connection error :'+ err); 

//             }else{
//               console.info('mysql is connected successfully.');
//             }
// })

//       }
//     }
// }


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',    // 호스트 주소
  user     : 'me',           // mysql user
  password : 'secret',       // mysql password
  database : 'my_db'         // mysql 데이터베이스
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', 
function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
connection.end();