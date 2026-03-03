# Development Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package.json only
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port for dev server
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]
