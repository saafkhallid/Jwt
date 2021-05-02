const express = require('express')
const pageController = require('../controllers/pagesContrller')
const { adminValidation, userValidation, techValidation } = require('../middlewares/authValidation')


const router = express.Router()


router.post('/admin', adminValidation, pageController.adminPage)
router.post('/user', userValidation, pageController.userPage)
router.post('/tech', techValidation, pageController.techPage)




module.exports = router;