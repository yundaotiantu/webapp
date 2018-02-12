DROP DATABASE IF EXISTS db;
CREATE DATABASE db charset=utf8;

DROP TABLE IF EXISTS db.product;
CREATE TABLE db.product(
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'id pk',
    title VARCHAR(255) NOT NULL COMMENT 'title',
    detail VARCHAR(255) NOT NULL COMMENT 'detail',
    price DECIMAL(6,2) NOT NULL COMMENT 'price',
    picture VARCHAR(255) NOT NULL DEFAULT 'product.png' COMMENT 'picture'
)COMMENT 'product table';

--为商品表添加一千条数据
DROP PROCEDURE IF EXISTS db.gen_sample_data;
DELIMITER $$
CREATE PROCEDURE db.gen_sample_data()
    BEGIN
        DECLARE counter INT DEFAULT 0;
        WHILE counter < 1000 DO
            INSERT INTO db.product(title, detail, price)
            VALUE(
                CONCAT('title: ', counter),
                CONCAT('product detail: ', counter),
                FLOOR(RAND() * 10000)
            );
            SET counter = counter + 1;
        END WHILE;
    END $$

CALL db.gen_sample_data();

DROP TABLE IF EXISTS db.user;
CREATE TABLE db.user(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'id pk',
  email VARCHAR(255) NOT NULL UNIQUE COMMENT 'email',
  uname VARCHAR(255) NOT NULL UNIQUE COMMENT 'username',
  password VARCHAR(255) NOT NULL COMMENT 'paassword',
  gender VARCHAR(255) NOT NULL  COMMENT 'paassword',
  age INT NOT NULL COMMENT 'age',
  city VARCHAR(255) NOT NULL COMMENT 'city'
)COMMENT 'user table';

