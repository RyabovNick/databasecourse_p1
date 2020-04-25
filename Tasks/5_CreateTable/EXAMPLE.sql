BEGIN;
CREATE TABLE supplier (
	id serial PRIMARY KEY,
	name varchar(255),
	city varchar(100),
	street varchar(100),
	house varchar(20),
	phone varchar(20),
	email varchar(100) NOT NULL UNIQUE
);

CREATE TABLE supplier_info (
	id serial PRIMARY KEY,
	supplier_id integer REFERENCES supplier,
	info varchar(5000)
);

INSERT INTO supplier (name, city, street, house, phone, email)
VALUES
('Шашкова, Лыткин and Мухин', 'Якушеваchester', 'Марина пл.', '181', '(958)743-94-34', '.19@ya.ru'), 
('Гордеева Трейд', 'West Ярославland', 'Денис площадь', '22', '(980)604-57-73', '12@yahoo.com'),
('Степанова Снаб', 'Олегbury', 'Котов площадь', '123', '(911)719-80-26', '32@ya.ru'),
('Якушев - Мишин', 'Port Матвейville', 'Арина улица', '55', '(961)087-10-61', '.@yahoo.com'),        
('Журавлева Снаб', 'Волковаhaven', 'Муравьева пл.', '197', '(986)746-39-83', '.57@hotmail.com'),
('Ларионова - Игнатова', 'East Виктор', 'Русакова проспект', '67', '(935)120-84-94', '_@gmail.com'), 
('Егоров Торг', 'Алексейville', 'Авдеева ул.', '73', '(928)373-01-34', '_65@yandex.ru'),
('Михайлова, Кудрявцев and Блинов', 'Port Галинаberg', 'Орлов пл.', '85', '(912)138-30-63', '.@yahoo.com'),
('Голубева Торг', 'New Никита', 'Сергей пр.', '117', '(951)491-45-06', '_4@hotmail.com'),
('Антонов - Костина', 'Антоновbury', 'Дмитрий пр.', '116', '(967)609-39-27', '12@hotmail.com');


COMMIT;