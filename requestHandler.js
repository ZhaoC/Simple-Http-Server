fs = require('fs'); // used to retrieve file

let sleep = (time_period)=>{
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + time_period);
}

let greeting = (response) =>{
    console.log('Request greeting called ...');

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<h1>Welcome!</h1>");
    response.end();
}

let hinata = (response)=>{
    console.log('Request hinata called...');
    loadImg(response, './img/hinata.png');

}

let naruto = (response)=>{
    console.log('Request naruto called...');
    loadImg(response, './img/naruto.png');
}

let loadImg = (response, imgName) => {
    var img = fs.readFileSync(imgName);
    response.writeHead(200, {'Content-Type': 'image/png' });
    response.end(img, 'binary');
}

exports.greeting = greeting;
exports.naruto = naruto;
exports.hinata = hinata;