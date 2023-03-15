const User = require('../models/User')

module.exports = {
    //creating a user logic 
    async signup(req, res) {
        try {
          const { email, password, username } = req.body;
          console.log(User)
          const user = new User ({ email, password, username });
          await user.save()
    
          res.status(201).json({ message: 'User created successfully', user });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
    //login logic 
      async login(req, res) {
        const {email,password} = req.body;

        try {
            const user = await User.findOne({email, password});

            if(!user) {
                return res.status(401).json({message: "Invalid credentials"})
            }

            user.loggedIn = true;
            await user.save();

            return res.status(200).json({message:"Login Successful"})
        } catch (error){
            console.error(error);
            return res.status(500).json({message: 'server error'})
        }
      },
      async logout(req, res) {
        const {_id} = req.body;
        try{
            const user = await User.findById(_id);

            if(!user) {
                return res.status(404).json({message: "user not found"})
            }

            user.loggedIn = false;
            await user.save();
            
            return res.status(200).json({message: "logout succesful"});
        }catch(error){
            console.error(error);
            return res.status(500).json({message:"server error"})
        }
      },

  async getAllUsers(req, res) {
    const users = await User.find({});
    if (!users) {
      return res.status(400).json({ message: "No user found with that id" });
    }
    res.status(200).json(users);
  },

  async getSingleUser(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ message: "No user found with that id" });
    }
    res.status(200).json(user);
  },

  async createUser(req, res) {
    const {email, password} =req.body;
    const newUser = new User ({email, password});

    newUser 
        .save()
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({error:err.message})
        })
  },

  async updateUser(req, res) {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(400).json({ message: "Unable to update user" });
    }
    res.status(200).json(updatedUser);
  },
};




// old code
/* const {User} = require('../models/User');


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
*/