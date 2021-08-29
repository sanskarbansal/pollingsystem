const express = require('express')
require('./config/mongoose'); 


const app = express()
const PORT = process.env.PORT || 3000; 


app.use(express.json()); 
app.use(express.urlencoded()); 

app.use(require('./routes/')); 
 
app.listen(PORT, () => {
    console.log("Server successfully started on port: " + PORT); 
}  ); 