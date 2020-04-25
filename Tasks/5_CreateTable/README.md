# Создание таблиц по спроектированной модели и заполнение их данными

В результате выполнения данного задания должен получиться .sql файл, с созданием всех таблиц и их заполнение. Краткий пример в этой же папке.

## Создание

### Типы данных

https://www.postgresql.org/docs/12/datatype.html

**Numeric:**
https://www.postgresql.org/docs/12/datatype-numeric.html

**Используйте тип serial для первичного ключа!**
В PostgreSQL serial - автоинкрементированный тип, т.е. он будет увеличиваться на 1 с каждой добавленной записью. Такое поведение можно сделать при помощи Integer, но тогда придётся в ручную создать последовательность. Serial не совсем тип данных, это скорее короткая запись. Поэтому в таблицах, которые ссылаются на таблицу с serial должен использоваться уже тип integer (bigserial -> bigInt соответственно)!!!

https://www.postgresql.org/docs/12/datatype-numeric.html#DATATYPE-SERIAL

**Date/Time:**
timestamp without time zone
timestamp with time zone
date
time without time zone
time with time zone
interval

**character:**
varchar(n) - текст с n - максимальным значением символов
text - текст без ограничений длины

### Create

#### PRIMARY KEY

Создание первичного ключа и дополнительных ограничений на атрибуте:

Так создать первичный ключ можно, если он не составной и не требуется лично установить название ключа (также в примере присутствую NOT NULL (делает атрибут не нулевым) и UNIQUE (значения атрибута должны быть только уникальными)):

```sql
CREATE TABLE supplier (
	id serial PRIMARY KEY,
	name varchar(255),
	city varchar(100),
	street varchar(100),
	house varchar(20),
	phone varchar(20),
	email varchar(100) NOT NULL UNIQUE
)
```

Так можно создать первичный ключ, если требуется указать составной, т.е. (PRIMARY KEY (key_id, key2_id)) (пример просто аналогичный предыдущему):

```sql
CREATE TABLE supplier (
	id serial,
	name varchar(255),
	city varchar(100),
	street varchar(100),
	house varchar(20),
	phone varchar(20),
	email varchar(100) NOT NULL UNIQUE,
	PRIMARY KEY(id)
)
```

Если требуется задать название ключа:

```sql
CREATE TABLE supplier (
	id serial,
	name varchar(255),
	city varchar(100),
	street varchar(100),
	house varchar(20),
	phone varchar(20),
	email varchar(100) NOT NULL UNIQUE,
	CONSTRAINT supplier_id_pk PRIMARY KEY (id)
)
```

#### Foreign Key

Допустим, мы хотим добавить таблицу supplier_info, в которой есть ссылка на таблицу supplier. Это можно сделать следующими способами:

1. На той же строчке, что и атрибут, без упоминания атрибута с которым связываем. Удобно, когда в supplier не составной первичный ключ. (Обратите внимание, что supplier_id - integer, а не serial! Это важно)

```sql
CREATE TABLE supplier_info (
	id serial PRIMARY KEY,
	supplier_id integer REFERENCES supplier,
	info varchar(5000)
)
```

2. На той же строке, но с указанием атрибута, с которым связываем

```sql
CREATE TABLE supplier_info (
	id serial PRIMARY KEY,
	supplier_id integer REFERENCES supplier (id),
	info varchar(5000)
)
```

3. Внутри Create Table, но уже после указания атрибутов. Этот вариант даёт возможность самостоятельно назвать внешний ключ

```sql
CREATE TABLE supplier_info (
	id serial PRIMARY KEY,
	supplier_id integer,
	info varchar(5000),
	CONSTRAINT supplier_info_supplier_id_fk FOREIGN KEY (supplier_id)
		REFERENCES supplier (id)
)
```

## Заполнение данными

```sql
INSERT INTO supplier (name, city, street, house, phone, email)
VALUES ('Шашкова, Лыткин and Мухин', 'Якушеваchester', 'Марина пл.', '181', '(958)743-94-34', '.19@ya.ru');

```

Более подробно:

https://www.postgresql.org/docs/12/sql-insert.html

## Транзакции

Также прочитайте про транзакции (Theory/2_SQL/TCL).
В данном задании файл .sql должен начинаться с BEGIN, а заканчиваться COMMIT. Все операции внутри этой части - непрерывная транзакция.
