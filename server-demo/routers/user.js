//1.连接mysql
const mysql = require("mysql");

//2.创建连接池
let pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"yb",
    port:3306,
    connectionLimit:25
})

//3.注册
exports.signUp = (req,res)=>{
    let user = req.body.user;
    console.log(user);
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
                            sql = 'INSERT INTO yb.user VALUES(NULL,?,md5(?),?,?,?,?,?)';
                            pool.query(sql,[user.uname,user.upwd,user.email,user.phone,user.gender,user.age,user.city],(err,results)=>{
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
}


//4.登录
exports.signIn = (req,res)=>{
    let user = req.body.user;
    console.log(user);
    let sql = "SELECT * FROM yb.user WHERE uname=? and upwd=md5(?)";
    pool.query(sql,[user.uname,user.upwd],(err,result)=>{
        console.log(result);
        if(err) throw err;
        if(result.length>0){
            req.session.user = user;
            req.session.user.uid = result[0].uid;
            res.send({"code":"OK"})
        }else{
            res.send({"code":"err"})
        }
    })
}