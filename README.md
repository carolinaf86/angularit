## CONTENTS OF THIS FILE

 * [Requirements](#Requirements)
 * [Quickstart](#Quickstart)
 * [Useful Commands](Useful-Commands)

## REQUIREMENTS

In order to develop with docker this project requires that you have the latest versions of the following installed:

 * [Docker](https://www.docker.com)
 * [Docker Compose](https://docs.docker.com/compose)
  
 ## QUICKSTART
 
 If developing with docker, from the root directory of the repository run the following:
 
 ```bash
 docker-compose up -d 
 ```
 
 You can tail the logs of the container with this command:
 
 ```bash
 docker-compose logs -f
 ```
 
 If you prefer to develop without Docker, from the root directory of the repository run the following:
 
  ```bash
  npm install 
  npm run start
  ```
 
 Navigate to [http://localhost:4200](http://localhost:4200) to view the project.
 
 ## USEFUL COMMANDS
 
  * `docker-compose up -d` will build/re-build the docker container and start it in background mode
  * `docker-compose down` will remove the docker container
  * `docker-compose start` will start the docker container
  * `docker-compose stop` will stop the docker container
  * `docker-compose restart` will restart the docker container
  * `docker-compose logs -f` will tails the logs of the docker container
