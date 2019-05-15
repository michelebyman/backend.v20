# backend.v20 Task One Michele, Sebastian och Joakim 

#1. 
Here we are doing a get-request to the api (http://api.softhouse.rocks/users) and the result is list of users UTF-8 application/json

curl = (GET)

curl -i http://api.softhouse.rocks/users
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 25586
Date: Wed, 15 May 2019 07:39:12 GMT


 {
    "address": {
      "geo": {
        "lat": 0,
        "lng": 0
      },
      "street": "mock street 12",
      "suite": "mock",
      "city": "Stockholm",
      "zipcode": "C"
    },
    "_id": "5cd93db1dde64a0020ef1c2c",
    "name": "testing",
    "username": "testing",
    "email": "testing",
    "id": 196,
    "__v": 0
  },


#2. 

curl -i http://api.softhouse.rocks/posts\?userId\=4
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 2734
ETag: W/"aae-QpmBOAZvOubm1wnpfa6clQTiLw0"
Date: Wed, 15 May 2019 07:58:58 GMT
Via: 1.1 google

  {
    "_id": "5caaef896b334800cbf66363",
    "userId": 4,
    "id": 40,
    "title": "enim quo cumque",
    "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam",
    "__v": 0
  }

#3.

curl -i http://api.softhouse.rocks/posts\?userId
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 28446
ETag: W/"6f1e-PyXH94Bu3V/yl7NxebOoWEaMImE"
Date: Wed, 15 May 2019 08:02:44 GMT
Via: 1.1 google

  {
    "_id": "5cb367e82855b90020cc0fce",
    "userId": 666,
    "id": 101,
    "__v": 0
  }
