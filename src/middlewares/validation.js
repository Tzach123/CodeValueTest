const validation = (req, res, next) => {
  const { depth } = req.body

  if (typeof depth !== 'number' || depth > 5) {
    console.log('srge')

    res.status(400)
    throw new Error('Depth is not a valid number or it exceeds maximum (5)')
  }

  next()
}

module.exports = { validation }
