"use strict";

const http = require('http');

const HOST = '127.0.0.1';
const PORT = 3000;

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello my honey, hello my darlin\', hello my ragtime gal');
}).listen(PORT, HOST, function(){
    console.log(`${new Date()}: The server is now running on ${HOST}:${PORT}`);
});
