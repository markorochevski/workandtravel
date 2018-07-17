"use strict";
module.exports = {
    routePrefix: process.env.service_routePrefix,
    database: {
        url: process.env.service_databaseUrl || 'mongodb://marko:Arsenal21@ds111370.mlab.com:11370/workandtravel'
    }
};
//# sourceMappingURL=index.js.map