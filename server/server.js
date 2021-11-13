const express = require("express");
const mongoose = require("mongoose");

const log = require("./utils/logging.utils");
const serverUtils = require("./utils/server.utils");
const routing = require("./routes");
const config = require("./config/server.config");

require("dotenv").config();

// configuration
const NAMESPACE = "SERVER";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose connect

// middleware setup
app.use(serverUtils.logAllRequests);

// api routing
app.use("/api/v1/", routing);

// error handling
app.use(serverUtils.errHandling); // currently only path not found
app.get("*", serverUtils.redirectToIndex);

// start the server
app.listen(config.server.port, () => {
    log.info(NAMESPACE, `Starting server at ${config.server.hostname}:${config.server.port}`);
});
