const  Task = require('../models/task');     


function getTask(req,res){
    Task.find({})
    .select("_id title details")
    .then(tasks =>{
        if(tasks.length >0){
            res.json({
                tasks: tasks,
                message : "Tasks Retrieved Successfully"
            })
        }else{
            res.status(404).json({message: "There is No Tasks Until Now"});
        }
    })
    .catch(err =>{
        res.status(500).json({error: err.message});
    })
}

function storeTask(req,res){
    const task = new Task({
        title   : req.body.title,
        details : req.body.details
    });
    task.save()
    .then(savedTask => {
        console.log(savedTask);
        res.status(200).json({
            method : "POST",
            url : "http://localhost:3000/tasks",
            message : "Task Saved Successfully"
        })
    })
    .catch(err=>{
        res.status(500).json({error : err.message});
    })
}

function showTask(req,res){
    const id = req.params.id;
    Task.findById(id)
    .select("_id title details")
    .then(task=>{
        if(task){
            res.status(200).json(task);
        }
        else{
            res.status(404).json({message : "Task is not found"});
        }
    })
    .catch(err=>{
        res.status(500).json({error : err.message});
    })
}

function updateTask(req, res){
    const id = req.params.id;
    Task.findByIdAndUpdate(id, {$set : req.body})
    .then(result=>{
        if(result){
            res.status(200).json(result);
        }
        else{
            res.status(404).json({message : "Task Not Found"});
        }
    })
    .catch(err=>{
        res.status(500).json({error : err.message});
    })
}

function deleteTask(req, res){
    const id= req.params.id;
    Task.deleteOne({_id : id})
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        res.status(500).json({error : err.message});
    })
}

module.exports = {
    getTask,
    storeTask,
    showTask,
    updateTask,
    deleteTask
}
