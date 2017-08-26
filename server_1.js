var http = require ("http");


function handleRequestone(request,response) {
    response.end("You are the best");
}
function handleRequesttwo(request,response) {
    response.end("You are the worst");
}

var portone = 7000;
var porttwo = 7500;


var serverone = http.createServer(handleRequestone);
var servertwo = http.createServer(handleRequesttwo);

serverone.listen(portone,function(){
    
});

servertwo.listen(porttwo,function(){
    
});