const functions = require('firebase-functions');


/********************************************* 
 * Admin 계정 정보 취득  
*********************************************/
var admin = require('firebase-admin');
var serviceAccount = require("./test.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-functions-45489.firebaseio.com"
  });


/**
 * 
 * 테스트 함수 
 * Create and Deploy Your First Cloud Functions
 * https://firebase.google.com/docs/functions/write-firebase-functions
 */
exports.helloWorld = functions.https.onRequest((request, response) => {
 
    // test code
    //console.log(request.body); 
    response.send("Hello from Firebase!");

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
                                               host     : 'localhost',    // 호스트 주소
                                               user     : 'root',           // mysql user
                                               password : 'tiger',       // mysql password
                                               database : 'test'         // mysql 데이터베이스
                                            });
    connection.connect();
    connection.query('SELECT cust_no as solution from member', 
    function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    }); 
    connection.end();

}); 

// console.log('connect ok');
// connection.query('SELECT cust_no as solution from member', 
// function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });
// console.log("function end");
// //connection.end();
// });