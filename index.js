const express = require('express')
const app = express();
const port = 5000;
const chefData = require('./data/ChefData.json')

app.get('/', (req, res) =>{
    res.send("port is running")
})
app.get('/chefdata', (req, res) =>{
    res.send(chefData)
})
app.listen(port, ()=>{
    console.log(`Chef Api port is running: ${port}`)
})