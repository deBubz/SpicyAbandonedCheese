/* 
    custom logging messages for debugging
*/

const getTimeStamp = () => {
    return new Date().toISOString();
};

/**
 * Log out message with timestamp and namespace
 * Object is optional
 */
const log = (type, logFunc) => {
    return (namespace, msg, object) => {
        if (object) {
            logFunc(`[${getTimeStamp()}] [${type}] [${namespace}] ${msg}`, object);
        } else {
            logFunc(`[${getTimeStamp()}] [${type}] [${namespace}] ${msg}`);
        }
    };
};

// nasty way of doing this but hmm
const info = log("INFO", console.log);
const error = log("ERROR", console.error);
const warn = log("WARN", console.log);
const debug = log("DEBUG", console.log);

module.exports = { info, error, warn, debug };
