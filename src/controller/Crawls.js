const asyncHandler = require('express-async-handler')
const crawlUrls = require('../crawler')

const getCrawlUrl = asyncHandler(async (req, res) => {
  const { paths, depth, http } = req.body
  const arrCrawlUrl = await crawlUrls(paths, depth, http)
  res.status(202).send(arrCrawlUrl)
})

module.exports = { getCrawlUrl }
