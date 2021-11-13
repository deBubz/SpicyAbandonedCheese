const log = require("./logging.utils");
const path = require("path");

/* 
    custom generic middleware for server
*/

const NAMESPACE = "SERVER-UTIL";

const logAllRequests = (req, res, next) => {
    log.info(NAMESPACE, `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on("finish", () => {
        log.info(
            NAMESPACE,
            `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`
        );
    });
    next();
};

// can i weave this into the Log all Request
const errHandling = (req, res) => {
    const err = new Error("Path not found");
    return res.status(400).json({ message: err.message });
};

const redirectToIndex = (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../web", "build", "index.html"));
};

module.exports = {
    logAllRequests,
    errHandling,
    redirectToIndex,
};
