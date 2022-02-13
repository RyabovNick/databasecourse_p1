# Получение доступа

Зайдите на:

http://95.217.232.188/pgadmin4

Данные приведены в таблице ниже (если какие-то проблемы - напишите мне):

1. Если работаете через интерфейс pgAdmin, то вам надо залогиниться при помощи логина (в таблице ниже), пароль - 123123123. После первого входа смените его (в правом углу написан логин, нажать на него и change password). PgAdmin просто требует, чтоб логин был почтой, поэтому добавлено @m.m которое не несёт смысловой нагрузки

| Логин            |
| ---------------- |
|antipov@m.m |
|baron@m.m |
|belov@m.m |
|bragin@m.m |
|vagabov@m.m |
|goncharov@m.m |
|gorodnichin@m.m |
|grabovets@m.m |
|groza@m.m |
|doizha@m.m |
|doroshev@m.m |
|dridilin@m.m |
|ershov@m.m |
|zhgulev@m.m |
|ilimbaev@m.m |
|kamkin@m.m |
|kibalov@m.m |
|kireichikov@m.m |
|klochkov@m.m |
|kolesnikov@m.m |
|korshunov@m.m |
|kulev@m.m |
|lebedev@m.m |
|levchuk@m.m |
|linetskii@m.m |
|lomin@m.m |
|melnik@m.m |
|mitiushin@m.m |
|miakotin@m.m |
|razumnyi@m.m |
|romanenko@m.m |
|saityrly@m.m |
|skladnova@m.m |
|stavitskii@m.m |
|sutin@m.m |
|tomilov@m.m |
|trofimova@m.m |
|khairov@m.m |
|tselikova@m.m |
|tsypin@m.m |
|chibisov@m.m |
|shkerin@m.m |
|shmelev@m.m |
|shulgin@m.m |
|shustov@m.m |
|iakubov@m.m |
|iashina@m.m |

После успешного входа в pgAdmin подключитесь к серверу:

введите название,

- host: localhost
- port: 7777
- database: из таблицы, только без @m.m! (т.е. если логин от pgAdmin surname@m.m, то тут - surname)
- username: из таблицы, только без @m.m! (т.е. если логин от pgAdmin surname@m.m, то тут - surname)
- password: совпадает с username (например, surname)

После того как зашли используйте SQL команду чтобы сменить пароль (не забудьте изменить подключение к базе):

`ALTER ROLE %username PASSWORD '%password';`

где %username - username, %password - свой пароль

![1](./img/1.png)

![2](./img/2.png)

Т.е. на скрине ниже, допустим ваш логин surname@m.m:

Maintenance database: surname
Username: surname
Password: surname

![3](./img/3.png)

2. Если вы не хотите использовать pgAdmin установленный на сервере, то вы можете поставить его локально или использовать любой другой клиент (например DataGrip). В таком случае для подключения в host указать http://95.217.232.188