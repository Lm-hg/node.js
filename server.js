const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Hello world !</h1>');
});

server.listen(process.env.PORT || 3000,function(){
    console.log(`ça marche`);
});