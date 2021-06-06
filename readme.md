<h1 align="center">
API LoomerTech - real estate management
</h1>

<p align="center">A simple property management platform</p>

<p align="center">
  <a href="">
    <img src="https://img.shields.io/github/contributors/rocketseat/youtube-clone-discord?color=%237159c1&logoColor=%237159c1&style=flat" alt="Contributors">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/license/rocketseat/youtube-clone-discord?color=%237159c1&logo=mit" alt="License">
  </a>
</p>

## Participants

| [<img src="https://avatars.githubusercontent.com/u/54330692?v=4" width="75px;"/>](https://github.com/pedropaiva1) |
| :------------------------------------------------------------------------------------------------------------------------: |


| [Pedro Paiva](https://github.com/pedropaiva1)

## Techs

- [x] Node.js
- [x] Express
- [x] Sequelize ORM
- [x] Mysql
- [x] BCrypt.js
- [x] JWT

## Usage

1. Run `npm install` or `yarn install`.<br />
2. Run `yarn dev` or `yarn start` and access `http://localhost:3333`.<br />

# User routes

### Create User

`http://localhost:3333/user` method `POST`
```javascript
{
	"name": "pedro paiva",
	"cpf": "12345678945",
	"email": "pedro@gmail.com",
	"password": "1234"
}
```

Field | Description
------|------------
**name** | must be between 4 and 11 characters.
**cpf** | must be 11 characters.
**email** | must be an email.
**password** | must be 15 characters.

**Empty fields will not be accepted**

### Response 

```javascript
{
  "user": {
    "id": 1,
    "name": "pedro paiva",
    "cpf": "12345678945",
    "email": "pedro@gmail.com",
    "updatedAt": "2021-06-06T19:21:31.996Z",
    "createdAt": "2021-06-06T19:21:31.996Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTYyMzAwNzI5MiwiZXhwIjoxNjIzMDkzNjkyfQ.T2uQ4AlfnB46x5eb27PwS6E3t9-oHf4wCtoh6WQ_fFo"
}
```

<hr size="100">

### Authenticate user

`http://localhost:3333/auth` method `GET` in `header - Basic Auth`
```javascript
{
	"username": "pedro@gmail.com",
	"password": "1234"
}
```

Field | Description
------|------------
**email** | must be an email.
**password** | must be 15 characters.

**Empty fields will not be accepted**

### Response 

```javascript
{
  "user": {
    "id": 1,
    "name": "pedro paiva",
    "cpf": "12345678945",
    "email": "pedro@gmail.com",
    "updatedAt": "2021-06-06T19:21:31.996Z",
    "createdAt": "2021-06-06T19:21:31.996Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTYyMzAwNzI5MiwiZXhwIjoxNjIzMDkzNjkyfQ.T2uQ4AlfnB46x5eb27PwS6E3t9-oHf4wCtoh6WQ_fFo"
}
```

<hr size="100">

### Update user

`http://localhost:3333/update/user/:user_id` method `PUT`
```javascript
{
	"name": "andré",
	"cpf": "08450229456",
	"email": "4567888@loco.com",
	"password": "1234567"
}
```

Field | Description
------|------------
**name** | must be between 4 and 11 characters.
**cpf** | must be 11 characters.
**email** | must be an email.
**password** | must be 15 characters.

**Empty fields will not be accepted**

### Response 

```javascript
{
  "user": {
    "id": 1,
    "name": "pedro paiva",
    "cpf": "12345678945",
    "email": "pedro@gmail.com",
    "updatedAt": "2021-06-06T19:21:31.996Z",
    "createdAt": "2021-06-06T19:21:31.996Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTYyMzAwNzI5MiwiZXhwIjoxNjIzMDkzNjkyfQ.T2uQ4AlfnB46x5eb27PwS6E3t9-oHf4wCtoh6WQ_fFo"
}
```
