const express = require('express');
const helmet = require('helmet');

const server = express();

const ProjectRouter = require('./project/project-router.js');
const ResourceRouter = require('./resource/resource-router.js');
const TaskRouter = require('./task/task-router.js');
const db = require('./data/db-config.js');


server.use(express.json());
server.use(helmet());
server.use('/api/project', ProjectRouter);
server.use('/api/resource', ResourceRouter);
server.use('/api/task', TaskRouter);

module.exports = server; 