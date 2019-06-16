var https = require("https");

const HOST_NAME = "cors-anywhere.herokuapp.com/tea-store.herokuapp.com";
const AUTH_TOKEN = "Token Bandolim@M821912212ejadsa@023";

function fetchTeas(callback) {
  var options = {
    method: "GET",
    hostname: HOST_NAME,
    path: "/api/available-teas",
    headers: {
      Authorization: AUTH_TOKEN
    }
  };

  var req = https.request(options, function(res) {
    var chunks = [];

    res.on("data", function(chunk) {
      chunks.push(chunk);
    });

    res.on("end", () => {
      var body = Buffer.concat(chunks);
      callback(JSON.parse(body.toString()));
    });

    res.on("error", function(error) {
      console.error(error);
    });
  });

  var postData =
    "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; ------WebKitFormBoundary7MA4YWxkTrZu0gW--";

  req.setHeader(
    "content-type",
    "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
  );

  req.write(postData);

  req.end();
}

function postOrder(postData, callback) {
  var options = {
    method: "POST",
    hostname: HOST_NAME,
    path: "/api/send-order",
    headers: {
      Authorization: AUTH_TOKEN,
      "Content-Type": "application/json"
    }
  };

  var req = https.request(options, function(res) {
    var chunks = [];

    res.on("data", function(chunk) {
      chunks.push(chunk);
    });

    res.on("end", () => {
      var body = Buffer.concat(chunks);
      callback(JSON.parse(body.toString()));
    });

    res.on("error", function(error) {
      callback({ success: false });
      console.error(error);
    });
  });

  req.write(postData);

  req.end();
}

export { fetchTeas, postOrder };
