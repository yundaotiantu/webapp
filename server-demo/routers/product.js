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

//3.商品列表
exports.products = (req,res)=>{
    let page = req.params.page;
    const pageSize = 20;
    let sql = `SELECT * FROM yb.lb_sideclass LIMIT ${pageSize} OFFSET ?`;
    pool.query(sql, [(page - 1) * pageSize], (err, results) => {
        if (err) throw err;
        res.send(results);
    })
}

