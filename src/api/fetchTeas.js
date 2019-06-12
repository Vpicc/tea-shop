var https = require('https');

function fetchTeas(callback) {
    var options = {
        'method': 'GET',
        'hostname': 'cors-anywhere.herokuapp.com/tea-store.herokuapp.com',
        'path': '/api/available-teas',
        'headers': {
          'Authorization': 'Token Bandolim@M821912212ejadsa@023',
        }
    };
      
    var req = https.request(options, function (res) {
        var chunks = [];
        
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
        
        res.on("end", () => {
            var body = Buffer.concat(chunks);
            callback(JSON.parse(body.toString()));
        });
        
        res.on("error", function (error) {
            console.error(error);
        });
    });
    
    var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; ------WebKitFormBoundary7MA4YWxkTrZu0gW--";
    
    req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

    req.write(postData);
    
    req.end();
}

export default fetchTeas;


