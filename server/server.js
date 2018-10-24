'use strict'

const express = require('express');

const { DEFAULT_PORT } = require(__dirname + '/constants');
const { serverStartLogger } = require(__dirname + '/utils');

class ExpressServer {
    constructor() {
        this.app = express();

        this.listen = this.listen.bind(this);
        this.setStaticDirectory = this.setStaticDirectory.bind(this);
    }

    listen(port = DEFAULT_PORT) {
        this.app.listen(port, serverStartLogger(port));
    }

    setStaticDirectory(directoryPath) {
        this.app.use(express.static(directoryPath));
    }
}

module.exports = {
    ExpressServer
};