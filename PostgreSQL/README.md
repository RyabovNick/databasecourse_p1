# Получение доступа

Зайдите на:

http://95.217.232.188/pgadmin4

Данные приведены в таблице ниже, если какие-то проблемы - напишите мне:

1. Если работаете через интерфейс pgAdmin, то вам надо залогиниться при помощи логина (в таблице ниже), пароль - логин, только без @m.m (для фамилий из 5 букв в конце 1). После первого входа смените его (в правом углу написан логин, нажать на него и change password). PgAdmin просто требует, чтоб логин был почтой, поэтому добавлено @m.m которое не несёт смысловой нагрузки

| Логин            |
| ---------------- |
| bokuchava@m.m    |
| volkov@m.m       |
| gruzincev@m.m    |
| ermolenko@m.m    |
| kuznecov@m.m     |
| lukichyova@m.m   |
| lyskov@m.m       |
| mokrenko@m.m     |
| nuzhnaya@m.m     |
| habitov@m.m      |
| chilochi@m.m     |
| ajsin@m.m        |
| arakcheev@m.m    |
| bodnarchuk@m.m   |
| vagurin@m.m      |
| vakin@m.m        |
| egorov@m.m       |
| zhavoronok@m.m   |
| kalmykova@m.m    |
| kirel@m.m        |
| klevcov@m.m      |
| skirdov@m.m      |
| syasin@m.m       |
| baryshev@m.m     |
| belyakov@m.m     |
| zharkov@m.m      |
| karnyushina@m.m  |
| klyachenkova@m.m |
| lebedeva@m.m     |
| mohova@m.m       |
| perelygin@m.m    |
| ponasenko@m.m    |
| popkov@m.m       |
| skladnova@m.m    |
| habalov@m.m      |
| hohlov@m.m       |
| chekolaev@m.m    |
| shcherbakov@m.m  |
| afanasev@m.m     |
| bodryagin@m.m    |
| bykov@m.m        |
| dridilin@m.m     |
| egorova@m.m      |
| karpov@m.m       |
| korotkova@m.m    |
| lukoyanov@m.m    |
| makarova@m.m     |
| neverov@m.m      |
| rahmatulaev@m.m  |
| tkachenko@m.m    |
| troickaya@m.m    |

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
