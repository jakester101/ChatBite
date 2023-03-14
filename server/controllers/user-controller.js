const {User} = require('../models/User');


module.exports = {
    async SignUp(req, res) {
        try{
            const {email, password } = req.body;
            const user = await User.create({email,password});

            res.status(200).json({message: "User created ", user})
        }catch(error){
            console.error(error);
            res.status(500).json({message: "server error"})
        }
    },
    async getAllUsers(req, res){
        const User = await User.find({});
        if(!user){
            return res.status(400).json({message: "No user found with that id"})
        }
        res.status(200).json(user);
    },
    async getSingleUser(req, res){
        const User = await User.find({_id: params.id});
        if(!user){
            return res.status(400).json({message: "No user found with that id"})
        }
        res.status(200).json(user);
    },
    async createUser({body}, res){
        const User = await User.create(body);
        if(!user){
            return res.status(400).json({message: "uable to create user"})
        }
        res.status(200).json(user);
    },
    async updateUser(req, res){
        const User = await User.findOneAndUpdate(
            {}
        );
        if(!user){
            return res.status(400).json({message: "uable to update user"})
        }
        res.status(200).json(user);
    }
}