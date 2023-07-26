# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the server.js file to the container
COPY server.js .

# Install any necessary dependencies (if applicable)
# For example, if you require specific npm packages, uncomment and use the following lines:
# COPY package*.json ./
# RUN npm install

# Expose the port your Express server listens on
EXPOSE 3001

# Command to run your Express server
CMD ["node", "server.js"]
