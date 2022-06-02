CREATE SCHEMA `dbapicarros`;

use dbapicarros;

CREATE TABLE carros (
	codCarros INT AUTO_INCREMENT,
    modeloCarro VARCHAR(30),
    placaCarro VARCHAR(7),    
    PRIMARY KEY (codCarros)
);


INSERT INTO 	carros (modeloCarro, placaCarro)
	VALUES	('Toyota Corolla', 'EMO4929'),
			('Honda civic', 'ELS1590');
