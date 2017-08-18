//сервер запуск, 5 методів, в пост пробуєм відправити пейлоад, ---- в геті статус 200, посто--201, пут 200, делейт 204

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const jsonParser = bodyParser.json();


var users = []

const fakeUser = {
    id: 1,
    firstName: 'Andrii',
    lastName: 'Boiko'
};

users.push(fakeUser);

router.get('/:id', function (req, res) {
  res.status(200).send('get user by Id');
  
});

router.get('/', function(req, res) {
  res.status(200).send(users); 
});

router.post('/',jsonParser, function(req, res) {
    if(JSON.stringify(req.body) === JSON.stringify({})){
        res.status(409).end();
    }
    
    users.push(req.body);

  res.status(201).send(req.body); 
});

router.put('/:id', function(req, res) {
  res.status(200).send('user was updated'); 
});

router.delete('/:id', function(req, res) {
  res.status(204).end();
});

app.use('/users', router);


app.listen(3000, function() {
  console.log('listening on 3000');
})

module.exports = app;



