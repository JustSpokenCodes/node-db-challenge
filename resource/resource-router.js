const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();

router.get('/', async (req,res) => {
    try{
        const resources = await Resources.find();
        res.json(resources);
    } catch (err) {
        res.status(500).json({message: 'What...like what...really? No, your projects (which you probably didnt do on time Anyway) Failed to be here.', error:err.message});
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params; 

    try {
        const resource = await Resources.findById(id);
        if(resource) {
            res.status(200).json(resource)
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
    const resource_id = req.body

    try{
        const resource = await Resources.add(description,notes,resource_id);
        res.status(201).json(resource);
    } catch (err) {
        res.status(500).json({ message: 'That has Failed', error:err.message})
    }
})

module.exports = router;