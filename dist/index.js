"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var config_1 = require("./config/config");
var index_1 = require("./socket/index");
var app = require('./config/express').default();
var server = new http.Server(app);
new index_1.Socket(server);
server.listen(config_1.default.port);
server.on('error', function (e) {
    console.log('Error starting server' + e);
});
server.on('listening', function () {
    if (config_1.default.useMongo) {
        console.log("Server started on port " + config_1.default.port + " on env " + (process.env.NODE_ENV || 'dev') + " dbcon " + config_1.default.mongodb);
    }
    else {
        console.log("Server started on port " + config_1.default.port + " on env " + (process.env.NODE_ENV || 'dev'));
    }
});
//# sourceMappingURL=index.js.map