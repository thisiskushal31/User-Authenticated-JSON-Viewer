## Containerised Backend Application for User Authenticated JSON Viewer

This is the backend application handles request coming from frontend for login and signup using Redis and MongoDB gives access to Json Viewer.

### Run the App on the Local Machine

To Run this application on local machine make sure docker desktop installed ( while using windows os) and for Linux docker CLI will work fine

and make in a file named as ***.env*** in ***./ContainerisedBackend*** then copy below env variables
```
    PORT=4000
```
this make sure backend services will expose at port ```4000``` while whole node-app container exposed at port ```6000```.

**Then,**

To install image and build and run containers cun below cmd in development mode 

```
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

To stop container run below cmd

```
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```

Hence, list of port used for services/deployment
```
    nodeapp: 6000
    api services: 4000
    mongodb: 27017
    redis: 6379
```