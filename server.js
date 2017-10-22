let http = require("http");

let url = require("url");

// route and handers will be injected when init server from index.js
let init = (route, handlers) => {

    let onRequest = (request, response) => {

        // retrieve pathname as request from url
        let pathname = url.parse(request.url).pathname;

        // get rid of request for favicon.ico from chrome
        if (pathname !== '/favicon.ico'){
            // route request to the corresponding handler
            route(pathname, handlers, response);
        } 
    };
    
    // choice port you prefer, 3005 in my case
    http.createServer(onRequest).listen(3005);
    
    console.log('server has started...');    
    console.log("please open url http://127.0.0.1:3005 in browser");
}

exports.init = init;

