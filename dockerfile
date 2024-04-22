# Use an official Node runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json files to install dependencies
COPY package*.json ./

# Install dependencies
RUN yarn install

# Bundle app source inside the Docker image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable for MongoDB and Kafka connection
ENV MONGODB_URI='mongodb://mongo:27017/'
ENV MONGODB_NAME='db_raihan_betest'
ENV KAFKA_HOST=kafka:29092
ENV PORT=3000
ENV JWT_SECRET='1234567890ABCDEFG'


# Run the application when the container launches
CMD ["yarn", "dev"]
