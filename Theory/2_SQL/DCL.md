# DCL

Управление доступом к различным объектам БД.

```sql
Grant [privileges] on [table] to [schema]

Revoke [privileges] on [table] from [schema]
```

Предоставить права на таблицу students пользователю user

```sql
Grant select on students to user
```

После этого пользователь, получивший права может выполнять Select к заданной таблице

```sql
Select * from [schema].[table]
```

Просмотр всех полномочий, предоставленных/полученных:

```sql
SELECT *
FROM USER_TAB_PRIVS;
```
