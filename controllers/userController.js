const db = require('../models/database')


class UserController {
    async getUsers(req, res) {
        try {
            const users = await db.User.findAll()
            res.json(users)
        } catch(err) {
            res.status(500).send(JSON.stringify(err));
        }
    }
    async getUser(req, res) {
        try {
            const user = db.User.findByPk(req.user.id)
            res.json(
                {
                    status: true,
                    message: 'User get successfully',
                    data: {
                        id: user.id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                    }
                })
        } catch(err) {
            res.status(500).send(JSON.stringify(err));
        }
    }

    async updateUser(req, res) {
        try {
            const user = await db.User.update(req.body, {where: {id:req.user.id}})
            console.log(user)
            res.json({
                status: true,
                message: "User successfully updated"})
        } catch(err) {
            res.status(500).send(JSON.stringify(err));
        }
    }

    async deleteUser(req, res) {
        try {
            const user = db.User.destroy({where: {id: req.user.id}})
            res.json({status: true, message: "User successfully deleted"})
        } catch(err) {
            res.status(500).send(JSON.stringify(err));
        }
    }


}

module.exports = new UserController()