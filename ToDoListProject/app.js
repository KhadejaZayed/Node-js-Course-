require('dotenv').config();

const express  = require('express'),
      app      = express(),
      dbUrl    = process.env.DB_URL,
      mongoose = require('mongoose'),
      route   = require('./routes/router');


//DB Connection
(()=> {
    mongoose.connect(dbUrl);
    const db = mongoose.connection;
    mongoose.set('strictQuery', true);
    db.on('error', console.error.bind(console,'Connection Failed'));
    db.once('open', ()=>{
        console.log('DB Connection Succeed')
    })
})();

//Middlewares
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Routes Middleware
app.use('/tasks', route);

//Handle Request Error
app.use((req, res, next)=>{
    const error  = new Error("Request not found");
    error.status = 404;
    next(error);
})
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        errorMessage : {message: error.message}
    })
})
app.use((req, res, next)=>{
    res.status(200).json({
        message: "Server is Running Successfuly"
    })
    next();
})


module.exports = app;