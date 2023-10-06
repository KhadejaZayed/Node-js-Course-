require('dotenv').config();

const express       = require('express'),
      app           = express(),
      expressLayout = require('express-ejs-layouts'),
      port          = process.env.PORT,
      // mongoose   = require('mongoose');
      { default: mongoose } = require('mongoose');
    
app.set('view engine', 'ejs');
app.use(expressLayout);

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname+'/node_modules'));

//DB Connection
(()=>{
    mongoose.connect(process.env.DB_URI);
    const db = mongoose.connection;
    db.on('error',console.error.bind(console,'Connection Failed'));
    db.once('open',()=>{
        console.log('Connection Success');
    })
})();

app.use(express.urlencoded({extended:false}));

app.use(require('./routes/web'));

app.listen(port, ()=>{
    console.log(`Server running on localhost:${port}`);
});
