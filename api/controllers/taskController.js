'use strict'

let mongoose = require('mongoose')
let Task = mongoose.model('Tasks') /*⚡*/

exports.get_all = (req, res) => { /* ⚡ all below */
  Task.find({}, (err, task) => {
    if (err)
      res.send(err)
    res.json(task)
  })
}

exports.create = (req, res) => { /* ⚡ all below */
  var new_task = new Task(req.body)
  new_task.save((err, task) => {
    if (err) {
      res.send(err)
    }
    res.json(task)
  })
}

exports.get = (req, res) => { /* ⚡ all below */
  Task.findById(req.params.taskId, (err, task) => {
    if (err) {
      res.send(err)
    }
    res.json(task)
  })
}

exports.update = (req, res) => { /* ⚡ all below */
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
    if (err) {
      res.send(err)
    }
    res.json(task)
  })
}

exports.delete = (req, res) => { /* ⚡ all below */
  Task.remove({
    _id: req.params.taskId
  }, (err, task) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Task successfully deleted' })
  })
}
