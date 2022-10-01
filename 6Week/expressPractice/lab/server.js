const express = require('express');

const app = express();

const port = 3000

app.get('/greeting/:name', function(req, res){
    res.send(`Hello, ${req.params.name}`)
})

app.get('/tip/:total/:tipPercent', function(req, res){
    res.send(`Your tip will be $${(req.params.total * req.params.tipPercent)/100}`)
})

const magic8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', function(req, res){
    let question = req.params.question.split('%20')
    res.send(`${question}? <h1>${magic8[Math.floor(Math.random()*magic8.length)]}</h1>`)
    
})

app.listen(port, ()=>{
    console.log('Listening to port ', port)
})