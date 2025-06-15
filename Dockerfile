# Use Node.js LTS base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (for faster builds)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the application
COPY . .

# Expose the port your application runs on
EXPOSE 3000

# Command to start the application
CMD [ "node", "server.js" ]
