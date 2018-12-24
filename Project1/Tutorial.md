# Пример создания приложения в apex oracle

Допустим, у нас имеются предварительно спроектированные и созданные таблицы: students, stud_hobby, hobby

```sql
CREATE TABLE  "STUDENTS"
   (	"N_ZACH" NUMBER(5,0),
	"NAME" VARCHAR2(150),
	"SURNAME" VARCHAR2(150),
	"N_GROUP" NUMBER(4,0),
	"ADDRESS" VARCHAR2(200),
	"DATE_BIRTH" DATE,
	"AVERAGE_SCORE" NUMBER(3,2),
	 CONSTRAINT "STUDENTS_PK" PRIMARY KEY ("N_ZACH")
  USING INDEX  ENABLE
   )
/
CREATE TABLE  "HOBBY"
   (	"ID" NUMBER(5,0),
	"NAME" VARCHAR2(150),
	"RISK" NUMBER(3,2),
	 CONSTRAINT "HOBBI_PK" PRIMARY KEY ("ID")
  USING INDEX  ENABLE
   )
/
CREATE TABLE  "STUD_HOBBY"
   (	"N_ZACH" NUMBER(5,0),
	"ID" NUMBER(5,0),
	"DATE_START" DATE,
	"DATE_FINISH" DATE,
	 CONSTRAINT "STUD_HOBBY_CON_PK" PRIMARY KEY ("N_ZACH", "ID")
  USING INDEX  ENABLE
   )
/
ALTER TABLE  "STUD_HOBBY" ADD CONSTRAINT "STUD_HOBBI_FK" FOREIGN KEY ("N_ZACH")
	  REFERENCES  "STUDENTS" ("N_ZACH") ENABLE
/
ALTER TABLE  "STUD_HOBBY" ADD CONSTRAINT "STUD_HOBBI_FK1" FOREIGN KEY ("ID")
	  REFERENCES  "HOBBY" ("ID") ENABLE
/
```

Создадим новое приложение

![img]()

New Application

![img](https://yadi.sk/i/evmXWnIjOY-Rqg)

![img]()

![img]()

![img]()

![img]()

![img]()
