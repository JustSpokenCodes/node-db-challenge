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

router.get('/:id', async (req, res) => {
    const {id} = req.params; 

    try {
        const project = await Projects.findById(id);
        if(project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({message: 'Cant find that type in this, maybe look again'})
        }
    }catch (err) {
        res.status(500).json({message: 'Nononononono! You did something majorly wrong.', error:err.message})
    }
})

router.post ('/', async (req,res) => {
    const projectData = req.body;

    try{
        const project = await Projects.add(projectData);
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: 'That has Failed', error:err.message})
    }
})

module.exports = router;