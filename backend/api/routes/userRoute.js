const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.post('/api/signin', UserController.login);
router.post('/api/signup', UserController.register);

module.exports = router;