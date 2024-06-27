const UserModel = require('../data/users.model');
const usersService = {
    getUserById: async (userId) => {
        const response = await UserModel.findOne({ id: userId }, {});
        return response;
    },
    createUsers: (userObj) => {
        console.log("Reached user service");
        console.log(userObj);
       // const kitty = new Cat({ name: 'Zildjian' });
       // kitty.save().then(() => console.log('meow'));
       const userToBeCreated = new UserModel(userObj);
       userToBeCreated.save().then(() => console.log('User Created') );
    },
    deleteUsers: (userId) => {
        console.log(`Deleted user ${userId} in service`);
    }

}
module.exports = usersService;