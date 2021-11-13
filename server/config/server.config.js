// NOTE: feels bad? react having access to .env

/* 
    config for things
*/

const SERVER_PORT = process.env.PORT || 8080;
const SERVER_HOSTNAME = process.SERVER_HOSTNAME || "localhost";

const MONGO_CONF = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const MONGO_URI = process.env.MONGO_URI;

// for exporting --------------------------------------------------------------------------------
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};

const DB = {
    uri: MONGO_URI,
    config: MONGO_CONF,
};

const config = {
    server: SERVER,
    db: DB,
};

module.exports = config;
