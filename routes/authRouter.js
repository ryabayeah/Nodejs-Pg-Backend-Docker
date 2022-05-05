const Router = require('express')
const authController = require("../controllers/authController")
const {check} = require("express-validator")
const authMiddleware = require('../middleware/authMiddleware')

const authRouter = new Router();

const registrationCheck = [
    check('email', "Email cannot be empty").notEmpty(),
    check('password', "Password cannot be shorter than 4 characters").isLength({min: 4})
]

authRouter.post('/registration', ...registrationCheck, authController.registration);
authRouter.post('/login', authController.login);
authRouter.get('/me', authMiddleware, authController.authMe);


module.exports = authRouter;

