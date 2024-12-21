FROM node:latest


# set the working directory inside the container
WORKDIR /app

# copy package.json and package-lock.json

COPY package*.json ./

# install dependencies

RUN npm install

# copy the rest of the applicaion code

COPY . .

# Expose the port react app runs

EXPOSE 5173

# Start the react development server

CMD ["npm", "run", "dev", "--", "--host"]
