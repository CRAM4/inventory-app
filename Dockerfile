# Base image to start from
FROM node:18-alpine

# Two arguments: First is the path outside the image to copy into the image
# Second is the path inside the image
COPY . /dockApp

# Sets the working directory
WORKDIR /dockApp

# Run command
RUN npm install

# SETTING UP A PORT 
EXPOSE 3000

# Command to run after the image is built
CMD ["npm", "start"]