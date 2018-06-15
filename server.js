const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))



app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html')
})
app.get('/animal-beh', function(req, res) {
    res.sendfile(__dirname + '/public/animal-beh.html')
})

app.get('/diet', function(req, res) {
    res.sendfile(__dirname + '/public/diet.html')
})

app.get('/facts', function(req, res) {
    res.sendfile(__dirname + '/public/facts.html')
})

app.get('/scrum', function(req, res) {
  res.sendfile(__dirname + '/public/scrum.html')
})

app.listen(9000, () => {
    console.log('Server started on port: 3000');
})