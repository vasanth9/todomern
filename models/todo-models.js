const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema(
    {
        todo: { type: String, required: true },

        complete: { type: Boolean, default: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('todos', Todo) 