const Todo = require('../models/todo-models')

addTodo = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400)
            .json(
                {
                    success: false,
                    error: 'Please provide the todo',
                })
    }

    const todo = Todo(body)
    if (!todo) {
        return res.status(400).json({ success: false, error: err })
    }
    todo.save()
        .then
        (() => {
            return res.status(201).json({
                success: true,
                id: todo._id,
                message: 'Todo created!',
            })
        }).catch(error => {
            return res.status(400).json({
                error,
                message: 'failed todo!',
            })
        })

}
deleteTodo = async (req, res) => {
    await Todo.findOneAndDelete({ _id: req.params.id }, (err, todo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!todo) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }

        return res.status(200).json({ success: true, data: todo })
    }).catch(err => console.log(err))
}
updateTodo = async (req, res) => {

    await Todo.findOne({ _id: req.params.id }, (err, todo) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Todo not found!',
            })
        }
        todo.complete = !todo.complete
        todo
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: todo._id,
                    message: 'Todo updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Todo not updated!',
                })
            })
    })
}
getTodos = async (req, res) => {
    await Todo.find({}, (err, Todos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Todos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Todos not found` })
        }
        return res.status(200).json({ success: true, data: Todos })
    }).catch(err => console.log(err))
}
getTodo = async (req, res) => {
    await Todo.findOne({ _id: req.params.id }, (err, Todos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Todos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Todos not found` })
        }
        return res.status(200).json({ success: true, data: Todos })
    }).catch(err => console.log(err))
}
module.exports = {
    addTodo,
    deleteTodo,
    updateTodo,
    getTodos, getTodo
}