const db = require('../models/database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require('../config')


const generateAccessToken = (id) => {
    const payload = {id};
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return res.status(400).json({message: "Registration error", errors});
            const {email, password, firstName, lastName} = req.body;
            const candidate = await db.User.findOne({where: {email: email}});
            if (candidate)
                return res.status(400).json({status: false, message: 'This email already exists'});

            const hashPassword = bcrypt.hashSync(password, 7);
            const user = await db.User.build({
                email: email,
                password: hashPassword,
                firstName: firstName,
                lastName: lastName,
            })
            await user.save()
            res.json(
                {
                    status: true,
                    message: 'User registered successfully',
                    data: {
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                    }})
        } catch (e) {
        console.log(e)
            res.status(400).json({status: false, message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await db.User.findOne({where: { email: email}});
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword || !user)
                return res.status(400).json({message: `Incorrect login or password`});

            const token = generateAccessToken(user.id);
            return res.json({token});
        } catch (e) {
            res.status(400).json({message: 'Login error'});
        }
    }

    async authMe(req, res) {
        try {
            const user = await db.User.findOne({where: {id: req.user.id}});
            res.json({
                status: true,
                data: {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                }})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Me error'});
        }
    }

}

module.exports = new authController()
