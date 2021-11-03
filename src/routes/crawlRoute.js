const express = require('express')
const router = express.Router()
const { getCrawlUrl } = require('../controller/Crawls')
const { validation } = require('../middlewares/validation')

router.post('/', validation, getCrawlUrl)

module.exports = router
