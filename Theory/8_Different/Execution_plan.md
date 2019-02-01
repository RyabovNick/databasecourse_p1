# План выполнения запросов

[Оптимизатор запросов](./Query_optimization.md) не всегда может дать идеальное решение. Часто бывает, что запрос необходимо переписать другим образом, чтобы увеличить скорость его работы.

Посмотреть план выполнения запроса в apex.oracle можно в sql commands на вкладке explain.

В MySQL Workbench - Query - Explain current statement

Либо в Oracle можно сделать так:

```sql
EXPLAIN PLAN FOR
  SELECT * FROM students;
```

а затем `SELECT PLAN_TABLE_OUTPUT FROM TABLE(DBMS_XPLAN.DISPLAY());`

| Operation        | Options      | Object   | Rows | Time | Cost | Bytes | FilterPredicates | AccessPredicates |
| ---------------- | ------------ | -------- | ---- | ---- | ---- | ----- | ---------------- | ---------------- |
| SELECT STATEMENT |              |          | 3    | 1    | 3    | 153   |                  |                  |
| TABLE ACCESS     | STORAGE FULL | STUDENTS | 3    | 1    | 3    | 153   |                  |                  |

В данном примере вы должны увидеть нечто похожее.

У нас на таблицу студенты есть индекс.

Давайте сделаем обычный запрос

```sql
select name from students
where n_z = 2
```

и зайдём во вкладку Explain

| Operation        | Options        | Object      | Rows | Time | Cost | Bytes | FilterPredicates | AccessPredicates |
| ---------------- | -------------- | ----------- | ---- | ---- | ---- | ----- | ---------------- | ---------------- |
| SELECT STATEMENT |                |             | 1    | 1    | 1    | 8     |                  |                  |
| TABLE ACCESS     | BY INDEX ROWID | STUDENTS    | 1    | 1    | 1    | 8     |                  |                  |
| INDEX            | UNIQUE SCAN    | STUDENTS_PK | 1    | 1    | 0    |       |                  | "N_Z" = 2        |

Можно увидеть, что поиск записи осуществляется при помощи индекса и стоимость всего запроса равна 1.

Давайте зайдём в таблицу вкладку Indexes, перейдём на индекс и отключим его. И выполним опять тот же самый запрос.

| Operation        | Options      | Object   | Rows | Time | Cost | Bytes | FilterPredicates | AccessPredicates |
| ---------------- | ------------ | -------- | ---- | ---- | ---- | ----- | ---------------- | ---------------- |
| SELECT STATEMENT |              |          | 1    | 1    | 3    | 8     |                  |                  |
| TABLE ACCESS     | STORAGE FULL | STUDENTS | 1    | 1    | 3    | 8     | "N_Z" = 2        | "N_Z" = 2        |

Стала понятно разница? Из-за того, что индексов нет приходится делать полный перебор, что, очевидно, гораздо дороже. Можете включить индексы (или сделать rebuild, чтоб включить его)

Однако индексы серьезно замедлят добавление новых записей в таблицу, т.к. он будет постоянно перестраиваться.
