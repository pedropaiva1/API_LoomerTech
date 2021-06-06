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
- [x] MySQL
- [x] BCrypt.js
- [x] JWT

## Usage

1. Run `npm install` or `yarn install`.<br />
2. Run `yarn dev` or `yarn start` and access <a href="http://localhost:3333">http://localhost:3333</a>.<br />

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
**password** |unspecified.

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

### Authenticate User

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
**password** | unspecified.

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

### Update User

`http://localhost:3333/update/user/:user_id` method `PUT` in `header - "authorization":token`
```javascript
{
	"name": "pedro paiva updated",
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
**password** | unspecified.

**Empty fields will not be accepted**

### Response 

```javascript
{
  "message": "User information updated successfully"
}
```
<hr size="100">

### Delete User

`http://localhost:3333/delete/user/:user_id` method `DELETE` in `header - "authorization":token`
```javascript
{
	"password": "1234"
}
```

Field | Description
------|------------
**password** | unspecified.

**Empty fields will not be accepted**

### Response 

```javascript
{
  "message": "User deleted with successfully"
}
```

<hr size="100">

### Index Users

`http://localhost:3333/user/:user_id?` method `GET` in `header - "authorization":token`

### Response 

```javascript
[
  {
    "id": 1,
    "name": "pedro paiva updated",
    "cpf": "12345678945",
    "email": "pedor@gmail.com",
    "createdAt": "2021-06-05T18:52:32.000Z",
    "updatedAt": "2021-06-06T18:51:35.000Z"
  },
  {
    "id": 2,
    "name": "andré",
    "cpf": "08450229932",
    "email": "andre@gmail.com",
    "createdAt": "2021-06-05T22:24:42.000Z",
    "updatedAt": "2021-06-06T19:17:00.000Z"
  },
  {
    "id": 3,
    "name": "maria",
    "cpf": "12345678911",
    "email": "maria@gmail.com",
    "createdAt": "2021-06-06T17:51:23.000Z",
    "updatedAt": "2021-06-06T17:52:38.000Z"
  },
]
```
<hr size="100">

# Immobiles routes

### Create Immobile

`http://localhost:3333/user/:user_id/immobile` method `POST` in `header - "authorization":token`
```javascript
{
	"zipcode": "12345",
  "number": 0,
  "complement": "house",
  "rent_amount": 860.5,
  "number_of_rooms": 6, 
  "available": true 
}
```

Field | Description
------|------------
**zipcode** | must be 5 characters and it's a unique field.
**number** | unspecified.
**complement** | must be between 0 and 200 characters.
**rent_amount** | unspecified.
**number_of_rooms** | unspecified.
**available** | mus be true or false.

**Empty fields will not be accepted**

### Response 

```javascript
{
  "id": 1,
  "user_id": "1",
  "zipcode": "12345",
  "number": 0,
  "complement": "house",
  "rent_amount": 860.5,
  "number_of_rooms": 6,
  "available": true,
  "updatedAt": "2021-06-06T21:26:42.801Z",
  "createdAt": "2021-06-06T21:26:42.801Z"
}
```

<hr size="100">

### Update Immobile

`http://localhost:3333/update/user/:user_id/immobile/:immobile_id` method `PUT` in `header - "authorization":token`
```javascript
{
	"zipcode": "54321",
  "number": 0,
  "complement": "house",
  "rent_amount": 500,
  "number_of_rooms": 4, 
  "available": false 
}
```

Field | Description
------|------------
**zipcode** | must be 5 characters and it's a unique field.
**number** | unspecified.
**complement** | must be between 0 and 200 characters.
**rent_amount** | unspecified.
**number_of_rooms** | unspecified.
**available** | mus be true or false.

**Empty fields will not be accepted**

### Response 

```javascript
{
  "message": "Immobile information updated successfully"
}
```

<hr size="100">

### Delete Immobile

`http://localhost:3333/delete/user/:user_id/immobile/:immobile_id` method `DELETE` in `header - "authorization":token`

### Response 

```javascript
{
  "message": "Immobile deleted with successfully"
}
```