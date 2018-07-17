var anydbsql = require('anydb-sql');

export const db = anydbsql({
    url: 'mysql://root:root@localhost:3306/workandtravel',
    connections: { min: 1, max: 20 }
});