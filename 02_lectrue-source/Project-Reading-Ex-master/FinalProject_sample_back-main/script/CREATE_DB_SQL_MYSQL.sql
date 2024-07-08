# create database & user

create user ohgiraffers@'%' identified by 'ohgiraffers';

create database springreact;

grant all privileges on springreact.* to ohgiraffers@'%';





# create table

use springreact;



DROP TABLE IF EXISTS TBL_AUTHORITY;

CREATE TABLE TBL_AUTHORITY
(
    AUTHORITY_CODE MEDIUMINT NOT NULL AUTO_INCREMENT COMMENT '권한코드', 
	AUTHORITY_NAME VARCHAR(255) NOT NULL COMMENT '권한명', 
	AUTHORITY_DESC VARCHAR(4000) NOT NULL COMMENT '권한설명',
    PRIMARY KEY ( `AUTHORITY_CODE` )
)
 COMMENT = '권한';



DROP TABLE IF EXISTS TBL_CATEGORY;

CREATE TABLE TBL_CATEGORY
(
    CATEGORY_CODE    MEDIUMINT NOT NULL AUTO_INCREMENT COMMENT '카테고리코드',
    CATEGORY_NAME    VARCHAR(50) NOT NULL COMMENT '카테고리명',
    PRIMARY KEY ( `CATEGORY_CODE` )
)
 COMMENT = '상품카테고리';



DROP TABLE IF EXISTS TBL_MEMBER;

CREATE TABLE TBL_MEMBER
(
    MEMBER_CODE    MEDIUMINT NOT NULL AUTO_INCREMENT COMMENT '회원코드',
    MEMBER_ID        VARCHAR(100) UNIQUE NOT NULL COMMENT '아이디',
    MEMBER_NAME  VARCHAR(100) NOT NULL COMMENT '회원이름',
    MEMBER_PASSWORD    VARCHAR(500) NOT NULL COMMENT '비밀번호',
    MEMBER_ROLE    VARCHAR(100) DEFAULT 'ROLE_USER' NOT NULL COMMENT '권한',
    MEMBER_EMAIL    VARCHAR(100) COMMENT '이메일',
    MEMBER_STATUS   varchar(1)   default 'Y'  NOT NULL COMMENT '직원상태',
    PRIMARY KEY ( `MEMBER_CODE` )
)
 COMMENT = '회원';



DROP TABLE IF EXISTS TBL_MEMBER_ROLE;

CREATE TABLE TBL_MEMBER_ROLE
(
    `MEMBER_CODE` MEDIUMINT NOT NULL COMMENT '회원코드', 
	`AUTHORITY_CODE` MEDIUMINT NOT NULL COMMENT '권한코드',
    PRIMARY KEY ( `MEMBER_CODE`, `AUTHORITY_CODE` )
)
 COMMENT = '회원권한';
 
 
 
DROP TABLE IF EXISTS TBL_ORDER;

CREATE TABLE TBL_ORDER
(
    ORDER_CODE    MEDIUMINT  NOT NULL AUTO_INCREMENT COMMENT '주문식별번호',
    PRODUCT_CODE    MEDIUMINT  NOT NULL COMMENT '상품코드',
    ORDER_MEMBER    MEDIUMINT  NOT NULL COMMENT '회원코드',
    ORDER_PHONE    VARCHAR(100) NOT NULL COMMENT '핸드폰번호',
    ORDER_EMAIL    VARCHAR(100) NOT NULL COMMENT '이메일주소',
    ORDER_RECEIVER    VARCHAR(100) NOT NULL COMMENT '받는사람',
    ORDER_ADDRESS    VARCHAR(500) NOT NULL COMMENT '배송주소',
    ORDER_AMOUNT    VARCHAR(50) NOT NULL COMMENT '주문갯수',
    ORDER_DATE    VARCHAR(100) NOT NULL COMMENT '주문일자',
    PRIMARY KEY ( `ORDER_CODE` )
)
 COMMENT = '주문';
 
 

DROP TABLE IF EXISTS TBL_PRODUCT;

CREATE TABLE TBL_PRODUCT
(
    PRODUCT_CODE    MEDIUMINT NOT NULL AUTO_INCREMENT COMMENT '상품코드',
    PRODUCT_NAME    VARCHAR(100) NOT NULL COMMENT '상품명',
    PRODUCT_PRICE    VARCHAR(100) NOT NULL COMMENT '상품가격',
    PRODUCT_DESCRIPTION    VARCHAR(1000) COMMENT '상품설명',
    PRODUCT_ORDERABLE    VARCHAR(5) NOT NULL COMMENT '구매가능여부',
    CATEGORY_CODE    MEDIUMINT COMMENT '카테고리코드',
    PRODUCT_IMAGE_URL    VARCHAR(100) NOT NULL COMMENT '상품이미지경로',
    PRODUCT_STOCK    MEDIUMINT NOT NULL COMMENT '상품재고',
    PRIMARY KEY ( `PRODUCT_CODE` )
)
 COMMENT = '상품';



DROP TABLE IF EXISTS TBL_REVIEW;

CREATE TABLE TBL_REVIEW
(
    REVIEW_CODE    MEDIUMINT NOT NULL AUTO_INCREMENT COMMENT '리뷰식별번호',
    PRODUCT_CODE    MEDIUMINT NOT NULL COMMENT '상품코드',
    MEMBER_CODE    MEDIUMINT NOT NULL COMMENT '회원코드',
    REVIEW_TITLE    VARCHAR(100) NOT NULL COMMENT '리뷰제목',
    REVIEW_CONTENT    VARCHAR(1000) NOT NULL COMMENT '리뷰내용',
    REVIEW_CREATE_DATE    VARCHAR(100) NOT NULL COMMENT '작성일',
    PRIMARY KEY ( `REVIEW_CODE` )
)
 COMMENT = '상품리뷰';