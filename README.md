### TO run the server

npm start

## Register Route

POST http://localhost:4000/api/v1/register HTTP/1.1
Content-Type: application/json

{
"name":"piyush0004",
"email":"piyush04@gmail.com",
"password":"1234567890",
"gender":"male",
"age":"22",
"address":"address",
"city":"city",
"state":"state",
"zip":"0000",
"image":"image"
}

## login Route

POST http://localhost:4000/api/v1/login HTTP/1.1
Content-Type: application/json

{

    "email":"piyush04@gmail.com",
    "password":"1234567890"

}

## Update Profile Route

PUT http://localhost:4000/api/v1/me/update HTTP/1.1
Content-Type: application/json

{

    "name":"piyush4",
    "email":"lohiya.piyush04@gmail.com",

    "gender":"male",
    "age":"24",
    "address":"address",
    "city":"Jodhpur",
    "state":"state",
    "zip":"0000",
    "image":"image"

}

## Update Password

PUT http://localhost:4000/api/v1/password/update HTTP/1.1
Content-Type: application/json

{

    "oldPassword":"1234567890",
    "newPassword":"000000000",
    "confirmPassword":"000000000"

}

## Get All users in database

GET http://localhost:4000/api/v1/users HTTP/1.1

## delete User

DELETE http://localhost:4000/api/v1/users/delete HTTP/1.1
Content-Type: application/json

{
"id":"6276c24d432119181cb1644b"
}
