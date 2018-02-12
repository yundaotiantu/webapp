//nodejs 央视商城网
//1:加载对应模块
//  http
//  express
//  mysql
//  body-parser  处理post请求参数
const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//加载cook和session
const cookieParser = require("cookie-parser");
const session = require("express-session");

////2.创建服务器3000
let app = new express();
var server = http.createServer(app);
server.listen(3000);

//3.配置body.parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//4.创建连接池
var pool = mysql.createPool({
    host:"127.0.0.1",
    port:"3306",
    database:"yb",
    user:"root",
    password:"",
    connectionLimit:25
})

//5.配置session
app.use(session({
    secret: 'express ',
    resave: true,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000*60*60
    }
}));
app.use(cookieParser());

//6.引用文件路径
let user = require("./routers/user");

//7.注册
app.post('/signUp',user.signUp);

//8.登录
app.post('/signIn',user.signIn)

