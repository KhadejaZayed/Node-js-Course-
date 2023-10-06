const Event = require('../models/event');

function showEvent(req,res){
    // const events=[{_id: 1, title:'HTML5', price: 1200, description: 'Hello World'},
    // {_id: 2, title: 'Nodejs', price: 2100, description: 'Hello World2'}];
    // res.render('pages/event.ejs', {events});
    
    Event.find()
    .then(events => res.render('pages/events.ejs', {events}))
    .catch(err => console.log(err.message));
}

function showSingleEvent(req,res){
    const id= req.params._id;
    Event.findById(id)
    .then(events => res.render('pages/single.ejs',{events}))
    .catch(err => console.log(err.message));
}

function createEvent(req, res){
    res.render('pages/create.ejs');
}

function storeEvent(req,res){
    const event = new Event(
        {title: req.body.title,
        price: req.body.price,
        description: req.body.description}
    );
    event.save()
    .then(()=> req.redirect('/events'));
}

function deleteEvent(req,res){
    // Event.deleteOne({id:req.params.id})
    const id= req.params.id;
    Event.findByIdAndDelete(id)
    .then(()=> res.redirect('/events'))
    .catch((err)=> console.log(err.message));
}

function editEvent(req,res){
    const id= req.params._id;
    Event.findById(id)
    .then(event => res.render('pages/edit.ejs', {event}))
    .catch(err => console.log(err.message));
}

function updateEvent(req,res){
    const id= req.params.id;
    Event.findByIdAndUpdate(id,{
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    })
    .then(()=> res.redirect('/events'))
    .catch(err => console.log(err.message));
}

module.exports={
    showEvent,
    showSingleEvent,
    createEvent,
    storeEvent,
    deleteEvent,
    editEvent,
    updateEvent
};