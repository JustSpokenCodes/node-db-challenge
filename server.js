const express = require('express');
const helmet = require('helmet');

const server = express();

const ProjectRouter = require('./project/project-router.js');

server.use(express.json());
server.use('/api/projects', ProjectRouter);

module.exports = server;