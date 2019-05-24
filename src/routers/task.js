const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
var $ = require('jQuery');

const router = new express.Router()

router.post('/tasks', async (req, res) => {
    
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks/completed',  async(req,res)=> {
    const match = {}
    try{
        
        const taskCompleted = await Task.find({completed:true})
     
       
        res.render('pets',{
            title: "Pets",
            list:taskCompleted
            
        })
    }catch(e){
        res.status(400).send(e)
    }
})
router.get('/tasks/uncompleted',  async(req,res)=> {
    const match = {}
    try{
        
        const taskCompleted = await Task.find({completed:false})
     
       
        res.render('pets',{
            title: "Pets",
            list:taskCompleted
            
        })
    }catch(e){
        res.status(400).send(e)
    }
})
router.get('/allTasks', async(req, res)=>{
  
    try{
        const task = await Task.find({})
       
        res.render('pets',{
            title: "Pets",
            list:task
            
        })
       
    }catch(e){
        res.status(400).send(e)
    }
})

//GET /tasks?completed=
//GET /tasks?limit=10&skip=0
//GET /tasks?sortBy=createdAt:desc
router.get('/tasks', auth ,async (req, res) => {
const match = {}
const sort = {}
if(req.query.completed){
    match.completed = req.query.completed === 'true'

}

if(req.query.sortBy)
{
    const parts = req.query.sortBy.split(':')
    sort[parts[0]] = parts[1] === 'desc'? -1 : 1
}

    try {

        // const tasks = await Task.find({})
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
                    // // createdAt: -1
                    // completed: -1
                }
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({_id, owner:req.user._id})

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {

        const task = await Task.findOne({_id:req.params.id, owner: req.user._id})
        

       
        if (!task) {
            return res.status(404).send()
        }

        updates.forEach((update) =>
        {
            task[update]=req.body[update]
        })
        await task.save()


        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({_id:req.params.id, owner: req.user._id})

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router