require('dotenv').config();

const express  = require('express'),
      app      = express(),
      mongoose = require('mongoose'),
      productsRouter = require('./routes/products');

//DB Connection
(()=> {
     mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
     mongoose.set('strictQuery', true);
     const db = mongoose.connection;
     db.once('open', ()=> console.log("DB connected successfully"))
     db.on('error', ()=> console.log('Connection Failed'));
})();

//Routes Middleware
app.use('/products', productsRouter);

//Handle Request Error
app.use((req, res, next)=> {
    const error = new Error("Request not found .. something wrong .. Try Again");
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        errorMessage : {
            message: error.message
        }
    })
})
app.use((req, res, next) =>{
    res.status(200).json({
        message : "Server Running Successfully"
    })
    next();
})

app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Export App
module.exports = app;