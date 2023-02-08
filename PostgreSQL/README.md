# Получение доступа

В данный момент PostgreSQL в Университете Дубна используют не только мои группы, pgAdmin и postgreSQL доступен и через сервис от Университета Дубна. Но пока будем использовать это.

Зайдите на:

http://95.217.232.188/pgadmin4

Данные приведены в таблице ниже (если какие-то проблемы - напишите мне):

1. Если работаете через интерфейс pgAdmin, то вам надо залогиниться при помощи логина (в таблице ниже), пароль - 123123. После первого входа смените его (в правом углу написан логин, нажать на него и change password). PgAdmin просто требует, чтоб логин был почтой, поэтому добавлено @m.m которое не несёт смысловой нагрузки

| Логин            |
| ---------------- |
|akmaev@m.m |
|bushmakina@m.m |
|gusejnov@m.m |
|dzhuromskij@m.m |
|ershov@m.m |
|zubakin@m.m |
|kapurina@m.m |
|kolmogorcev@m.m |
|kopejkin@m.m |
|kostrova@m.m |
|pervushkin@m.m |
|skaldin@m.m |
|tugajlaev@m.m |
|andreev@m.m |
|glumina@m.m |
|dyldina@m.m |
|loginkin@m.m |
|mozgachyov@m.m |
|romanova@m.m |
|rubczov@m.m |
|rybakov@m.m |
|skuratov@m.m |
|sokolov@m.m |
|sultanov@m.m |
|yakovenko@m.m |
|varlamova@m.m |
|zagvozdkin@m.m |
|zyatkov@m.m |
|karpenko@m.m |
|korzhov@m.m |
|lebezova@m.m |
|oselkov@m.m |
|romanov@m.m |
|soldatov@m.m |
|trusov@m.m |
|fadeev@m.m |
|cherneczov@m.m |
|chirkov@m.m |
|baryutin@m.m |
|vereshhagin@m.m |
|gulin@m.m |
|kulak@m.m |
|mixajlichenko@m.m |
|naumov@m.m |
|nechaeva@m.m |
|pchelin@m.m |
|timoxin@m.m |
|udalov@m.m |
|frolov@m.m |
|chernyadev@m.m |
|shalamaev@m.m |

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

2. Если вы не хотите использовать pgAdmin установленный на сервере, то вы можете поставить его локально или использовать любой другой клиент (например DataGrip или через расширение в VSCode). В таком случае для подключения в host указать 95.217.232.188