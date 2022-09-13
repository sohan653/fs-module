var http=require('http');
var fs= require('fs');

var server=http.createServer((req,res)=>{

    if(req.url=="/"){
        // async readFile
        // fs.readFile("home.html",(error,data)=>{
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //     res.write(data)
        // res.end()
        // })

        // sync readFileSync
        // const data=fs.readFileSync("home.html")
        // res.writeHead(200,{"Content-Type":"text/html"});
        // res.write(data)
        // res.end()

        // async writeFile
        // fs.writeFile("demo.txt","welcome to bangladesh",(error)=>{
        //     if(error){
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("this file is error")
        //         res.end()
        //     }else{
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("this file is success")
        //         res.end()

        //     }
        // })

        // sync writeFile
        // var error=fs.writeFileSync("dumi.txt","i love you putul");
        // if(error){
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //     res.write("this file is error")
        //     res.end()
        // }else{
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //     res.write("this file is success")
        //     res.end()

        // }

        // async rename
        // fs.rename("demo.txt","dami.txt",(error)=>{
        //     if(error){
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("this file is error")
        //         res.end()
        //         }else{
        //             res.writeHead(200,{"Content-Type":"text/html"});
        //             res.write("this file is success")
        //             res.end()
        //             }
        // })

        // sync renameSync
        // const error=fs.renameSync("dumi.txt","dumini.txt");
        // if(error){
        //     res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("this file is error")
        //         res.end()
        //         }else{
        //             res.writeHead(200,{"Content-Type":"text/html"});

        //             res.write("this file is success")
        //             res.end()
        //             }

        // delete async
        // fs.unlink("dami.txt",(error)=>{
        //     if(error){
        //         res.writeHead(200,{"Content-Type":"text/html"});
        //         res.write("this file is error")
        //         res.end()
        //         }else{
        //             res.writeHead(200,{"Content-Type":"text/html"});

        //             res.write("this file is success")
        //             res.end()
        //             }
        // })

        // delete sync 
        

        // exists sync
        // const result=fs.existsSync('dumini.txt')
        // if(result){
        //     res.end('true')
        //     }else{
        //         res.end("false")}
        
        // async exist
    

       
        



    }
})
server.listen(5005,()=>{
    console.log("Server started on port 5000")
})
