const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

let app = new express();

//配置 middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(3000);

//创建连接池
var pool = mysql.createPool({
    host:"127.0.0.1",
    port:"3306",
    database:"yb",
    user:"root",
    password:"",
    connectionLimit:25
})

//1.注册
app.post('/signUp',(req,res)=>{
    let user = req.body.user;
    let sql = "SELECT * FROM yb.user WHERE uname = ?";
    pool.query(sql,[user.uname],(err,result)=>{
        if(err) throw err;
        if(result.length===1){
            res.send({"code":"1"});
        }else{
            sql = "SELECT * FROM yb.user WHERE email = ?";
            pool.query(sql,[user.email],(err,result)=>{
                if(err) throw err;
                if(result.length===1){
                    res.send({"code":"2"});
                }else{
                    sql = "SELECT * FROM yb.user WHERE phone = ?";
                    pool.query(sql,[user.phone],(err,result)=>{
                        if(err) throw err;
                        if(result.length===1){
                            res.send({"code":"3"});
                        }else{
                            sql = 'INSERT INTO db.user VALUES(NULL,?,?,?,?,?,?)';
                            pool.query(sql,[user.email,user.uname,user.password,user.gender,user.age,user.city],(err,results)=>{
                                if(err) throw err;
                                if(results.affectedRows===1){
                                    res.send({"code":"ok"});
                                }else{
                                    res.send({"code":"err"});
                                }
                            })
                        }
                    });
                }
            });
        }
    });
})

//2.登录
app.post('/signIn',(req,res)=>{
    let user = req.body.user;
    console.log(user);
    let sql = "SELECT * FROM yb.user WHERE uname=? and upwd=?";
    pool.query(sql,[user.uname,user.upwd],(err,result)=>{
        console.log(result);
        if(err) throw err;
        if(result.length>0){
            res.send({"status":"OK"})
        }else{
            res.send({"status":"err"})
        }
    })
})

