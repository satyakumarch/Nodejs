const http=require('http');//HTTP module handle request and response


http.createServer((req,res)=>{
    res.write("<h1>Welconme to nodejs</h1>");
    res.write("<P>induism is the majority religion in Nepal and profoundly influences its social structure and politics, while Buddhism (Tibetan Buddhism</p>");
   
    res.end();

}).listen(3000);