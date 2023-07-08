const express = require('express');

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddlewares');

const router = express.Router();

router.get('/tasks', tasksController.getAllTasks);
router.get('/tasks/:id', tasksController.getTask);
router.post(
    '/tasks',
    tasksMiddleware.validateFieldTitle,
    tasksController.createTask
);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put(
    '/tasks/:id',
    tasksMiddleware.validateFieldTitle,
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTask
);

module.exports = router;
