# Set the base image for the build stage
ARG BUILDPLATFORM=linux/amd64
FROM --platform=$BUILDPLATFORM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only necessary dependencies
RUN apk --no-cache add curl

# Install Node.js modules
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Start a new stage for the final image
FROM arm64v8/node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the built artifacts from the build stage
COPY --from=build /usr/src/app/build ./build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
