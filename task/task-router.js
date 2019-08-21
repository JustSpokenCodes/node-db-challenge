const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();

router.get('/', async (req,res) => {
    try{
        const tasks = await Tasks.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({message: 'What...like what...really? No, your projects (which you probably didnt do on time Anyway) Failed to be here.', error:err.message});
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params; 

    try {
        const task = await Tasks.findById(id);
        if(task) {
            res.status(200).json(task)
        } else {
            res.status(404).json({message: 'Cant find that type in this, maybe look again'})
        }
    }catch (err) {
        res.status(500).json({message: 'Nononononono! You did something majorly wrong.', error:err.message})
    }
})

router.post ('/', async (req,res) => {
    const description = req.body
    const notes = req.body
    const task_id = req.body

    try{
        const task = await Tasks.add(description,notes,task_id);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: 'That has Failed', error:err.message})
    }
})

module.exports = router;