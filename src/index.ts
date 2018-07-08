import express from 'express';
const app = express();

var anydbsql = require('anydb-sql');

var db = anydbsql({
    url: 'mysql://root:root@host:port/database',
    connections: { min: 1, max: 20 }
});

app.get('/', (req:any, res:any) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});