const UserModel = require('../data/users.model');
const usersService = {
    // getUserById: async (userId) => {
    //     const response = await UserModel.findOne({ id: userId }, {});
    //     return response;
    // },
    getUserByUsername: async (userName) => {
        const response = await UserModel.findOne({ userName: userName }, {});
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
    deleteUsers: async (userId) => {
        try {
            const result = await UserModel.findOneAndDelete({ id: userId});
            if (result) {
                console.log(`Userul cu id-ul ${userId} a fost șters.`);
               // res.status(200).send(`Postul cu id-ul ${postId} a fost șters.`);
            } else {
                console.log(`Userul cu id-ul ${userId} nu a fost găsit.`);
                //res.status(404).send(`Postul cu id-ul ${postId} nu a fost găsit.`);
            }
        } catch (err) {
            console.error('Eroare la ștergerea postului:', err);
            //res.status(500).send('Eroare la ștergerea postului.');
        }
    }


}
module.exports = usersService;