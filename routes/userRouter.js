const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get("/all", userController.getUsers);
router.get("/", authMiddleware, userController.getUser);
router.put("/", authMiddleware, userController.updateUser);
router.delete("/", authMiddleware, userController.deleteUser);

module.exports = router;
