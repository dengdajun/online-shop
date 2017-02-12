/*
Navicat MySQL Data Transfer

Source Server         : Mysql-master
Source Server Version : 50717
Source Host           : 127.0.0.1:3306
Source Database       : jpg

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-02-12 23:35:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for common_region
-- ----------------------------
DROP TABLE IF EXISTS `common_region`;
CREATE TABLE `common_region` (
  `id` int(11) NOT NULL COMMENT '主键',
  `province` varchar(10) DEFAULT NULL COMMENT '省',
  `city` varchar(10) DEFAULT NULL COMMENT '市',
  `area` varchar(10) DEFAULT NULL COMMENT '区/县/二级市',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='公用地区信息';

-- ----------------------------
-- Records of common_region
-- ----------------------------

-- ----------------------------
-- Table structure for cust_address
-- ----------------------------
DROP TABLE IF EXISTS `cust_address`;
CREATE TABLE `cust_address` (
  `id` int(11) NOT NULL COMMENT '主键',
  `cust_id` int(11) DEFAULT NULL COMMENT '客户信息id',
  `region_id` int(11) DEFAULT NULL COMMENT '地址id',
  `address_detail` varchar(30) DEFAULT NULL COMMENT '详细地址',
  `is_default` int(1) DEFAULT NULL COMMENT '是否默认地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='客户地址信息';

-- ----------------------------
-- Records of cust_address
-- ----------------------------

-- ----------------------------
-- Table structure for cust_attachment
-- ----------------------------
DROP TABLE IF EXISTS `cust_attachment`;
CREATE TABLE `cust_attachment` (
  `id` int(11) NOT NULL COMMENT '主键',
  `cust_id` int(11) DEFAULT NULL COMMENT '客户信息id',
  `att_url` varchar(30) DEFAULT NULL COMMENT '附件位置',
  `att_old_name` varchar(30) DEFAULT NULL COMMENT '附件以前的名字',
  `att_new_name` varchar(30) DEFAULT NULL COMMENT '附件在服务器中的名字',
  `att_type` varchar(10) DEFAULT NULL COMMENT '附件类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='客户附件相关信息';

-- ----------------------------
-- Records of cust_attachment
-- ----------------------------

-- ----------------------------
-- Table structure for cust_info
-- ----------------------------
DROP TABLE IF EXISTS `cust_info`;
CREATE TABLE `cust_info` (
  `id` int(11) NOT NULL COMMENT '主键',
  `cust_account` varchar(20) DEFAULT NULL COMMENT '登录账号 昵称',
  `cust_passwd` varchar(30) DEFAULT NULL COMMENT '登录密码',
  `cust_phone` varchar(11) DEFAULT NULL COMMENT '客户电话',
  `cust_email` varchar(20) DEFAULT NULL COMMENT '客户邮箱',
  `cust_sex` int(1) DEFAULT NULL COMMENT '客户性别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='客户基本信息表';

-- ----------------------------
-- Records of cust_info
-- ----------------------------

-- ----------------------------
-- Table structure for good_attachment
-- ----------------------------
DROP TABLE IF EXISTS `good_attachment`;
CREATE TABLE `good_attachment` (
  `id` int(11) NOT NULL COMMENT '主键',
  `good_id` int(11) DEFAULT NULL COMMENT '客户信息id',
  `att_url` varchar(30) DEFAULT NULL COMMENT '附件位置',
  `att_old_name` varchar(30) DEFAULT NULL COMMENT '附件以前的名字',
  `att_new_name` varchar(30) DEFAULT NULL COMMENT '附件在服务器中的名字',
  `att_type` varchar(10) DEFAULT NULL COMMENT '附件类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='商品附件相关信息';

-- ----------------------------
-- Records of good_attachment
-- ----------------------------

-- ----------------------------
-- Table structure for good_class
-- ----------------------------
DROP TABLE IF EXISTS `good_class`;
CREATE TABLE `good_class` (
  `id` int(11) NOT NULL COMMENT '主键',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级id',
  `class_name` varchar(20) DEFAULT NULL COMMENT '类型名称',
  `class_desc` varchar(50) DEFAULT NULL COMMENT '类型描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='商品类型基本信息';

-- ----------------------------
-- Records of good_class
-- ----------------------------
INSERT INTO `good_class` VALUES ('1', '0', 'test', 'test');
INSERT INTO `good_class` VALUES ('2', '1', 'dd', 'dasda');
INSERT INTO `good_class` VALUES ('3', '1', 'asdasd', 'asdasd');
INSERT INTO `good_class` VALUES ('4', '2', 'sasdasdasdasdas', 'asdasda');

-- ----------------------------
-- Table structure for good_class_attribute
-- ----------------------------
DROP TABLE IF EXISTS `good_class_attribute`;
CREATE TABLE `good_class_attribute` (
  `id` int(11) NOT NULL COMMENT '主键',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级id',
  `attribute_name` varchar(20) DEFAULT NULL COMMENT '属性名称',
  `attribute_desc` varchar(50) DEFAULT NULL COMMENT '属性描述',
  `good_class_id` int(11) DEFAULT NULL COMMENT '所属商品类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='商品类型属性信息';

-- ----------------------------
-- Records of good_class_attribute
-- ----------------------------

-- ----------------------------
-- Table structure for good_info
-- ----------------------------
DROP TABLE IF EXISTS `good_info`;
CREATE TABLE `good_info` (
  `id` int(11) NOT NULL COMMENT '主键',
  `good_name` varchar(20) DEFAULT NULL COMMENT '商品名称',
  `good_price` decimal(10,0) DEFAULT NULL COMMENT '商品价格',
  `good_class_id` int(11) DEFAULT NULL COMMENT '商品类目',
  `good_desc` varchar(50) DEFAULT NULL COMMENT '商品描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='商品基本信息';

-- ----------------------------
-- Records of good_info
-- ----------------------------

-- ----------------------------
-- Table structure for good_info_attribute_value
-- ----------------------------
DROP TABLE IF EXISTS `good_info_attribute_value`;
CREATE TABLE `good_info_attribute_value` (
  `id` int(11) NOT NULL COMMENT '主键',
  `good_id` int(11) DEFAULT NULL COMMENT '商品id',
  `attribute_id` int(11) DEFAULT NULL COMMENT '属性id',
  `attribute_value` varchar(20) DEFAULT NULL COMMENT '属性值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='商品属性 值 信息';

-- ----------------------------
-- Records of good_info_attribute_value
-- ----------------------------

-- ----------------------------
-- Table structure for good_word
-- ----------------------------
DROP TABLE IF EXISTS `good_word`;
CREATE TABLE `good_word` (
  `id` int(11) NOT NULL COMMENT '主键',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级id',
  `word_context` varchar(50) DEFAULT NULL COMMENT '评论内容/回复评论内容',
  `cust_id` int(11) DEFAULT NULL COMMENT '客户id',
  `cust_name` varchar(20) DEFAULT NULL COMMENT '客户姓名',
  `sys_account_id` int(11) DEFAULT NULL COMMENT '系统回复用户id',
  `sys_account_name` varchar(20) DEFAULT NULL COMMENT '系统回复用户名字',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='商品评论';

-- ----------------------------
-- Records of good_word
-- ----------------------------

-- ----------------------------
-- Table structure for order_history_info
-- ----------------------------
DROP TABLE IF EXISTS `order_history_info`;
CREATE TABLE `order_history_info` (
  `id` int(11) NOT NULL COMMENT '主键',
  `order_time` date DEFAULT NULL COMMENT '创建时间',
  `order_end_time` date DEFAULT NULL COMMENT '订单结束时间',
  `cust_id` int(11) DEFAULT NULL COMMENT '买家id',
  `cust_phone` int(11) DEFAULT NULL COMMENT '买家电话',
  `good_id` int(11) DEFAULT NULL COMMENT '商品id',
  `good_name` varchar(20) DEFAULT NULL COMMENT '商品名称',
  `good_price` decimal(10,0) DEFAULT NULL COMMENT '商品价格',
  `good_desc` varchar(50) DEFAULT NULL COMMENT '商品描述',
  `good_class_id` int(11) DEFAULT NULL COMMENT '商品类型id',
  `order_postage` decimal(10,0) DEFAULT NULL COMMENT '邮费',
  `order_price` decimal(10,0) DEFAULT NULL COMMENT '订单总金额',
  `target_address_id` int(11) DEFAULT NULL COMMENT '地址id',
  `target_address_detail` varchar(30) DEFAULT NULL COMMENT '买家详细地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='订单历史表 订单信息不能删除原则，但基本信息表数据量会越来越大 ';

-- ----------------------------
-- Records of order_history_info
-- ----------------------------

-- ----------------------------
-- Table structure for order_info
-- ----------------------------
DROP TABLE IF EXISTS `order_info`;
CREATE TABLE `order_info` (
  `id` int(11) NOT NULL COMMENT '主键',
  `order_time` date DEFAULT NULL COMMENT '创建时间',
  `cust_id` int(11) DEFAULT NULL COMMENT '买家id',
  `good_id` int(11) DEFAULT NULL COMMENT '商品id',
  `good_name` varchar(20) DEFAULT NULL COMMENT '商品名称',
  `good_price` decimal(10,0) DEFAULT NULL COMMENT '商品价格',
  `good_desc` varchar(50) DEFAULT NULL COMMENT '商品描述',
  `good_class_id` int(11) DEFAULT NULL COMMENT '商品类型id',
  `order_postage` decimal(10,0) DEFAULT NULL COMMENT '邮费',
  `order_price` decimal(10,0) DEFAULT NULL COMMENT '订单总金额',
  `order_status` varchar(20) DEFAULT NULL COMMENT '订单状态',
  `target_address_id` int(11) DEFAULT NULL COMMENT '地址id',
  `target_address_detail` varchar(30) DEFAULT NULL COMMENT '买家详细地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='订单基本信息    因为地址和商品信息会在订单执行期间发生变动 所以需要他们基本信息  商品属性和商品类型属性在这期间不能变动  ';

-- ----------------------------
-- Records of order_info
-- ----------------------------

-- ----------------------------
-- Table structure for sys_account
-- ----------------------------
DROP TABLE IF EXISTS `sys_account`;
CREATE TABLE `sys_account` (
  `id` int(11) NOT NULL COMMENT '主键',
  `account` varchar(20) DEFAULT NULL COMMENT '登录账号',
  `passwd` varchar(20) DEFAULT NULL COMMENT '登录密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='系统账号信息表';

-- ----------------------------
-- Records of sys_account
-- ----------------------------
INSERT INTO `sys_account` VALUES ('11', '222', '22');

-- ----------------------------
-- Table structure for sys_account_group
-- ----------------------------
DROP TABLE IF EXISTS `sys_account_group`;
CREATE TABLE `sys_account_group` (
  `id` int(11) NOT NULL COMMENT '主键',
  `account_id` int(11) DEFAULT NULL COMMENT '系统账号id',
  `group_id` int(11) DEFAULT NULL COMMENT '系统账号组id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='系统账号组中间表';

-- ----------------------------
-- Records of sys_account_group
-- ----------------------------

-- ----------------------------
-- Table structure for sys_account_permissions
-- ----------------------------
DROP TABLE IF EXISTS `sys_account_permissions`;
CREATE TABLE `sys_account_permissions` (
  `id` int(11) NOT NULL COMMENT '主键',
  `account_id` int(11) DEFAULT NULL COMMENT '系统账号id',
  `permissions_id` int(11) DEFAULT NULL COMMENT '账号权限id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='系统账号权限中间表';

-- ----------------------------
-- Records of sys_account_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for sys_account_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_account_role`;
CREATE TABLE `sys_account_role` (
  `id` int(11) NOT NULL COMMENT '主键',
  `account_id` int(11) DEFAULT NULL COMMENT '系统账号id',
  `role_id` int(11) DEFAULT NULL COMMENT '系统账号角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='系统账号角色中间表';

-- ----------------------------
-- Records of sys_account_role
-- ----------------------------

-- ----------------------------
-- Table structure for sys_group
-- ----------------------------
DROP TABLE IF EXISTS `sys_group`;
CREATE TABLE `sys_group` (
  `id` int(11) NOT NULL COMMENT '主键',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级id',
  `group_name` varchar(20) DEFAULT NULL COMMENT '组名称',
  `group_desc` varchar(50) DEFAULT NULL COMMENT '组描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='组信息表';

-- ----------------------------
-- Records of sys_group
-- ----------------------------

-- ----------------------------
-- Table structure for sys_group_permissions
-- ----------------------------
DROP TABLE IF EXISTS `sys_group_permissions`;
CREATE TABLE `sys_group_permissions` (
  `id` int(11) NOT NULL COMMENT '主键',
  `group_id` int(11) DEFAULT NULL COMMENT '组id',
  `permissions_id` int(11) DEFAULT NULL COMMENT '权限id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='组权限中间表';

-- ----------------------------
-- Records of sys_group_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for sys_group_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_group_role`;
CREATE TABLE `sys_group_role` (
  `id` int(11) NOT NULL COMMENT '主键',
  `group_id` int(11) DEFAULT NULL COMMENT '组id',
  `role_id` int(11) DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='组角色中间表';

-- ----------------------------
-- Records of sys_group_role
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu` (
  `id` int(11) NOT NULL COMMENT '主键',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级id',
  `menu_url` varchar(30) DEFAULT NULL COMMENT '菜单url',
  `menu_name` varchar(20) DEFAULT NULL COMMENT '菜单名称',
  `menu_desc` varchar(50) DEFAULT NULL COMMENT '菜单描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='系统菜单';

-- ----------------------------
-- Records of sys_menu
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu_permissions
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu_permissions`;
CREATE TABLE `sys_menu_permissions` (
  `id` int(11) NOT NULL COMMENT '主键',
  `menu_id` int(11) DEFAULT NULL COMMENT '菜单id',
  `permissions_id` int(11) DEFAULT NULL COMMENT '权限id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='系统菜单权限中间表，若通过菜单来控制权限，这个表必须';

-- ----------------------------
-- Records of sys_menu_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for sys_permissions
-- ----------------------------
DROP TABLE IF EXISTS `sys_permissions`;
CREATE TABLE `sys_permissions` (
  `id` int(11) NOT NULL COMMENT '主键',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级id',
  `permissions_name` varchar(20) DEFAULT NULL COMMENT '权限名称',
  `permissions_desc` varchar(50) DEFAULT NULL COMMENT '权限描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='权限信息表';

-- ----------------------------
-- Records of sys_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `id` int(11) NOT NULL COMMENT '主键',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级id',
  `role_name` varchar(20) DEFAULT NULL COMMENT '角色名称',
  `role_desc` varchar(50) DEFAULT NULL COMMENT '角色描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='角色信息表';

-- ----------------------------
-- Records of sys_role
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role_permissions
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_permissions`;
CREATE TABLE `sys_role_permissions` (
  `id` int(11) NOT NULL COMMENT '主键',
  `role_id` int(11) DEFAULT NULL COMMENT '角色id',
  `permissions_id` int(11) DEFAULT NULL COMMENT '权限id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='角色权限中间表';

-- ----------------------------
-- Records of sys_role_permissions
-- ----------------------------
