# DCL

```sql
Grant [privileges] on [table] to [schema]
Example: Grant select on students to user
Revoke [privileges] on [table] from [schema]

Select * from [schema].[table]
```

Просмотр всех полномочий, предоставленных/полученных:

```sql
SELECT * FROM USER_TAB_PRIVS;
```
