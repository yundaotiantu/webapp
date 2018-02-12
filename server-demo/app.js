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
    database:"db",
    user:"root",
    password:"",
    connectionLimit:25
})

//1.注册
app.post('/signUp',(req,res)=>{
    let user = req.body.user;
    let sql = "SELECT * FROM db.user WHERE email = ?";
    pool.query(sql,[user.email],(err,result)=>{
        if(err) throw err;
        if(result.length===1){
            res.send({"status":"exist"});
        }
    });
    sql = 'INSERT INTO db.user VALUES(NULL,?,?,?,?,?,?)';
    pool.query(sql,[user.email,user.uname,user.password,user.gender,user.age,user.city],(err,results)=>{
        if(err) throw err;
        if(results.affectedRows===1){
            res.send({"statue":"ok"});
        }else{
            res.send({"statue":"err"});
        }
    })
})

//2.登录
app.post('/signIn',(req,res)=>{
    let user = req.body.user;
    console.log(user);
    let sql = "SELECT * FROM db.user WHERE email=? and password=?";
    pool.query(sql,[user.email,user.password],(err,result)=>{
        console.log(result);
        if(err) throw err;
        if(result.length>0){
            res.send({"status":"OK"})
        }else{
            res.send({"status":"err"})
        }
    })
})


//3.商品列表
app.get('/product/:page',(req,res)=>{
    let page = req.params.page;
    const pageSize = 20;
    let sql = "SELECT title FROM db.product LIMIT ? OFFSET ?";

})