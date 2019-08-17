const express = require('express');

const db = require('../data/db-config.js');

const Projects = require('./project-model.js.js');

const router = express.Router();

router.get('/', async (req,res) => {
    try{
        const projects = await Projects.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({message: 'What...like what...really? No, your projects (which you probably didnt do on time Anyway) Failed to be here.', error:err.message});
    }
});

router.post ('/', async (req,res) => {
    try{
        const projects = req.body;
        const [id] = await db('projects').insert(projects)
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: 'That has Failed', error:err.message})
    }
})