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

DROP TABLE IF EXISTS yb.lb_recommend;
DROP TABLE IF EXISTS yb.lb_sideclass;

create table yb.lb_sideclass(
  sc_id int(11) NOT NULL auto_increment primary key,
  sc_img varchar(128) default NULL,
  sc_title varchar(64) default NULL,
  sc_selprice decimal(10,2) default NULL,
  sc_price decimal(10,2) default NULL
);

INSERT INTO `lb_sideclass` VALUES ('1', 'images/s6395518.jpg','齐白石国画书签(每套6张)','1.7','4');
INSERT INTO `lb_sideclass` VALUES ('2', 'images/s6372637.jpg','中国人的精神','8.6','26.8');
INSERT INTO `lb_sideclass` VALUES ('3', 'images/s5300978.jpg','岁月神偷','8.3','26');
INSERT INTO `lb_sideclass` VALUES ('4', 'images/s5319312.jpg','孤独无处诉','9.8','28');
INSERT INTO `lb_sideclass` VALUES ('5', 'images/s1723523.jpg','中国古典悲剧史','6','20');
INSERT INTO `lb_sideclass` VALUES ('6', 'images/s5016543.jpg','三国水浒与西游','2.4','8');
INSERT INTO `lb_sideclass` VALUES ('7', 'images/s6947326.jpg','幽灵心理学-现代推理馆07-赤川次郎04','16.8','30');
INSERT INTO `lb_sideclass` VALUES ('8', 'images/s6947251.jpg','幽灵候补生-现代推理馆05-赤川次郎02','9.6','30');
INSERT INTO `lb_sideclass` VALUES ('9', 'images/s6947234.jpg','幽灵列车-现代推理馆04-赤川次郎01','18.50','33.00');
INSERT INTO `lb_sideclass` VALUES ('10', 'images/s6650011.jpg','甲午战争十二讲-温情敬意看历史','12.50','39.00');
INSERT INTO `lb_sideclass` VALUES ('11', 'images/s5300978.jpg','岁月神偷','8.3','26');
INSERT INTO `lb_sideclass` VALUES ('12', 'images/s1723523.jpg','中国古典悲剧史','6','20');
INSERT INTO `lb_sideclass` VALUES ('13', 'images/s5319312.jpg','孤独无处诉','9.8','28');
INSERT INTO `lb_sideclass` VALUES ('14', 'images/s5016543.jpg','三国水浒与西游','2.4','8');
INSERT INTO `lb_sideclass` VALUES ('15', 'images/s6947326.jpg','幽灵心理学-现代推理馆07-赤川次郎04','16.8','30');
INSERT INTO `lb_sideclass` VALUES ('16', 'images/s6947251.jpg','幽灵候补生-现代推理馆05-赤川次郎02','9.6','30');
INSERT INTO `lb_sideclass` VALUES ('17', 'images/s6947234.jpg','幽灵列车-现代推理馆04-赤川次郎01','18.5','33');
INSERT INTO `lb_sideclass` VALUES ('18', 'images/s4022211.jpg','斯巴达克思','8.6','21');
INSERT INTO `lb_sideclass` VALUES ('19', 'images/s3523689.jpg','持灯的使者','12','30');
INSERT INTO `lb_sideclass` VALUES ('20', 'images/s5835392.jpg','再见,黑鸟','10.6','28');
INSERT INTO `lb_sideclass` VALUES ('21', 'images/s6372637.jpg','中国人的精神','8.6','26.8');
INSERT INTO `lb_sideclass` VALUES ('22', 'images/s6650011.jpg','甲午战争十二讲-温情敬意看历史','12.5','39');
INSERT INTO `lb_sideclass` VALUES ('23', 'images/s3068131.jpg','利维坦','9','23.8');
INSERT INTO `lb_sideclass` VALUES ('24', 'images/s6982464.jpg','权力的任性：人类历史上最糟糕的决策①','21.8','68');
INSERT INTO `lb_sideclass` VALUES ('25', 'images/s6292450.jpg','把黑夜点燃','11.5','36');
INSERT INTO `lb_sideclass` VALUES ('26', 'images/s5301734.jpg','三峡记','8.4','28');
INSERT INTO `lb_sideclass` VALUES ('27', 'images/s5749567.jpg','袁世凯1916:悬崖上的龙椅','11.5','36');
INSERT INTO `lb_sideclass` VALUES ('28', 'images/s5350771.jpg','语文闲谈:精选本','4.8','16');
INSERT INTO `lb_sideclass` VALUES ('29', 'images/s4505464.jpg','贵族的黄昏-孔子和他生活的时代','6','20');
INSERT INTO `lb_sideclass` VALUES ('30', 'images/s3415559.jpg','晏子春秋全译','9.9','31');
INSERT INTO `lb_sideclass` VALUES ('31', 'images/s5749567.jpg','袁世凯1916:悬崖上的龙椅','11.5','36');
INSERT INTO `lb_sideclass` VALUES ('32', 'images/s7544764.jpg','了不起的狐狸爸爸-罗尔德.达尔作品典藏-No.1','11','15');
INSERT INTO `lb_sideclass` VALUES ('33', 'images/s6904636.jpg','爱的教育','8.3','26');
INSERT INTO `lb_sideclass` VALUES ('34', 'images/s7544764.jpg','化学也疯狂-可怕的科学','7.2','16.8');
INSERT INTO `lb_sideclass` VALUES ('35', 'images/s7530920.jpg','英语单词大书','56.9','78');
INSERT INTO `lb_sideclass` VALUES ('36', 'images/s7205481.jpg','国际大奖小说升级版:苹果树上的外婆','8.3','15');
INSERT INTO `lb_sideclass` VALUES ('37', 'images/s7191746.jpg','名家儿童文学精选系列:篮鲸的眼睛','10.3','15.8');
INSERT INTO `lb_sideclass` VALUES ('38', 'images/s7589393.jpg','毛毛虫纸板书:小蝌蚪找妈妈+好乖乖+两只老鼠胆子大(套装3册)','2.5','5');
INSERT INTO `lb_sideclass` VALUES ('39', 'images/s4939017.jpg','三只小狼和一只大坏猪','11.7','18');
INSERT INTO `lb_sideclass` VALUES ('40', 'images/s6928348.jpg','青蛙合唱团-笑猫日记','9.8','15');
INSERT INTO `lb_sideclass` VALUES ('41', 'images/s5612628.jpg','近年新出历代碑志精选系列--唐段氏墓志','4.2','14');
INSERT INTO `lb_sideclass` VALUES ('42', 'images/s4767998.jpg','日本电影-艺术与工业','12.2','38');
INSERT INTO `lb_sideclass` VALUES ('43', 'images/s1935052.jpg','勾栏瓦舍','9.1','26');
INSERT INTO `lb_sideclass` VALUES ('44', 'images/s6755473.jpg','莱昂纳多的蒙娜丽莎','22.3','39.8');
INSERT INTO `lb_sideclass` VALUES ('45', 'images/s6694971.jpgs','褚遂良阴符经-唐代楷书结构秘籍','8','25');
INSERT INTO `lb_sideclass` VALUES ('46', 'images/s5831005.jpg','石鼓文-中国历代法书名碑原版放大折页之三十九','8.6','20');
INSERT INTO `lb_sideclass` VALUES ('47', 'images/s5612630.jpg','近年新出历代碑志精选系列--唐侯知什墓志','4.8','16');
INSERT INTO `lb_sideclass` VALUES ('48', 'images/s5612624.jpg','中国历代名碑名贴精选系列--徐浚墓志','4.8','16');
INSERT INTO `lb_sideclass` VALUES ('49', 'images/s5563754.jpg','地狱中的爱神-日本另翼电影史','9.6','30');
INSERT INTO `lb_sideclass` VALUES ('50', 'images/s5483582.jpg','德莱叶的电影','13.4','42');
INSERT INTO `lb_sideclass` VALUES ('51', 'images/s6963478.jpg','道连.格雷的画像','12','28');
INSERT INTO `lb_sideclass` VALUES ('52', 'images/s2927780.jpg','安徒生童话精选.增订版','4.3','10');
INSERT INTO `lb_sideclass` VALUES ('53', 'images/s6874804.jpg','简爱 新课标','4.8','16');
INSERT INTO `lb_sideclass` VALUES ('54', 'images/s5878469.jpg','图解未知世界不可思议的恐龙遗物-366张震惊世人的照片证据','11.2','35');
INSERT INTO `lb_sideclass` VALUES ('55', 'images/s5630427.jpg','中国的火山、温泉和地热能','9.9','22');
INSERT INTO `lb_sideclass` VALUES ('56', 'images/s4509603.jpg','中国马球史','14.4','48');
INSERT INTO `lb_sideclass` VALUES ('57', 'images/s4305102.jpg','单词加码记忆法-挑战级-本书含MP3','9.8','20');
INSERT INTO `lb_sideclass` VALUES ('58', 'images/s4247207.jpg','哈姆莱特','3.9','9');
INSERT INTO `lb_sideclass` VALUES ('59', 'images/s2957646.jpg','别笑,我是疯狂英语会话书','9','35.8');
INSERT INTO `lb_sideclass` VALUES ('60', 'images/s2927749.jpg','朱自清散文精选.增订版','3.5','10');
INSERT INTO `lb_sideclass` VALUES ('61', 'images/s6372270.jpg','河合隼雄－有益的父母,有害的父母','9.1','26');
INSERT INTO `lb_sideclass` VALUES ('62', 'images/s6472833.jpg','教出孩子的生存力','9.5','29.8');
INSERT INTO `lb_sideclass` VALUES ('63', 'images/s6252311.jpg','餐厅热卖凉菜家常做','14.1','32.8');
INSERT INTO `lb_sideclass` VALUES ('64', 'images/s5908660.jpg','世界地图册','8.2','19');
INSERT INTO `lb_sideclass` VALUES ('65', 'images/s5749541.jpg','饭否:寻找隐藏的盛宴','12.2','38');
INSERT INTO `lb_sideclass` VALUES ('66', 'images/s6977171.jpg','健康养生堂-对症按摩百病消','14.8','39');
INSERT INTO `lb_sideclass` VALUES ('67', 'images/s5334777.jpg','在遥远的莫斯卡:棕皮手记:2011','8.9','29.8');
INSERT INTO `lb_sideclass` VALUES ('68', 'images/s2773482.jpg','做最健康的自己-健康自励手册(1)','7','22');
INSERT INTO `lb_sideclass` VALUES ('69', 'images/s2773482.jpg','做最健康的自己-健康自励手册(1)','7','22');
INSERT INTO `lb_sideclass` VALUES ('70', 'images/s7386223.jpg','我还没有男朋友-社交时代恋爱秘籍','27.3','42');