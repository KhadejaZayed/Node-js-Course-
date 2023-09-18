require('dotenv').config();

const express = require('express'),
    app       = express(),
    port      = process.env.PORT,
    webRouter = require('./routes/web');

//set view engine
app.set('view engine','ejs');
app.listen(port, ()=>{
    console.log(`Server running on local host: ${port}`);
});


//connection with routes
app.use(webRouter);
app.use(express.static('views'));

app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
