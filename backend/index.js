const express = require('express');
const usersRouter = require('./routers/users.router')
const postsRouter = require('./routers/posts.router')

const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3010

// pentru a vedea cererea json
app.use(express.json());
app.use(cors());
//Routers
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

//cerere get
/*app.get('/', (req, res) => {
    res.send('Hello World!');
})*/

// cerere post
/*app.post('/users', (req, res) => { // /users/:7 pt useri cu id7
    console.log(req.body);
    const userToBeCreated = req.body;
    console.log(userToBeCreated.firstName);
    res.send('The user will be created');
})
*/

app.listen(port, () => {
    console.log(`Example app is listening at ${port}`);
    // TODO remove
    mongoose
        .connect('mongodb+srv://Indira:anaaremere@cluster0.gmenhrh.mongodb.net/friendr?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
          console.log("connected to db and listening");
        })
        .catch((err) => console.error(err));
})
