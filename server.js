const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const contains = require('./assets/js/filter')

app.set("view engine", "html")

app.use(express.static(path.join(__dirname,"views")))

app.get('/',(req,res)=>{
    res.render('index.html');
})
app.get('/items',async(req,res)=>{
    const {name} = req.query;
    
    const data = await axios.get("https://api.publicapis.org/entries");
    if(name){
      res.json(contains(data.data.entries,name));
    }
    else {
        res.json(data.data.entries);
    }
    
})

app.listen(8080,()=>{
    console.log('app started on http://localhost:'+8080);
})