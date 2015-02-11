var sys = require("sys");
var fs = require("fs");
var https = require("https");

var options = {
    key: fs.readFileSync("ssl/server.key"),
    cert: fs.readFileSync("ssl/server.crt"),
    ca: fs.readFileSync("ssl/ca.crt"),
    requestCert: true,
    rejectUnauthorized: true
};

https.createServer(options, function (req, res) {
    res.writeHead(200);
    sys.puts("request: " + req.connection.getPeerCertificate().subject.CN);
    res.end("Hellod, " + req.connection.getPeerCertificate().subject.CN + "\n");
}).listen(8000);

sys.puts("serverted");