
let route = (pathname, handlers, response) =>{
    console.log('Coming request : '+ pathname );
    if(typeof handlers[pathname] === 'function'){
        return handlers[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
        response.write("404 not found");
        response.end();
    }
}

exports.route = route;