const express = require('express');
const helmet = require('helmet');

const server = express();

const ProjectRouter = require('./project/project-router.js');
const db = require('./data/db-config.js');


server.use(express.json());
server.use('/api/project', ProjectRouter);

module.exports = server; 