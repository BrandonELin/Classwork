const express = require('express');

const app = express();

const port = 3000

app.get('/:index', function(req, res){
    res.send(plants[req.params.index])
})

app.get('/hello/:firstname/:lastname', function(req, res){
    res.send('Hello ' + req.params.firstname + req.params.lastname)
})

app.get('/howdy/:firstname', function(req, res){
    console.log(req.params, ':parameters')
    console.log(req.query, ':queries')
    res.send('testing')
})

app.listen(port, ()=>{
    console.log('Listening to port ', port)
})

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]
