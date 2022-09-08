const express = require("express")

const route = express.Router()

route.get('/hello', (req, res) => {
    res.send("Hello there")
})

route.get('/hi', (req, res) => {
    res.send("Hi there")
})

module.exports = route