## Containerised Backend Application

This is the backend application handles request coming from frontend for login and signup using Redis and MongoDB gives access to Json Viewer.

### Run the App on the Local Machine

To Run this application on local machine make sure docker desktop installed ( while using windows os) and for inux docker CLI will work fine

To install image and build and run containers cun below cmd in development mode 

```
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

To stop container run below cmd

```
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```