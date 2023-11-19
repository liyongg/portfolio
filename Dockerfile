# Use a multi-stage build with a build stage for Node.js
FROM node:20 as builder

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install -g next
RUN npm install

# Bundle app source
COPY . .

# Build the Next.js app
RUN npm run build

# Use a minimal base image for the final stage
FROM node:20

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
