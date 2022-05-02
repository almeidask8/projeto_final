const { Router } = require('express')
const DeviceController = require('../controllers/DeviceController')

const router = Router()

router.get('/api/device', DeviceController.read)
router.post('/api/device', DeviceController.create)
router.delete('/api/device/:id', DeviceController.delete)


module.exports = router