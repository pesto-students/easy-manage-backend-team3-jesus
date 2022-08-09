CREATE TABLE USERS(
    USER_ID INT PRIMARY KEY AUTO_INCREMENT,
    EMAIL VARCHAR(255) NOT NULL,
    USERTYPE VARCHAR(255) NOT NULL,
    PASS VARCHAR(255) NOT NULL,
    FNAME TEXT
);

CREATE TABLE ADMIN_USER(
	ADMIN_ID INT PRIMARY KEY auto_increment,
    GYMNAME varchar(255) NOT NULL,
    EMAIL varchar(255) not null,
    USERNAME varchar(255) not null,
    PASS varchar(255) not null,
    ADDRESS text  not null,
    CITY text  not null,
    STATE varchar(2)  not null,
    COUNTRY varchar(255)  not null,
    PINCODE varchar(6)  not null,
    PLAN varchar(10)  not null,
    STAT varchar(10)  not null
);

CREATE TABLE EMP_USER(
	EMP_ID INT PRIMARY KEY auto_increment,
    FULLNAME TEXT NOT NULL,
    GENDER varchar(1) NOT NULL,
    MOBILE varchar(10) NOT NULL,
    DOB date NOT NULL,
    DOJ datetime NOT NULL,
    GYM_ID INT NOT NULL,
    GYMNAME varchar(255) NOT NULL,
    EMAIL varchar(255) not null,
    USERNAME varchar(255) not null,
    PASS varchar(255) not null,
    ADDRESS text  not null,
    CITY text  not null,
    STATE varchar(2)  not null,
    COUNTRY varchar(255)  not null,
    PINCODE varchar(6)  not null,
    SALARY varchar(10)  not null,
    STAT varchar(10)  not null,
    foreign key(GYM_ID) references ADMIN_USER(GYM_ID)
);

CREATE TABLE MEM_USER(
	MEM_ID INT PRIMARY KEY auto_increment,
    FULLNAME TEXT NOT NULL,
    GENDER varchar(1) NOT NULL,
    MOBILE varchar(10) NOT NULL,
    DOB date NOT NULL,
    DOJ datetime NOT NULL,
    DD datetime NOT NULL,
    GYM_ID INT NOT NULL,
    GYMNAME varchar(255) NOT NULL,
    EMAIL varchar(255) not null,
    USERNAME varchar(255) not null,
    PASS varchar(255) not null,
    ADDRESS text  not null,
    CITY text  not null,
    STATE varchar(2)  not null,
    COUNTRY varchar(255)  not null,
    PINCODE varchar(6)  not null,
    PLAN varchar(10)  not null,
    STAT varchar(10)  not null,
    foreign key(GYM_ID) references ADMIN_USER(GYM_ID)
);


INSERT INTO USERS (EMAIL, USERTYPE, PASS, FNAME)
VALUES 
('abc@jymspace.com', 'admin', 'testpass1', 'admin_name1'),
('abcd@jymspace.com', 'emp', 'testpass2', 'emp_name1'),
('abce@jymspace.com', 'mem', 'testpass3', 'mem_name1'),
('abcf@jymspace.com', 'admin', 'testpass4', 'admin_name2');

