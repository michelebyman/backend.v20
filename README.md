# backend.v20 Task One Michele, Sebastian och Joakim 

#1. This is tasks made in posts

#Get a post by userId in posts
 
Get request from path: posts for a "UserId" and the response is a Json object

curl -i http://api.softhouse.rocks/posts\?userId
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 28446
Date: Wed, 15 May 2019 08:02:44 GMT


  {
    "_id": "5cb367e82855b90020cc0fce",
    "userId": 666,
    "id": 101,
    "__v": 0
  }

#2. POST in posts adds a new post to the posts list

Post to "Post" posted.

Must have a userId > 0 otherwise error

 curl -X POST "http://api.softhouse.rocks/posts" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"title\":\"string\",\"body\":\"string\",\"userId\":3}"

HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 95
Date: Wed, 15 May 2019 09:42:33 GMT


{
  "_id": "5cdbdedbf4a0350020b48185", 
  "body": "string",
  "title": "string",
  "userId": 3,
  "id": 117,
  "__v": 0
}

#3. PUT in posts change an existing post in posts list
Must have a userId > 0 otherwise error

curl -X PUT "http://api.softhouse.rocks/posts/4" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"title\":\"Örjan\",\"body\":\"Body of Örjan\",\"userId\":4}"

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 101
Date: Wed, 15 May 2019 10:10:34 GMT


{
  "_id": "5caaef896b334800cbf6633f",
  "userId": 4,
  "id": 4,
  "title": "Örjan",
  "body": "Body of Örjan",
  "__v": 0
}















#This is tasks made in User

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

