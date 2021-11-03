// Can use any framework you like
// express is already installed if you like to use it
// const express = require('express');

console.log('TODO: create and start the app')

const express = require('express')
const dotenv = require('dotenv')
//midlewaes
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')
//routes
const crawlRoute = require('./routes/crawlRoute')
const linksRoute = require('./routes/linksRoute')

const app = express()
app.use(express.json())

dotenv.config()

//Print a message every time a HTTP request is received
app.use('*', (req, res, next) => {
  console.log('HTTP request comes in!')
  next()
})
app.use('/api/crawl', crawlRoute)
app.use('/api/links', linksRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`API run on port ${PORT}`))
