const express = require('express')
const router = express.Router();

// TODO remove

const users = [
    {id: 1, firstName: "Forrest", lastName: "Gump"},
    {id: 2, firstName: "Hari", lastName: "Seldon"},
    {id: 3, firstName: "Tom", lastName: "Cruise"},
];

router.post('/', (req, res) => { 
    console.log(req.body);
    res.status(201); // statusul returnat. nu e obligatoriu
    res.send("Successfully created!");
})


router.get('/', (req, res) => { 
    console.log(req.query.id);
    const userId = req.query.id;
    let found = false;
    for (const user of users)
    {
        if (user.id == userId){
            res.send(user);
            found = true
           // return;
        }

    
    }
    if (!found)
    res.status(404).send();
})
module.exports = router;