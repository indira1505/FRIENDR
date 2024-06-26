const express = require('express');
const usersRouter = require('./routers/users.router')

const app = express();
const port = 3009

// pentru a vedea cererea json
app.use(express.json());

//Routers
app.use('/users', usersRouter);

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
})
