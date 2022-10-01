const express = require('express');

const app = express();

const port = 3000

let newFruit;

app.get('/', function(req, res){
    res.send(fruits)
})

app.get('/fruit', function(req, res){
    console.log(req.query)
    if(req.query.readyToEat){
        console.log(Boolean(req.query.readyToEat=="true"))
        if(req.query.color){
            res.send((fruits.filter(fruit => fruit.readyToEat === Boolean(req.query.readyToEat=="true"))).filter(fruit2 => fruit2.color == req.query.color))
        } else {
            res.send(fruits.filter(fruit => fruit.readyToEat === Boolean(req.query.readyToEat=="false")))
        }
    } else if(req.query.color) {
        res.send(fruits.filter(fruit => fruit.color == req.query.color))
    } else {
        res.send(fruits)
    }
})

app.listen(port, ()=>{
    console.log('Listening to port ', port)
})

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    },
    {
        name: 'lemon',
        color: 'yellow',
        readyToEat: false
    },
    {
        name: 'lime',
        color: 'green',
        readyToEat: false
    }
];
