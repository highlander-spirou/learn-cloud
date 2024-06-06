# Use the official Node.js image as a base image
FROM node:14

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY .app.js .

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
