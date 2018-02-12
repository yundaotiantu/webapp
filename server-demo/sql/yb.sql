DROP DATABASE IF EXISTS yb;
CREATE DATABASE yb charset=utf8;

DROP TABLE IF EXISTS yb.user;
CREATE TABLE yb.user(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'id pk',
  uname VARCHAR(255) NOT NULL UNIQUE COMMENT 'username',
  upwd VARCHAR(255) NOT NULL COMMENT 'paassword',
  email VARCHAR(255) NOT NULL UNIQUE COMMENT 'email',
  phone INT NOT NULL UNIQUE COMMENT 'phone',
  gender VARCHAR(255) NOT NULL  COMMENT 'gender',
  age INT NOT NULL COMMENT 'age',
  city VARCHAR(255) NOT NULL COMMENT 'city'
)COMMENT 'user table';

