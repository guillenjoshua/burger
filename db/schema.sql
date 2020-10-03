
CREATE DATABASE burgers_db; 

USE burgers_db;


CREATE TABLE burgers (

    ID INT NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN default false; 
    PRIMARY KEY (id)

);

