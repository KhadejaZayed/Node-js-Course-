require('dotenv').config();

const http = require('http'),
      app  = require('./app'),
      port = process.env.PORT || 8000;


//Application Server
http.createServer(app);

//Running App Server
app.listen(port, ()=>{
    console.log(`Server is running on localhost: ${port}`);
});
