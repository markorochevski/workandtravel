"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var anydbsql = require('anydb-sql');
exports.db = anydbsql({
    url: 'mysql://root:root@localhost:3306/workandtravel',
    connections: { min: 1, max: 20 }
});
//# sourceMappingURL=connection.js.map