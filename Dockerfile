FROM node:7.9.0-alpine

# Set a working directory
WORKDIR /usr/src/app

# Copy application files
COPY . .

# Install Node.js dependencies
RUN yarn install --production --no-progress

RUN webpack

CMD [ "node", "build/_server.js" ]
