var https = require('https');



function postOrder(callback) {
    var options = {
        'method': 'POST',
        'hostname': 'tea-store.herokuapp.com',
        'path': '/api/send-order',
        'headers': {
            'Authorization': 'Token Bandolim@M821912212ejadsa@023',
            'Content-Type': 'application/json'
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

    var postData =  "{\n\t\"client\": {\n\t\t\"name\": \"Eduardo\", \n\t\t\"email\": \"eduardo@service.com\",\n\t\t\"country\": \"Brazil\"\n\t},\n\t\"teas\": [\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"quantity\": 2\n\t\t},\n\t\t{\n\t\t\t\"id\": 4,\n\t\t\t\"quantity\": 3\n\t\t}\n\t]\n}";

    req.write(postData);

    req.end();
}

export default postOrder;