# Задания 2

SQL - язык, в котором один и тот же запрос можно выполнить множеством способов. Поэтому довольно часто будет встречаться задание, когда надо выполнить один запрос несколькими способами.

## 2.1 Однотабличные запросы

1. Вывести всеми возможными способами имена и фамилии студентов, средний балл которых от 4 до 4.5 (при отсутствии атрибута используйте ALTER TABLE для добавления атрибута score: [ALTER](../../Theory/2_SQL/DDL.md#оператор-alter) или [Документация PostgreSQL](https://www.postgresql.org/docs/current/sql-altertable.html))
2. Познакомиться с функцией [CAST](../../Theory/6_Functions/README.md#CAST). Вывести при помощи неё студентов заданного курса (использовать Like)
3. Вывести всех студентов, отсортировать по убыванию номера группы и имени от а до я
4. Вывести студентов, средний балл которых больше 4 и отсортировать по баллу от большего к меньшему
5. Вывести на экран название и риск 2-х хобби (на своё усмотрение)
6. Вывести id_hobby и id_student которые начали заниматься хобби между двумя заданными датами (выбрать самим) и студенты должны до сих пор заниматься хобби
7. Вывести студентов, средний балл которых больше 4.5 и отсортировать по баллу от большего к меньшему
8. Из запроса №7 вывести несколькими способами на экран [только 5 студентов](../../Theory/5_Queries/README.md#postgresql) с максимальным баллом
9. Выведите хобби и с использованием [условного оператора](../../Theory/6_Functions/README.md#CASE) сделайте риск словами:

   - \>=8 - очень высокий
   - \>=6 & <8 - высокий
   - \>=4 & <8 - средний
   - \>=2 & <4 - низкий
   - <2 - очень низкий

10. Вывести 3 хобби с максимальным риском

## 2.2 Групповые функции

[Подробнее](../../Theory/5_Queries/README.md)

1. Выведите номера групп и количество студентов, обучающихся в них
2. Выведите для каждой группы максимальный средний балл
3. Подсчитать количество студентов с каждой фамилией
4. Подсчитать студентов, которые родились в каждом году
5. Для студентов каждого курса подсчитать средний балл [см. Substr](../../Theory/6_Functions/README.md#SUBSTR)
6. Для студентов заданного курса вывести один номер группы с максимальным средним баллом
7. Для каждой группы подсчитать средний балл, вывести на экран только те номера групп и их средний балл, в которых он менее или равен 3.5. Отсортировать по от меньшего среднего балла к большему.
8. Для каждой группы в одном запросе вывести количество студентов, максимальный балл в группе, средний балл в группе, минимальный балл в группе
9. Вывести студента/ов, который/ые имеют наибольший балл в заданной группе
10. Аналогично 9 заданию, но вывести в одном запросе для каждой группы студента с максимальным баллом.

## 2.3 Многотабличные запросы

[Подробнее](../../Theory/5_Queries/README.md#запросы-с-использованием-нескольких-таблиц)

1. Вывести все имена и фамилии студентов, и название хобби, которым занимается этот студент (student_hobby.student_id равен student.id и student_hobby.hobby_id равен hobby.id.)
2. Вывести информацию о студенте, занимающимся хобби самое продолжительное время.
3. Вывести имя, фамилию, номер зачетки и дату рождения для студентов, средний балл которых выше среднего, а сумма риска всех хобби, которыми он занимается в данный момент, больше 0.9.
4. Вывести фамилию, имя, зачетку, дату рождения, название хобби и длительность в месяцах, для всех завершенных хобби [Диапазон дат](../../Theory/6_Functions/README.md#Date).
5. Вывести фамилию, имя, зачетку, дату рождения студентов, которым исполнилось N полных лет на текущую дату, и которые имеют более 1 действующего хобби.
6. Найти средний балл в каждой группе, учитывая только баллы студентов, которые имеют хотя бы одно действующее хобби.
7. Найти название, риск, длительность в месяцах самого продолжительного хобби из действующих, указав номер зачетки студента.
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

## 2.4 UPDATE & DELETE & INSERT

Ниже представлен скрипт, который создаёт такие же таблицы, с которыми мы работали ранее. Скрипт удаляет старые таблицы, создаёт новую и заполняет её данными. Это нужно для того, чтобы вы могли спокойно поэксперементировать с изменением и удалением данных. Вы можете использовать собственный скрипт и создавать данные в отдельной schema.

```sql
BEGIN;

DROP TABLE IF EXISTS student_hobby;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS hobby;

CREATE TABLE student (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    surname    VARCHAR(255) NOT NULL,
    n_group    INTEGER NOT NULL,
    score      NUMERIC(3,2),
    address    VARCHAR(3000),
    date_birth DATE
);

CREATE TABLE hobby (
    id    SERIAL PRIMARY KEY,
    name  VARCHAR(255) NOT NULL,
    risk  NUMERIC(4,2) NOT NULL
);

CREATE TABLE student_hobby (
    id          SERIAL PRIMARY KEY,
    student_id  INTEGER NOT NULL REFERENCES student(id) ON DELETE CASCADE,
    hobby_id    INTEGER NOT NULL REFERENCES hobby(id) ON DELETE CASCADE,
    date_start  TIMESTAMP NOT NULL,
    date_finish DATE
);

/*
    Добавление данных
*/
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (1, 'Иван', 'Иванов', 2222, '09-09-1999', 4.02);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (2, 'Михаил', 'Михайлов', 4032, '03-12-1997', 3.25);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (3, 'Виктория', 'Николаева', 4011, '11-23-1994', 4.23);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (4, 'Нуль', 'Нулёвый', 2222, '04-05-1998', 4.23);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (5, 'Евгения', 'Сидорова', 2222, '04-05-1996', 3.59);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (6, 'Сергей', 'Иванцов', 3011, '12-24-1995', 3.85);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (7, 'Николай', 'Борисов', 3011, '12-08-2000', 4.22);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (8, 'Виктория', 'Воронцов', 3011, '11-11-1999', 4.63);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (9, 'Марина', 'Кузнецов', 3011, '01-25-1998', 3.11);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (10, 'Джон', 'Уик', 3011, null, 3.45);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (11, 'Виктор', 'Понедельник', 3011, '11-23-1994', 3.98);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (12, 'Алиса', 'Васильченко', 2222, null, 2.98);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (13, 'Артём', 'Иван', 2222, '05-28-1999', 4.03);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (14, 'Шарлотта', 'Калла', 2222, '05-23-1996', 4.67);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (15, 'Юлия', 'Белорукова', 4011, '11-28-1997', 3.58);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (16, 'Татьяна', 'Акимова', 4011, '01-23-1995', 4.98);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (17, 'Ульяна', 'Кайшева', 4011, '03-03-1998', 4.37);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (19, 'Никита', 'Крюков', 4011, '08-04-1999', 2.55);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (20, 'Иван', 'Шаповалов', 4032, '04-29-2002', 2);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (21, 'Анастасия', 'Овсянникова', 4032, '12-31-1998', 4.25);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (22, 'Людмила', 'Иванова', 4032, '05-02-1993', 3.65);
INSERT INTO student (id, name, surname, n_group, date_birth, score) VALUES (23, 'Валентина', 'Сидорова', 4032, null, 3.76);


INSERT INTO hobby (id, risk, name) VALUES (2, 0.3, 'Теннис');
INSERT INTO hobby (id, risk, name) VALUES (5, 0.4, 'Лыжные');
INSERT INTO hobby (id, risk, name) VALUES (7, 0.2, 'Фехтование');
INSERT INTO hobby (id, risk, name) VALUES (1, 0.8, 'Футбол');
INSERT INTO hobby (id, risk, name) VALUES (3, 0.5, 'Баскетбол');
INSERT INTO hobby (id, risk, name) VALUES (4, 0.4, 'Биатлон');
INSERT INTO hobby (id, risk, name) VALUES (6, 0.6, 'Волейбол');
INSERT INTO hobby (id, risk, name) VALUES (8, 0, 'Музыка');


INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (1, 2, 3, '03-15-2004', null);
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (2, 2, 5, '02-18-2009', null);
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (3, 3, 4, '11-12-1993', '12-11-2016');
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (4, 4, 5, '03-14-2004', '05-03-2006');
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (5, 5, 8, '06-18-2014', '08-09-2017');
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (6, 6, 7, '03-19-2018', '03-15-2017');
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (7, 7, 4, '04-07-2017', null);
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (8, 8, 2, '11-09-2018', null);
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (9, 8, 1, '02-28-2019', '03-02-2019');
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (10, 9, 4, '12-19-2009', '12-24-2009');
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (11, 9, 5, '06-18-2013', '09-25-2018');
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (12, 11, 6, '06-18-2014', null);
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (13, 12, 7, '01-23-1999', '04-14-2004');
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (14, 1, 1, '07-19-2017', null);
INSERT INTO student_hobby (id, student_id, hobby_id, date_start, date_finish) VALUES (15, 16, 5, '02-13-2018', null);

COMMIT;
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
7. Добавьте студенту с id 4 хобби с id 5. date_start - '15-11-2009, date_finish - null
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
BEGIN;

ALTER TABLE student_hobby DROP CONSTRAINT student_hobby_student_id_fkey;
ALTER TABLE student_hobby DROP CONSTRAINT student_hobby_hobby_id_fkey;

ALTER TABLE student_hobby ADD CONSTRAINT student_hobby_student_id_fkey
FOREIGN KEY (id)
REFERENCES student (id);

ALTER TABLE student_hobby ADD CONSTRAINT student_hobby_hobby_id_fkey
FOREIGN KEY (hobby_id)
REFERENCES hobby (id);

COMMIT;
```

И выполните все задания выше ещё раз. В некоторых ситуация будет нарушение целостности данных (например, в 1). Решите эти проблемы (не обязательно выполнять задания в один запрос)

## 2.5 Разное

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
BEGIN;

CREATE TABLE user (
  id INTEGER PRIMARY KEY,
  banned VARCHAR(50),
  role VARCHAR(200) CHECK (role IN ('client', 'driver','partner'))
);

CREATE TABLE trip (
  id INTEGER PRIMARY KEY,
  client_id INTEGER REFERENCES user(id),
  driver_id INTEGER REFERENCES user(id),
  city_id INTEGER,
  status VARCHAR(200) CHECK (status in ('completed', 'cancelled_by_driver', 'cancelled_by_client')),
  request_at VARCHAR(50)
);

INSERT INTO user (id, banned, role) VALUES (1, 'No', 'client');
INSERT INTO user (id, banned, role) VALUES (2, 'Yes', 'client');
INSERT INTO user (id, banned, role) VALUES (3, 'No', 'client');
INSERT INTO user (id, banned, role) VALUES (4, 'No', 'client');
INSERT INTO user (id, banned, role) VALUES (10, 'No', 'driver');
INSERT INTO user (id, banned, role) VALUES (11, 'No', 'driver');
INSERT INTO user (id, banned, role) VALUES (12, 'No', 'driver');
INSERT INTO user (id, banned, role) VALUES (13, 'No', 'driver');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (1, 1, 10, 1, 'completed', '2013-10-01');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (2, 2, 11, 1, 'cancelled_by_driver', '2013-10-01');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (3, 3, 12, 6, 'completed', '2013-10-01');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (4, 4, 13, 6, 'cancelled_by_client', '2013-10-01');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (5, 1, 10, 1, 'completed', '2013-10-02');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (6, 2, 11, 6, 'completed', '2013-10-02');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (7, 3, 12, 6, 'completed', '2013-10-02');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (8, 2, 12, 12, 'completed', '2013-10-03');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (9, 3, 10, 12, 'completed', '2013-10-03');
INSERT INTO trip (id, client_id, driver_id, city_id, status, request_at) VALUES (10, 4, 13, 12, 'cancelled_by_driver', '2013-10-03');

COMMIT;
```
