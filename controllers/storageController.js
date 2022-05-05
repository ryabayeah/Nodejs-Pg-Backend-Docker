const db = require('../models/database')
const {validationResult} = require("express-validator");
const config = require("../config");


class storageController {

    async getAll(req, res) {
        try {
            const storage = await db.Storage.findAll()
            res.json(storage)
        } catch (err) {
            console.log(err)
            res.status(500).json({status: false, message: "Get all error"});
        }
    }

    async createUserStorageRow(req, res, type) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return res.status(400).json({message: "Creation new storage row error", errors});
            const {url} = req.body;
            const row = await db.Storage.findOne({where: {user_id: req.user.id, url, type}});
            if (row)
                return res.status(400).json({status: false, message: 'Already exists'});
            const newRow = await db.Storage.create({
                user_id: req.user.id,
                url: url,
                type: type
            })
            res.json({status: true, message: 'Create new storage row successfully', data: newRow});
        } catch (e) {
            console.log(e)
            res.status(400).json({status: false, message: 'Creation new storage row error'});
        }
    }

    async deleteUserStorageRow(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return res.status(400).json({message: "Deletion storage row error", errors});
            const id = req.params.id;
            await db.Storage.destroy({where: {id}})
            res.json({status: true, message: 'Delete successfully'});
        } catch (e) {
            console.log(e)
            res.status(400).json({status: false, message: 'Deletion storage row error'});
        }
    }

    async getUserStorageRow(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({message: "Get storage row error", errors});
            const id = req.params.id;
            const row = await db.Storage.findByPk(id)
            res.json({status: true, message: 'Get storage row successfully', data: row});
        } catch (e) {
            console.log(e)
            res.status(400).json({status: false, message: 'Get storage row error'});
        }
    }

    async getUserStorageRows(req, res, type) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({message: "Get storage rows error", errors});
            const rows = await db.Storage.findAll({where:{user_id: req.user.id, type: type}})

            res.json({status: true, message: 'Get storage rows successfully', data: rows});
        } catch (e) {
            console.log(e)
            res.status(400).json({status: false, message: 'Get storage rows error'});
        }
    }


}

module.exports = new storageController()
