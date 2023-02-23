# PWC Tech Interview
## _Marvel API_

This is a simple backend developed on Express and typescript with job apply purposes.

## Environment Variables

Some variables are needed on this exercise to run:


#### APP
```
PORT=3000
```
#### [Oficial MArvel API](https://developer.marvel.com/documentation/getting_started)
```
PUBLIC_KEY=
PRIVATE_KEY=
```
#### DB
```
DB_SCHEMA=marvel_api
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=

```

## Docker

This exercise works with Docker localy right now, to set it up just build and up the compose to set it ready.

```sh
docker-compose up
```

## Postman / ThunderClient

There are some enpoints already implemented, all them in the current version are only available to be used locally.

```https
localhost:3000/public/characters/
```

```https
localhost:3000/public/characters/id/:id
```

```https
localhost:3000/public/characters/name/:name
```

Keep in mind that the application on its first use downloads the original information from Marvel, so it may take a while to execute the first request.
