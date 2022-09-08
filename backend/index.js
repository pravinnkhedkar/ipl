const express = require('express')
const path=require('path')
const cors=require('cors')
const app = express()
const port = 2000

const greetingRoutes=require('./Routes/greeting')

const picturesPath=path.join(__dirname,'pictures')
app.use(express.static(picturesPath))
app.use(cors())

app.use('/greeting',greetingRoutes)

const arrOfImages=[
    "http://localhost:2000/bangalore.jpg",
    "http://localhost:2000/chennai.jpg",
    "http://localhost:2000/delhi.jpg",
    "http://localhost:2000/hyderabad.jpg",
    "http://localhost:2000/kolkata.jpg",
    "http://localhost:2000/mumbai.jpg",
    "http://localhost:2000/punjab.jpg",
    "http://localhost:2000/rajasthan.jpg",
]

app.get('/', (req, res) => {
    res.send(arrOfImages)
})

app.listen(port, () => {
    console.log(`App is running on Port ${port}`)
})