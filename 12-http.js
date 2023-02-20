const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if (req.url === "/"){
        res.end("Hello there Your Currently in the Home page")
    }
    console.log("anil");
    if (req.url === "/about"){
        res.end("Your Currently in the about page")
    }
    //res.write("Your Currently in the unknown page")
    // res.end("ramdom bullshit")
})

server.listen(100)