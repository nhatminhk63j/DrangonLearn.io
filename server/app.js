const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let user = 'user1';
let password = 'thisisuser';
const port = 3001;
const MONGO_URI = `mongodb+srv://${user}:${password}@dragonlearncluster-9aoa7.mongodb.net/dragonlearn?retryWrites=true&w=majority`;
const app = express();

const game_router = express.Router();
const game_controller = require('./src/controller/game');

const user_router = express.Router();
const user_controller = require('./src/controller/user');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Image wtfattp 
app.use('/image/wtfattp', express.static(__dirname + '/image/wtfattp'));
app.use('/image/mfap', express.static(__dirname + '/image/mfap'));

///Game
app.use('/game', game_router);
/// Write the fraction according to the picture
game_router.post('/wtfattp/create_data', game_controller.create_wtfattp_data);
game_router.get('/wtfattp', game_controller.wtfattp);
/// Matching Figures And Pictures
game_router.post('/mfap/create_data', game_controller.create_mfap_data);
game_router.get('/mfap', game_controller.mfap);

///User
app.use('/user', user_router);
user_router.post('/create', user_controller.create);
user_router.get('/login', user_controller.login);

var db = mongoose.connection;

db.once('open', function () {
  console.log('connected mongodb');
});

app.get('/', (req, res) => res.send('Dragon Learn'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));