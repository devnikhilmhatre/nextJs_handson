const express = require('express');
const next = require('next');

var routes = require('./router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const { createReadStream } = require('fs');

app.prepare()
    .then(() => {
        const server = express();

        server.use('/service-worker.js', express.static(__dirname + '/service-worker.js'));

        server.use('/edit', routes);

        server.get('*', (req, res) => handle(req, res));

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('http://localhost:3000');
        });
    })
    .catch((ex) => {
        console.log(ex.stack);
        process.exit(1);
    })