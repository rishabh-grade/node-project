const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userContoller = require('./src/controllers/UserController')
app.use(bodyParser.json())
const connectDB = require('./src/db/db')

const dbConnection = async () => {
    try {
        await connectDB()
    } catch (err) {
        console.log(err)
    }
}
dbConnection()

app.get('/', (req, res) => {
    res.end("Hello World!")
})
app.post('/user', userContoller.createUser)

app.get('/user', userContoller.getUser)

app.listen(3000, () => {
    console.log("server started on port 3000")
})