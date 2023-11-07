const express = require('express');
const router = express.Router();
const db=require('../config/mysql');
//const util =require('util');

connection.connect(function(err){
    if(err) console.error('mysql connection error:'+err);
    else console.log('mysql is connected successfully!');
})



//router.post('on/Login',(req,res)=>{
    let user_id = req.body.id;     //req는 데이터를 받은건데 ①에서 data객체를 보내줫었다

  console.log(req.body.id);
  let sql = 'select id from usertable where id=?' //sql 쿼리문-> id 에맞는 row들고 오고싶다
  connection.query(sql, [user_id], function (err, rows, fields) {
      console.log(rows);
      let checkid = new Object();
      checkid.tf =false;              // 이 아이디를 사용가능 한가요??

      if (rows[0] === undefined) { //중복되는게 없으면 (없으니까 못가져왓겠지)
          checkid.tf = true;  //없음 사용가능
          res.send(checkid);  //다시 클라이언트로 보낸다 checkid 객체를
      }

      else {
          
          checkid.tf = false; // 중복됨 사용x
          res.send(checkid);  
      }
  })
//});

router.get('/loginn',(req,res)=>{
    const sqlInsert="SELECT * FROM company;"
        res.send({data:'data'});
   
    
});

module.exports=router;

//router.post('/onLogin', (req, res) => {
    console.log(`= = = > req : ${util.inspect(req)}`)
   	// user_id, user_pw 변수로 선언
    const user_id = req.query.user_id
    const user_pw = req.query.user_pw
    // 입력된 id 와 동일한 id 가 mysql 에 있는 지 확인
    const sql1 = 'SELECT COUNT(*) AS result FROM user_inform WHERE user_id = ?'
    db.query(sql1, user_id, (err, data) => {
        if(!err) {
        	// 결과값이 1보다 작다면(동일한 id 가 없다면)
            if(data[0].result < 1) {
                res.send({ 'msg': '입력하신 id 가 일치하지 않습니다.'})
            } else { // 동일한 id 가 있으면 비밀번호 일치 확인
                const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT user_id FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                END AS userId
                                , CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT user_pw FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                END AS userPw`;
                // sql 란에 필요한 parameter 값을 순서대로 기재
                const params = [user_id, user_pw, user_id, user_pw, user_id, user_pw, user_id, user_pw]
                db.query(sql2, params, (err, data) => {
                    if(!err) {
                        res.send(data[0])
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            res.send(err)
        }
    })
//});