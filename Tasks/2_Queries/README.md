# Задания 2

SQL - язык, в котором один и тот же запрос можно выполнить множеством способов. Поэтому довольно часто будет встречаться задание, когда надо выполнить один запрос несколькими способами.

Можно писать запросы с входным параметром, который задаётся пользователем:

```sql
Select *
from students
where n_group = :n_group
```

Появится окно с возможностью ввода значения, которое будет использовано в запросе.

## Однотабличные запросы

1. Вывести всеми возможными способами имена и фамилии студентов, средний балл которых от 4 до 4.5
2. Познакомиться с функцией [CAST](../../Theory/6_Functions/README.md#CAST). Вывести при помощи неё студентов заданного курса (использовать Like)
3. Вывести всех студентов, отсортировать по убыванию номера группы и имени от а до я
4. Вывести студентов, средний балл которых больше 4 и отсортировать по баллу от большего к меньшему
5. Вывести на экран название и риск футбола и хоккея
6. Вывести id хобби и id студента которые начали заниматься хобби между двумя заданными датами (выбрать самим) и студенты должны до сих пор заниматься хобби
7. Вывести студентов, средний балл которых больше 4.5 и отсортировать по баллу от большего к меньшему
8. Из запроса №7 вывести несколькими способами на экран [только 5 студентов](../../Theory/5_Queries/README.md#postgresql) с максимальным баллом
9. Выведите хобби и с использованием [условного оператора](../../Theory/6_Functions/README.md#CASE) сделайте риск словами:

   - \>=8 - очень высокий
   - \>=6 & <8 - высокий
   - \>=4 & <8 - средний
   - \>=2 & <4 - низкий
   - <2 - очень низкий

10. Вывести 3 хобби с максимальным риском

## Групповые функции

[Подробнее](../../Theory/5_Queries/README.md)

1. Выведите на экран номера групп и количество студентов, обучающихся в них
2. Выведите на экран для каждой группы максимальный средний балл
3. Подсчитать количество студентов с каждой фамилией
4. Подсчитать студентов, которые родились в каждом году (пока не актуально)
5. Для студентов каждого курса подсчитать средний балл
6. Для студентов заданного курса вывести один номер групп с максимальным средним баллом
7. Для каждой группы подсчитать средний балл, вывести на экран только те номера групп и их средний балл, в которых он менее или равен 3.5. Отсортировать по от меньшего среднего балла к большему.
8. Для каждой группы в одном запросе вывести количество студентов, максимальный балл в группе, средний балл в группе, минимальный балл в группе
9. Вывести студента/ов, который/ые имеют наибольший балл в заданной группе
10. Аналогично 10 заданию, но вывести в одном запросе для каждой группы студента с максимальным баллом.

## Многотабличные запросы

[Подробнее](../../Theory/5_Queries/README.md#запросы-с-использованием-нескольких-таблиц)

1. Вывести все имена и фамилии студентов, и название хобби, которым занимается этот студент.
2. Вывести информацию о студенте, занимающимся хобби самое продолжительное время.
3. Вывести имя, фамилию, номер зачетки и дату рождения для студентов, средний балл которых выше среднего, а сумма риска всех хобби, которыми он занимается в данный момент, больше 0.9.
4. Вывести фамилию, имя, зачетку, дату рождения, название хобби и длительность в месяцах, для всех завершенных хобби.
5. Вывести фамилию, имя, зачетку, дату рождения студентов, которым исполнилось N полных лет на текущую дату, и которые имеют более 1 действующего хобби.
6. Найти средний балл в каждой группе, учитывая только баллы студентов, которые имеют хотя бы одно действующее хобби.
7. Найти название, риск, длительность в месяцах самого продолжительного хобби из действующих, указав номер зачетки студента и номер его группы.
8. Найти все хобби, которыми увлекаются студенты, имеющие максимальный балл.
9. Найти все действующие хобби, которыми увлекаются троечники 2-го курса.
10. Найти номера курсов, на которых более 50% студентов имеют более одного действующего хобби.
11. Вывести номера групп, в которых не менее 60% студентов имеют балл не ниже 4.
12. Для каждого курса подсчитать количество различных действующих хобби на курсе.
13. Вывести номер зачётки, фамилию и имя, дату рождения и номер курса для всех отличников, не имеющих хобби. Отсортировать данные по возрастанию в пределах курса по убыванию даты рождения.
14. [Создать представление](../../Theory/4_Views), в котором отображается вся информация о студентах, которые продолжают заниматься хобби в данный момент и занимаются им как минимум 5 лет.
15. Для каждого хобби вывести количество людей, которые им занимаются.
16. Вывести ИД самого популярного хобби.
17. Вывести всю информацию о студентах, занимающихся самым популярным хобби.
18. Вывести ИД 3х хобби с максимальным риском.
19. Вывести 10 студентов, которые занимаются одним (или несколькими) хобби самое продолжительно время.
20. Вывести номера групп (без повторений), в которых учатся студенты из предыдущего запроса.
21. Создать представление, которое выводит номер зачетки, имя и фамилию студентов, отсортированных по убыванию среднего балла.
22. Представление: найти каждое популярное хобби на каждом курсе.
23. Представление: найти хобби с максимальным риском среди самых популярных хобби на 2 курсе.
24. Представление: для каждого курса подсчитать количество студентов на курсе и количество отличников.
25. Представление: самое популярное хобби среди всех студентов.
26. Создать обновляемое представление.
27. Для каждой буквы алфавита из имени найти максимальный, средний и минимальный балл. (Т.е. среди всех студентов, чьё имя начинается на А (Алексей, Алина, Артур, Анджела) найти то, что указано в задании. Вывести на экран тех, максимальный балл которых больше 3.6
28. Для каждой фамилии на курсе вывести максимальный и минимальный средний балл. (Например, в университете учатся 4 Иванова (1-2-3-4). 1-2-3 учатся на 2 курсе и имеют средний балл 4.1, 4, 3.8 соответственно, а 4 Иванов учится на 3 курсе и имеет балл 4.5. На экране должно быть следующее:
    2 Иванов 4.1 3.8
    3 Иванов 4.5 4.5
29. Для каждого года рождения подсчитать количество хобби, которыми занимаются или занимались студенты.
30. Для каждой буквы алфавита в имени найти максимальный и минимальный риск хобби.
31. Для каждого месяца из даты рождения вывести средний балл студентов, которые занимаются хобби с названием «Футбол»
32. Вывести информацию о студентах, которые занимались или занимаются хотя бы 1 хобби в следующем формате: Имя: Иван, фамилия: Иванов, группа: 1234
33. Найдите в фамилии в каком по счёту символа встречается «ов». Если 0 (т.е. не встречается, то выведите на экран «не найдено».
34. Дополните фамилию справа символом # до 10 символов.
35. При помощи функции удалите все символы # из предыдущего запроса.
36. Выведите на экран сколько дней в апреле 2018 года.
37. Выведите на экран какого числа будет ближайшая суббота.
38. Выведите на экран век, а также какая сейчас неделя года и день года.
39. Выведите всех студентов, которые занимались или занимаются хотя бы 1 хобби. Выведите на экран Имя, Фамилию, Названию хобби, а также надпись «занимается», если студент продолжает заниматься хобби в данный момент или «закончил», если уже не занимает.
40. Для каждой группы вывести сколько студентов учится на 5,4,3,2. Использовать обычное математическое округление. Итоговый результат должен выглядеть примерно в таком виде:

    | SCORE | 2222 | 3011 | 4011 | 4032 |
    | ----- | ---- | ---- | ---- | ---- |
    | 2     | 0    | 0    | 0    | 1    |
    | 3     | 1    | 2    | 1    | 1    |
    | 4     | 4    | 3    | 3    | 3    |
    | 5     | 1    | 1    | 1    | 0    |

## UPDATE & DELETE & INSERT

Ниже представлен скрипт, который создаёт такие же таблицы, с которыми мы работали ранее, только с символом \$ в конце. Скрипт удаляет старую таблицу, создаёт новую и заполняет её данными. Его можно добавить в SQL Workshop - SQL Scripts и запускать каждый раз, когда понадобиться. Это нужно для того, чтобы вы могли спокойно поэксперементировать с изменением и удалением данных.

**Обратите внимание на дату!!!**

```sql
/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
В приведённом скрипте формат даты - DD-MM-YYYY
Если у вас стоит другой - будет ошибка.
Для изменения даты зайдите в правый верхний угол - preferences.
В DEFAULT DATE FORMATE введите DD-MM-YYYY
Сохраните и перезайдите в apex.oracle
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/
/*
    Удаление таблиц, последовательностей, триггеров
*/
DROP TABLE STUDENTS_HOBBIES$;
DROP SEQUENCE STUDENTS_HOBBIES$_SEQ;
DROP TABLE STUDENTS$;
DROP SEQUENCE STUDENTS$_SEQ;
DROP TABLE HOBBIES$;
DROP SEQUENCE HOBBIES$_SEQ;
/

/*
    Создание ранее используемых таблиц с $ в конце
*/
CREATE table STUDENTS$ (
    N_Z        NUMBER(5,0),
    NAME       VARCHAR2(255) NOT NULL,
    SURNAME    VARCHAR2(255),
    N_GROUP    NUMBER(4,0) NOT NULL,
    SCORE      NUMBER(3,2) NOT NULL,
    ADDRESS    VARCHAR2(1000),
    DATE_BIRTH DATE,
    constraint  STUDENTS$_PK primary key (N_Z)
)
/

CREATE sequence STUDENTS$_SEQ
/

CREATE trigger BI_STUDENTS$
  before insert on STUDENTS$
  for each row
begin
  if :NEW.N_Z is null then
    select STUDENTS$_SEQ.nextval into :NEW.N_Z from sys.dual;
  end if;
end;
/

alter table STUDENTS$ add
constraint SCORE_CHECK
check (SCORE >= 2 and SCORE <=5)
/

CREATE table HOBBIES$ (
    ID        NUMBER(5,0),
    NAME       VARCHAR2(255) NOT NULL,
    RISK    NUMBER(4,2) NOT NULL,
    constraint  HOBBIES$_PK primary key (ID)
)
/

CREATE sequence HOBBIES$_SEQ
/

CREATE trigger BI_HOBBIES$
  before insert on HOBBIES$
  for each row
begin
  if :NEW.ID is null then
    select HOBBIES$_SEQ.nextval into :NEW.ID from sys.dual;
  end if;
end;
/

alter table HOBBIES$ add
constraint RISK_CHECK
check (RISK >= 0 and RISK <= 10)
/

CREATE table STUDENTS_HOBBIES$ (
    ID          NUMBER(5,0) NOT NULL,
    N_Z         NUMBER(5,0) NOT NULL,
    HOBBY_ID    NUMBER(5,0) NOT NULL,
    DATE_START  DATE NOT NULL,
    DATE_FINISH DATE,
    constraint  STUDENTS_HOBBIES$_PK primary key (ID)
)
/

CREATE sequence STUDENTS_HOBBIES$_SEQ
/

CREATE trigger BI_STUDENTS_HOBBIES$
  before insert on STUDENTS_HOBBIES$
  for each row
begin
  if :NEW.ID is null then
    select STUDENTS_HOBBIES$_SEQ.nextval into :NEW.ID from sys.dual;
  end if;
end;
/

ALTER TABLE STUDENTS_HOBBIES$ ADD CONSTRAINT STUDENTS_HOBBIES$_FK
FOREIGN KEY (N_Z)
REFERENCES STUDENTS$ (N_Z)
ON DELETE CASCADE;

/
ALTER TABLE STUDENTS_HOBBIES$ ADD CONSTRAINT STUDENTS_HOBBIES$_FK1
FOREIGN KEY (HOBBY_ID)
REFERENCES HOBBIES$ (ID)
ON DELETE CASCADE;

/


/*
    Добавление данных
*/
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (1,'Иван','Иванов',2222,'09-09-1999',4.02);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (2,'Михаил','Михайлов',4032,'03-12-1997',3.25);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (3,'Виктория','Николаева',4011,'23-11-1994',4.23);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (4,'Нуль','Нулёвый',2222,'04-05-1998',4.23);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (5,'Евгения','Сидорова',2222,'04-05-1996',3.59);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (6,'Сергей','Иванцов',3011,'24-12-1995',3.85);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (7,'Николай','Борисов',3011,'12-08-2000',4.22);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (8,'Виктория','Воронцов',3011,'11-11-1999',4.63);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (9,'Марина','Кузнецов',3011,'25-01-1998',3.11);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (10,'Джон','Уик',3011,'',3.45);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (11,'Виктор','Понедельник',3011,'23-11-1994',3.98);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (12,'Алиса','Васильченко',2222,'',2.98);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (13,'Артём','Иван',2222,'28-05-1999',4.03);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (14,'Шарлотта','Калла',2222,'25-05-1996',4.67);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (15,'Юлия','Белорукова',4011,'28-11-1997',3.58);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (16,'Татьяна','Акимова',4011,'23-01-1995',4.98);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (17,'Ульяна','Кайшева',4011,'03-03-1998',4.37);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (19,'Никита','Крюков',4011,'08-04-1999',2.55);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (20,'Иван','Шаповалов',4032,'29-04-2002',2);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (21,'Анастасия','Овсянникова',4032,'31-12-1998',4.25);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (22,'Людмила','Иванова',4032,'05-02-1993',3.65);
INSERT INTO STUDENTS$ (n_z, name, surname, n_group, date_birth, score) VALUES (23,'Валентина','Сидорова',4032,'',3.76);


INSERT INTO HOBBIES$ (id, risk, name) VALUES (2,0.3,'Теннис');
INSERT INTO HOBBIES$ (id, risk, name) VALUES (5,0.4,'Лыжные');
INSERT INTO HOBBIES$ (id, risk, name) VALUES (7,0.2,'Фехтование');
INSERT INTO HOBBIES$ (id, risk, name) VALUES (1,0.8,'Футбол');
INSERT INTO HOBBIES$ (id, risk, name) VALUES (3,0.5,'Баскетбол');
INSERT INTO HOBBIES$ (id, risk, name) VALUES (4,0.4,'Биатлон');
INSERT INTO HOBBIES$ (id, risk, name) VALUES (6,0.6,'Волейбол');
INSERT INTO HOBBIES$ (id, risk, name) VALUES (8,0,'Музыка');


INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (1,2,3,'15-03-2004','');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (2,2,5,'18-02-2009','');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (3,3,4,'12-11-1993','11-12-2016');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (4,4,5,'14-03-2004','03-05-2006');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (5,5,8,'18-06-2014','09-08-2017');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (6,6,7,'19-03-2018','15-03-2017');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (7,7,4,'07-04-2017','');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (8,8,2,'09-11-2018','');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (9,8,1,'28-02-2019','02-03-2019');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (10,9,4,'19-12-2009','24-12-2009');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (11,9,5,'18-06-2013','25-09-2018');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (12,11,6,'18-06-2014','');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (13,12,7,'23-01-1999','14-04-2004');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (14,1,1,'19-07-2017','');
INSERT INTO STUDENTS_HOBBIES$ (id, n_z, hobby_id, date_start, date_finish) VALUES (15,16,5,'13-02-2018','');
```

## Задания на изменение/удаление/добавление

Все задания выполняйте на созданных при помощи скрипта выше таблицах.

Задания не всегда идут по повышению уровня сложности. Поэтому не обязательно выполнять их по порядку.

1. Удалите всех студентов с неуказанной датой рождения
2. Измените дату рождения всех студентов, с неуказанной датой рождения на 01-01-1999
3. Удалите из таблицы студента с номером зачётки 21
4. Уменьшите риск хобби, которым занимается наибольшее количество человек
5. Добавьте всем студентам, которые занимаются хотя бы одним хобби 0.01 балл
6. Удалите все завершенные хобби студентов
7. Добавьте студенту с n_z 4 хобби с id 5. date_start - '15-11-2009, date_finish - null
8. Напишите запрос, который удаляет самую раннюю из студентов_хобби запись, в случае, если студент делал перерыв в хобби (т.е. занимался одним и тем же несколько раз)
9. Поменяйте название хобби всем студентам, кто занимается футболом - на бальные танцы, а кто баскетболом - на вышивание крестиком.
10. Добавьте в таблицу хобби новое хобби с названием "Учёба"
11. У всех студентов, средний балл которых меньше 3.2 поменяйте во всех хобби (если занимается чем-либо) и добавьте (если ничем не занимается), что студент занимается хобби из 10 задания
12. Переведите всех студентов не 4 курса на курс выше
13. Удалите из таблицы студента с номером зачётки 2
14. Измените средний балл у всех студентов, которые занимаются хобби более 10 лет на 5.00
15. Удалите информацию о хобби, если студент начал им заниматься раньше, чем родился

## Задания на изменение/удаление/добавление без каскадного удаления/изменения

В предыдущих запросах внешний ключ был создан с параметром `ON DELETE CASCADE`.

Поменяйте в скрипте на эти строки:

```sql
ALTER TABLE STUDENTS_HOBBIES$ ADD CONSTRAINT STUDENTS_HOBBIES$_FK
FOREIGN KEY (N_Z)
REFERENCES STUDENTS$ (N_Z)

/
ALTER TABLE STUDENTS_HOBBIES$ ADD CONSTRAINT STUDENTS_HOBBIES$_FK1
FOREIGN KEY (HOBBY_ID)
REFERENCES HOBBIES$ (ID)
```

И выполните все задания выше ещё раз. В некоторых ситуация будет нарушение целостности данных (например, в 1). Решите эти проблемы (не обязательно выполнять задания в один запрос)

## Разное

1. Вывести ФИО и ранк студентов в зависимости от их среднего балла. Если существует 2 и более студентов с одинаковым баллом, то они должны идти под одинаковым номером. Сделать 2 варианта решения:
   - Без пропусков номеров (не важно сколько студентов имеют одинаковый балл, следующий студент с отличающимся баллом будет иметь следующий ранк (6 студентов с одинаковы баллом и ранком - 6, следующий студент ранк 7))
   - С пропуском номеров (если 3 студента 6 номер, то следующий должен быть иметь 9 ранк)

Пример вывода результата для 1 варианта:

| NAME      | SURNAME     | AVERAGE_SCORE | RANK |
| --------- | ----------- | ------------- | ---- |
| Татьяна   | Акимова     | 4.98          | 1    |
| Шарлотта  | Калла       | 4.67          | 2    |
| Виктория  | Воронцов    | 4.63          | 3    |
| Ульяна    | Кайшева     | 4.37          | 4    |
| Анастасия | Овсянникова | 4.25          | 5    |
| Виктория  | Николаева   | 4.23          | 6    |
| Нуль      | Нулёвый     | 4.23          | 6    |
| Николай   | Борисов     | 4.22          | 7    |
| Артём     | Иван        | 4.03          | 8    |
| Иван      | Иванов      | 4.02          | 9    |

2. Существует таблица заказов и таблица пользователей. Client_id & Driver_id внешние ключи на Users_id в таблице пользователей. Статус может принимать следующие значени: `('completed', 'cancelled_by_driver', 'cancelled_by_client')`. Атрибут Role может принимать значение: `('client', 'driver', 'partner')`. **Задание:** напишите запрос, который позволяет найти коэффициент отмены запросов незабаненными пользователями в заданный период 1 октября 2013 и 3 октября 2013. Запрос должен вернуть следующий результат для готовых данных (данные в таблице - не единственный вариант проверки написанного кода, будьте внимательнее. Главное правильно решить задачу, а не вывести правильный результа):

   | Day        | Cancellation Rate |
   | ---------- | ----------------- |
   | 2013-10-01 | 0.33              |
   | 2013-10-02 | 0.00              |
   | 2013-10-03 | 0.50              |

   Скрипт создания таблиц и добавления данных:

   ```sql
   CREATE TABLE  "USERS"
   ("USERS_ID" NUMBER,
   "BANNED" VARCHAR2(50),
   "ROLE" VARCHAR2(200),
   CONSTRAINT "USERS_CHECK_ROL" CHECK ( "ROLE" in ('client', 'driver','partner')) ENABLE,
   CONSTRAINT "USERS_CON" PRIMARY KEY ("USERS_ID")
   USING INDEX  ENABLE
   )
   /
   CREATE TABLE  "TRIPS"
   ("ID" NUMBER,
   "CLIENT_ID" NUMBER,
   "DRIVER_ID" NUMBER,
   "CITY_ID" NUMBER,
   "STATUS" VARCHAR2(200),
   "REQUEST_AT" VARCHAR2(50),
   CONSTRAINT "TRIPS_CHECK_CON" CHECK ( "STATUS" in ('completed', 'cancelled_by_driver', 'cancelled_by_client')) ENABLE,
   CONSTRAINT "TRIPS_CON" PRIMARY KEY ("ID")
   USING INDEX  ENABLE
   )
   /
   ALTER TABLE  "TRIPS" ADD CONSTRAINT "TRIPS_FK1" FOREIGN KEY ("CLIENT_ID")
       REFERENCES  "USERS" ("USERS_ID") ENABLE
   /
   ALTER TABLE  "TRIPS" ADD CONSTRAINT "TRIPS_FK2" FOREIGN KEY ("DRIVER_ID")
       REFERENCES  "USERS" ("USERS_ID") ENABLE
   /
   insert into Users (Users_Id, Banned, Role) values ('1', 'No', 'client');
   insert into Users (Users_Id, Banned, Role) values ('2', 'Yes', 'client');
   insert into Users (Users_Id, Banned, Role) values ('3', 'No', 'client');
   insert into Users (Users_Id, Banned, Role) values ('4', 'No', 'client');
   insert into Users (Users_Id, Banned, Role) values ('10', 'No', 'driver');
   insert into Users (Users_Id, Banned, Role) values ('11', 'No', 'driver');
   insert into Users (Users_Id, Banned, Role) values ('12', 'No', 'driver');
   insert into Users (Users_Id, Banned, Role) values ('13', 'No', 'driver');
    insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('1', '1', '10', '1', 'completed', '2013-10-01');
   insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('2', '2', '11', '1', 'cancelled_by_driver', '2013-10-01');
   insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('3', '3', '12', '6', 'completed', '2013-10-01');
   insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('4', '4', '13', '6', 'cancelled_by_client', '2013-10-01');
   insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('5', '1', '10', '1', 'completed', '2013-10-02');
   insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('6', '2', '11', '6', 'completed', '2013-10-02');
   insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('7', '3', '12', '6', 'completed', '2013-10-02');
   insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('8', '2', '12', '12', 'completed', '2013-10-03');
   insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('9', '3', '10', '12', 'completed', '2013-10-03');
   insert into Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) values ('10', '4', '13', '12', 'cancelled_by_driver', '2013-10-03');
   ```
