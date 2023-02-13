# Создание первых таблиц

Описание слабоформализованной задачи:

Необходимо хранить студентов - их имя, фамилию, номер группы, средний балл, адрес и дату рождения, а также каждый студент может заниматься разными хобби, у которого есть риск. Студент может как заниматься хобби в данный момент, так и уже закончить. Надо знать когда он начал и когда закончил.

Формализованное описание:

Для решения поставленной задачи нам понадобится таблица студентов. Нам необходимо как-то идентифицировать студента. Конечно, мы можем это сделать по имени, фамилии и прочим характеристикам, но это не даст нам 100% гарантии, что не встретится точно такой же другой студент. Поэтому введём уникальный атрибут - номер зачётки. И весь список атрибутов выглядит следующим образом:

- номер зачётки (id)
- имя
- фамилия
- номер группы
- средний балл
- город
- дата рождения
- почта

Также необходимо хранить хобби. Говорится, что у него есть риск. Аналогично - нам нужно уникально идентифицировать хобби. Сделаем первичным ключем id.

- id
- название хобби
- риск

На рисунке ниже можно увидеть ERR диаграмму, сделаную в MySQL Workbench. Тут немного отличаются типы данных от Oracle, но в целом суть одинаковая.

![img1](./img/2018-12-25_17-04-33.png)

Наши таблицы необходимо связать. Если мы подумаем логически, то студент может заниматься множеством хобби, однако также и одним хобби может заниматься множество студентов. Получается, между двумя таблицами связь многие ко многим. Такую связь практически нереально реализовать на практике. Тут она реализуется при помощи двух связей один ко многим. Для этого нам необходимо создать 3-ую таблицу. В 3 таблице есть составной первичный ключ (номер зачётки и ид хобби), а также 2 атрибута - дата начала и окончания (прим. тут ошибка на скрине, может потом поправлю. Тип данных этих атрибутов должен быть DATE).

![img2](./img/2018-12-25_17-15-33.png)

Составной первичный ключ на номер зачётки и ид хобби может создать некую проблему. При таком проектирование получается, что в таблице не может присутствовать более 1 одинаковой пары id & id. Получается, если студент начал заниматься хобби, закончил, а потом решил заняться снова, то заново добавить будет невозможно.

В таком случае есть выход - создать id для первичного ключа (см картинку ниже (тут такая же проблема - date_start, date_finish должны иметь тип DATE))

![img3](./img/2018-12-25_17-33-56.png)

## Создание таблиц в PostgreSQL

### Типы данных

<https://www.postgresql.org/docs/12/datatype.html>

**Numeric:**
<https://www.postgresql.org/docs/12/datatype-numeric.html>

**Используйте тип serial для первичного ключа!**
В PostgreSQL serial - автоинкрементированный тип, т.е. он будет увеличиваться на 1 с каждой добавленной записью. Такое поведение можно сделать при помощи Integer, но тогда придётся в ручную создать последовательность. Serial не совсем тип данных, это скорее короткая запись. Поэтому в таблицах, которые ссылаются на таблицу с serial должен использоваться уже тип integer (bigserial -> bigInt соответственно)!!!

<https://www.postgresql.org/docs/12/datatype-numeric.html#DATATYPE-SERIAL>

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

<https://www.postgresql.org/docs/12/sql-insert.html>

```sql
BEGIN;

CREATE TABLE student (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    surname    VARCHAR(255) NOT NULL,
    n_group    INTEGER NOT NULL,
    score      NUMERIC(3,2),
    address    VARCHAR(3000),
    date_birth DATE,
    email      VARCHAR(255) UNIQUE
);

CREATE TABLE hobby (
    id    SERIAL PRIMARY KEY,
    name  VARCHAR(255) NOT NULL,
    risk  INTEGER NOT NULL CHECK (risk >= 1 AND risk <=10)
);

CREATE TABLE student_hobby (
    id          SERIAL PRIMARY KEY,
    student_id  INTEGER NOT NULL REFERENCES student(id),
    hobby_id    INTEGER NOT NULL REFERENCES hobby(id),
    date_start  DATE NOT NULL,
    date_finish DATE
);

COMMIT;
```
