const port=3000;
express = require('express');
app = express();
routing = require(__dirname+'/express.js');
app.use('/', routing);
app.listen(port, ()=> {console.log(`Server Started on Port: ${port}`);});