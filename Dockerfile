FROM node:20-alpine

# ENV MY_NAME="John Doe"
# ENV MY_DOG=Rex\ The\ Dog
# ENV MY_CAT=fluffy

# RUN apt-get update
# RUN apt-get install -y curl

# WORKDIR /a
# WORKDIR b
# WORKDIR c
# RUN pwd

# EXPOSE 80/tcp
# EXPOSE 80/udp

# ADD [--chown=<user>:<group>] [--chmod=<perms>] [--checksum=<checksum>] <src>... <dest>
# ADD [--chown=<user>:<group>] [--chmod=<perms>] ["<src>",... "<dest>"]

# COPY [--chown=<user>:<group>] [--chmod=<perms>] <src>... <dest>
# COPY [--chown=<user>:<group>] [--chmod=<perms>] ["<src>",... "<dest>"]

WORKDIR /satya/news-server

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGODB_CONNECT_URL=mongodb+srv://satyaram116:CDL1IUUCxFcJljjc@xyz-news-cluster.ep1ieos.mongodb.net/?retryWrites=true&w=majority

EXPOSE 4000:5000

CMD ["npm", "start"]