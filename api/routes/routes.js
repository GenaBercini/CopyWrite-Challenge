const  { Router } = require('express')
const getReverse = require('../controllers/getReverse')

const router = Router();

router.get('/iecho', getReverse);

module.exports = router