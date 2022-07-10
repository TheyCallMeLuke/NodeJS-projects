# Pokemon

This is a simple REST API for managing pokemon and trainers

## Features

- Create pokemon and trainers
- Get all pokemon and trainers
- Get pokemon and trainers by id
- Delete pokemon and trainers

## Tech stack

- NodeJS
- Typescript
- MongoDB
- ExpressJS
- Joi

## Install

  npm install
  
## Build the app

  npm run build
  
## Run the app

  npm start

# REST API

The REST API to the app is described below.
    
## Get all pokemon

### Request

`GET /pokemon`

    curl -i -H 'Content-Type: application/json' http://localhost:9090/pokemon/
  
### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 84
    ETag: W/"54-f8lXgMG0xijpIuaVWVKQjjL1UBs"
    Date: Wed, 06 Jul 2022 18:04:43 GMT
    Connection: keep-alive

    {
      "pokemons": [
        {
          "_id": "62c5cba1a1c330dce5c9a647",
          "name": "Pikachu",
          "skill": "Thunder"
        }
      ]
    }

## Create a pokemon

### Request

`POST /pokemon`

    curl -i -H 'Content-Type: application/json' -X POST http://localhost:9090/pokemon/ -d '{ "name": "Pikachu", "skill": "Thunder" }'
  
### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 81
    ETag: W/"51-S2TIxwUbhECcN3s3bXUVfYdxUoU"
    Date: Wed, 06 Jul 2022 17:51:29 GMT
    Connection: keep-alive

    {
      "pokemon": {
        "name": "Pikachu",
        "skill": "Thunder",
        "_id": "62c5cba1a1c330dce5c9a647"
      }
    }
    
## Get a pokemon by id

### Request

`GET /pokemon/{id}`

    curl -i -H 'Content-Type: application/json' http://localhost:9090/pokemon/62c5cba1a1c330dce5c9a647
  
### Response

    TTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 81
    ETag: W/"51-xDyvo5pP2nJlmNsvhFe7ScPnn+o"
    Date: Wed, 06 Jul 2022 18:13:33 GMT
    Connection: keep-alive

    {
      "pokemon": {
        "_id": "62c5cba1a1c330dce5c9a647",
        "name": "Pikachu",
        "skill": "Thunder"
      }
    }
    
## Update a pokemon

### Request

`PATCH /pokemon/{id}`

    curl -i -H 'Content-Type: application/json' -X PATCH http://localhost:9090/pokemon/62c5cba1a1c330dce5c9a647 -d '{ "name": "Pikachu", "skill": "Electric Bolt" }'
  
### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 87
    ETag: W/"57-5+jOjmagyCg08yJjN77aVKEG5Pg"
    Date: Wed, 06 Jul 2022 18:18:02 GMT
    Connection: keep-alive

    {
      "pokemon": {
        "name": "Pikachu",
        "skill": "Electric Bolt",
        "_id": "62c5cba1a1c330dce5c9a647"
      }
    }
    
## Delete a pokemon

### Request

`Delete /pokemon/{id}`

    curl -i -H 'Content-Type: application/json' -X DELETE http://localhost:9090/pokemon/62c5cba1a1c330dce5c9a647
  
### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 107
    ETag: W/"6b-0rz6Wwf9cGz10Y5ouX+aStnamdw"
    Date: Wed, 06 Jul 2022 18:20:19 GMT
    Connection: keep-alive

    {
      "pokemon": {
        "_id": "62c5cba1a1c330dce5c9a647",
        "name": "Pikachu",
        "skill": "Electric Bolt"
      },
      "message": "Deleted"
    }

## Create a trainer

### Request

`GET /trainer`

    curl --request POST \
      --url http://localhost:9090/trainer \
      --header 'Content-Type: application/json' \
      --data '{
      "name": "Ash",
      "pokemon": "62c5d4a2de29e42d6717aa58"
    }'
  
### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 96
    ETag: W/"60-ewDmROkl6tI5C9JTlkmelXNBqko"
    Date: Wed, 06 Jul 2022 18:31:28 GMT
    Connection: keep-alive

    {
      "trainer": {
        "name": "Ash",
        "pokemon": "62c5d4a2de29e42d6717aa58",
        "_id": "62c5d500de29e42d6717aa5b"
      }
    }
    
## Get all trainers

### Request

`POST /trainer`

    curl --request GET --url http://localhost:9090/trainer
  
### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 99
    ETag: W/"63-55VUNtuF4F/8BP0SOFf1Fnw9BKs"
    Date: Wed, 06 Jul 2022 18:36:56 GMT
    Connection: keep-alive

    {
      "trainers": [
        {
          "_id": "62c5d500de29e42d6717aa5b",
          "name": "Ash",
          "pokemon": "62c5d4a2de29e42d6717aa58"
        }
      ]
    }
    
## Update a pokemon

### Request

`PATCH /trainer/{id}`

    curl --request PATCH \
      --url http://localhost:9090/trainer/62c5d500de29e42d6717aa5b \
      --header 'Content-Type: application/json' \
      --data '{
        "name": "Ash",
        "pokemon": "62c5d4a2de29e42d6717aa58"
      }'
  
### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 96
    ETag: W/"60-ewDmROkl6tI5C9JTlkmelXNBqko"
    Date: Wed, 06 Jul 2022 18:40:02 GMT
    Connection: keep-alive

    {
      "trainer": {
        "name": "Ash",
        "pokemon": "62c5d4a2de29e42d6717aa58",
        "_id": "62c5d500de29e42d6717aa5b"
      }
    }
    
## Delete a pokemon

### Request

`Delete /trainer/{id}`

    curl --request DELETE --url http://localhost:9090/trainer/62c5d500de29e42d6717aa5b
  
### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 116
    ETag: W/"74-GV0jlayaNwk32N3OzR6tqv3OwTI"
    Date: Wed, 06 Jul 2022 18:41:22 GMT
    Connection: keep-alive

    {
      "Trainer": {
        "_id": "62c5d500de29e42d6717aa5b",
        "name": "Ash",
        "pokemon": "62c5d4a2de29e42d6717aa58"
      },
      "message": "Deleted"
    }
