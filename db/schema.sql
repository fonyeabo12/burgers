

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL auto_increment,
	burger_name varchar(40) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);