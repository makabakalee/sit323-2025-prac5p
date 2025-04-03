# Use the official Node.js version 16 as the base image
 FROM node:16

# Set up a working directory
WORKDIR /the/workdir/path

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files to the working directory
COPY . .

# Expose the port on which the applicaton is running
EXPOSE 3000

# Define the commands that run when the container starts
CMD [ "node", "app.js" ]


