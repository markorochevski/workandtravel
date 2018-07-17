"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
mongoose.connect('mongodb://marko:Arsenal21@ds111370.mlab.com:11370/workandtravel', { useNewUrlParser: true })
    .catch((err) => {
    console.log("Something happened while connecting to MongoDB");
    console.log(err);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const exts = /\.js$/;
const routedir = path.join(__dirname, "routes");
const routePrefix = '/';
fs.readdirSync(routedir).forEach(function (f) {
    //console.log('f: ', f);
    if (exts.test(f)) {
        const routePath = path.join(routedir, f);
        const routeModule = require(routePath);
        const usepath = routePrefix + f.replace(exts, "");
        console.log('usepath: ', usepath);
        if (!routeModule.route) {
            console.error(`Route module ${f} does not export itself properly`);
            throw new Error(`Unable to set up route ${f}. Check the route module for unexported route variables`);
        }
        app.use(usepath, routeModule.route);
    }
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
module.exports = app;
//# sourceMappingURL=index.js.map