var mysql = require("mysql");

var db = mysql.createPool({
    host: "localhost", // 데이터베이스 주소
    port: "3306", // 데이터베이스 포트
    user: "root", // 로그인 계정
    password: "leeyeeun0921", // 비밀번호
    database: "uni_project", // 엑세스할 데이터베이스
  });

  module.export=db;



 // module.exports = {
 //   init: function () {
 //     return mysql.createConnection(db_info);
 //   },
 //   connect: function (conn) {
 //     conn.connect(function (err) {
 //       if (err) console.error("mysql connection error : " + err);
 //       else console.log("mysql is connected successfully!");
 //     });
 //   },
//  };