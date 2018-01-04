'use strict'

module.exports = (app) => {
  let task = require('../controllers/taskController') /*⚡*/

  app.route('/tasks') /* ⚡ all below */
    .get(task.get_all)
    .post(task.create)

  app.route('/tasks/:taskId') /* ⚡ all below */
    .get(task.get)
    .put(task.update)
    .delete(task.delete)
}
