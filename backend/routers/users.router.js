const express = require('express')
const usersController = require('../controllers/users.controller')
const router = express.Router();

// TODO remove
/*
const users = [
    {id: 1, firstName: "Forrest", lastName: "Gump"},
    {id: 2, firstName: "Hari", lastName: "Seldon"},
    {id: 3, firstName: "Tom", lastName: "Cruise"},
];
*/
router.post('/', usersController.createUsers)
// router.post('/', (req, res) => { 
//     usersController.createUsers(req.body);
//     res.status(201); // statusul returnat. nu e obligatoriu
//     res.send("Successfully created!");
// })
router.get('/:userName', usersController.getUser);

// router.get('/', (req, res) => { 
//     const userId = req.query.id;
//     res.status(404).send();
// })

router.delete('/:id', usersController.deleteUser)
//steregre users. userul e parametru, nu mai e cu '?'
// router.delete('/:id', (req, res) => { 
//     const reqUserId = req.params.id;
//     usersController.delete(reqUserId);
//     res.status(200).send();
// })
module.exports = router;