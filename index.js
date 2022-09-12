var http=require('http');
var fs= require('fs');

var server=http.createServer((req,res)=>{

    if(req.url="/"){
        fs.readFile("home.html",(error,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data)
        })
    }
})
server.listen(5000,()=>{
    console.log("Server started on port 5000")
})
