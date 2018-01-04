let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/taskModel'), // ⚡ created model loading here
  bodyParser = require('body-parser')

const DB_NAME = 'Tododb' /* ⚡ change this to whatever your db name is */

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/${DB_NAME}`)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./api/routes/taskRoutes') // ⚡ importing route
routes(app) // register the route

app.listen(port)

console.log('RESTful API server started on: ' + port)

app.use(function(req, res) { // changing default 404 message to our own
  res.status(404).send({url: req.originalUrl + ' not found'}) /* ⚡ */
})
