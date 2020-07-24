const express = require('express')

const TodoCtrl = require('../controllers/todo-controllers')

const router = express.Router()

router.post('/todo', TodoCtrl.addTodo)
router.put('/todo/:id', TodoCtrl.updateTodo)
router.delete('/todo/:id', TodoCtrl.deleteTodo)
router.get('/todos', TodoCtrl.getTodos)
router.get('/todo/:id', TodoCtrl.getTodo)
module.exports = router 