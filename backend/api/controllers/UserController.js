const database = require('../models');
const bcrypt    = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

class UserController {

    /**
     * GET /api/user/login
     */
     static async login(req, res) {
        const { username, password } = req.body;
        console.log (`usuario senha: `, req.body)

        try {
            const login_one = await database.User.findOne({ where: { username: username } });
            console.log (`usuario: `, login_one.username)
            if (!login_one) {
                return res.status(404).json({ message: 'User not found'});
            } else {

                console.log (`senha hash banco: `, login_one.password)
                const authUser = await bcrypt.compare(password, login_one.password);
                console.log (`authUser: `, authUser)

                if(!authUser){
                return res.status(422).json({
                    message: "Incorrect password",
                    });
                }
                console.log(process.env.AUTH_EXPIRESIN)


                const token = jwt.sign({
                    username: authUser.username,
                    id: authUser.id
                },
                    'confidencial', {
                    expiresIn: '1m',
                    
                });
                //return res.status(200).json({ token: token });
                console.log (`token: `, token)
                return  res.header("token", token).send({token: token});
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

     /**
     * POST /user
     */
    static async register(req, res) {
        const { username,  password } = req.body;
        try
        {
            const login_one = await database.User.findOne({ where: { username: username } });
            console.log (`login_one`, login_one)

            if (login_one) {
                return res.status(201).json({
                    message: "User already in use",
                });
            } else {
                const hashPass = await bcrypt.hash(password, 10);
                console.log (`username`, username)
                console.log (`hashPass`, hashPass)
                const insert_user = await database.User.create({ username: username, password: hashPass });
                console.log (`11`, insert_user)

                return res.status(200).json(insert_user);
            }
        } catch(error){
            return res.status(500).json(error.message);
        }
    }
  
  


}

module.exports = UserController;