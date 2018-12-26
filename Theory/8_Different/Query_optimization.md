https://docs.oracle.com/cd/E11882_01/server.112/e41573/optimops.htm#PFGRF94582

# Оптимизатор запросов

## View merging

## Predicate pushing

## Subquery Unnesting

Оптимизатор запросов преобразует вложенные запросы в эквивалент с соединением таблиц.

Например, мы хотим вывести всех студентов, которые занимаются в данный момент каким-либо хобби

Вариант с вложенностью.

```sql
SELECT *
FROM students
WHERE n_z IN
    (SELECT n_z
     FROM stud_hobby
     WHERE date_finish IS NULL)
```

Да, оптимизатор запросов преобразует это в соединение таблиц через JOIN.

**Используйте в подобных запросах сразу синтаксис с соединением таблиц!**

```sql
SELECT students.*
FROM students, stud_hobby
WHERE students.n_z = stud_hobby.n_z and stud_hobby.date_finish is null
```

Именно в такой вид будет преобразован запрос выше. Но используйте сразу его. Обязательно!

## Query Rewrite with Materialized Views
