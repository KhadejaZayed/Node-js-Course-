const express = require('express'),
      router  = express.Router(),
      taskController = require('../controllers/task.controller.js');


router.get('/',taskController.getTask);
router.post('/', taskController.storeTask);
router.get('/:id', taskController.showTask);
router.patch('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
