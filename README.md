# SIT323 task5.1P: Containerisation of a simple web application using Docker


## Project structure：

- **Dockerfile**: defines the steps to build a Docker image.
- **docker-compose.yml**: configures services, port mapping and environment variables.
- **app.js**: the main Node.js application file.
- **package.json** and **package-lock.json**: dependency configuration files for Node.js projects.

## 1. Building a Docker Image

   ```bash
   docker build -t makabakalee/sit323-2025-prac5p .
   ```

## 2. Starting a Service with Docker Compose 

   ```bash
   docker-compose up
   ```

## 3. Access to the application
   Go to `http://localhost:3000` in browser

## 4. Stop the service
   Use `Ctrl+C` to stop running in the terminal

## 5. Push a Docker image to Docker Hub

1. **Log in to Docker Hub**

   ```bash
   docker login
   ```

   Enter the Docker Hub credentials to log in.

2. **Push the image** 

   ```bash
   docker push makabakalee/sit323-2025-prac5p
   ```   