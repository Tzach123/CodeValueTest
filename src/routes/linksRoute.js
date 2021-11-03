const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('/')
})

router.get('/:path', (req, res) => {
  const { path } = req.params
  res.send('/:path')
})

module.exports = router
