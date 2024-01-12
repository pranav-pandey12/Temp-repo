// creating server
const http = require('http');

const server=http.createServer((req,res)=>{
    // console.log(req);
    if(req.url==='/'){
        res.end('Welcome to our Home Page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1> OOps!</h1>
    <p> We can't seem to find the page you are looking for</p>
    <a href="/"> back home </a> `
    )
})
// type localhost:5000 in web browser to open this
server.listen(5000)