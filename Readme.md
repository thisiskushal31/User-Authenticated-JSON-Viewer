# User Authenticated JSON Viewer

User Authenticated JSON Viewer uses embedded RedisDB to store a randomly generated session key and embedded MongoDB to collect user credentials, while Docker is used to deploy backend APIs and embedded databases. This is to ensure the security of a communication session between a user and another computer or between two computers. For example, the JSON viewer will store user-specific data in MongoDB and provide access to the data with a valid session key stored in RedisDB.

## Tech Stack

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Expressjs](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) 

## Workflow Setup
### Node

-   #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

-   #### Node installation on Ubuntu

    You can install nodejs and npm easily with apt install, just run the following commands.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   #### Other Operating Systems
    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### Docker

This project will need docker installed on machine you are running on even if it is server hosted on cloud for installation guide follow the step given in this [docker official documentation](https://docs.docker.com/get-docker/).

## See JsonViewer in action

To run this project on a local machine see below the given instructions.

- For the frontend see this [Readme.md](./ReactFrontend/Readme.md)
- For the backend see this [Readme.md](./ContainerisedBackend/Readme.md)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## About Me

I am a passionate programmer with a keen interest in Full Stack Web Development, Cloud and DevOps Emerging Technologies, and attempting to solve problems with the software.

## Let's Connect
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thisiskushalgupta/) [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/thisis_kushal) [![github](https://img.shields.io/badge/github-3d4653?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thisiskushal31/)