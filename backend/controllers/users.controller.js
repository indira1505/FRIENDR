const { default: mongoose } = require("mongoose");
const usersService = require("../services/user.service");

const usersController = {
    getUser: async (req, res) => {
        console.log("Reached GET user controller");
        const userId = req.params.id
        console.log(userId);
        const userObj = await usersService.getUserById(userId);
        res.status(200).send(userObj);
    },

    createUsers: async (req, res) => {
        console.log("Reached user controller");
        const userToBeCreated = req.body;
        console.log(userToBeCreated);
        // validare user object from request
        if(
            !userToBeCreated || 
            !userToBeCreated.id ||
            !userToBeCreated.firstName || 
            !userToBeCreated.lastName || 
            !userToBeCreated.userName
        ){
            res.status(400).send("Invalid user object");
            return;
        }
        usersService.createUsers(userToBeCreated);
        res.status(201).send("User created successfully");
    },
    deleteUser: async (req, res) => {
        console.log(`Deleted user with id: ${userId}`);
        usersService.deleteUsers(userId);
    }
}
module.exports = usersController