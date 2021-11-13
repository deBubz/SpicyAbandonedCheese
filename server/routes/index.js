const app = require("express")();

app.use("/", (req, res) => {
    return res.status(200).json({ msg: "this ok" });
});

module.exports = app;
