let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler');

// prepare the handlers you might need
var handlers = {}
handlers['/'] = requestHandler.greeting; 
handlers['/naruto'] = requestHandler.naruto; 
handlers['/hinata'] = requestHandler.hinata; 

server.init(router.route, handlers);