'use strict'

let mongoose = require('mongoose'),
  Schema = mongoose.Schema

var TaskSchema = new Schema({ /* ⚡ all below */
  name: {
    type: String,
    required: 'You must provide a task name'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
})

module.exports = mongoose.model('Tasks', TaskSchema) /*⚡*/

// ✳️ SCHEMAS http://mongoosejs.com/docs/guide.html
// ✳️ MODELS  http://mongoosejs.com/docs/models.html
