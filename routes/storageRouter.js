const Router = require("express");
const signController = require("../controllers/storageController");
const authMiddleware = require("../middleware/authMiddleware");
const config = require("../config");


const storageRouter = new Router();

storageRouter.get('/audios', authMiddleware, (req, res) => signController.getUserStorageRows(req, res, config.fileTypes.audio));
storageRouter.get('/videos', authMiddleware, (req, res) => signController.getUserStorageRows(req, res, config.fileTypes.video));
storageRouter.get('/photos', authMiddleware, (req, res) => signController.getUserStorageRows(req, res, config.fileTypes.photo));
storageRouter.get('/files', authMiddleware, (req, res) => signController.getUserStorageRows(req, res, config.fileTypes.file));

storageRouter.post('/audio', authMiddleware, (req, res) => signController.createUserStorageRow(req, res, config.fileTypes.audio));
storageRouter.post('/video', authMiddleware, (req, res) => signController.createUserStorageRow(req, res, config.fileTypes.video));
storageRouter.post('/photo', authMiddleware, (req, res) => signController.createUserStorageRow(req, res, config.fileTypes.photo));
storageRouter.post('/file', authMiddleware, (req, res) => signController.createUserStorageRow(req, res, config.fileTypes.file));

storageRouter.get('/all', signController.getAll);
storageRouter.delete('/row/:id', authMiddleware, signController.deleteUserStorageRow);
storageRouter.get('/row/:id', authMiddleware, signController.getUserStorageRow);


module.exports = storageRouter;