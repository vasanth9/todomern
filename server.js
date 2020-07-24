const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./db')
const apiPort = process.env.PORT|| 8080
const todoRouter = require('./routes/todo-routes')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api', todoRouter)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))