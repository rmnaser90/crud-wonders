const express = require('express')
const router = express.Router()

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true },
    { name: "niceplace", location: "somewhere", visited: false }
]


router.get('/wonders', function (req, res) {
    res.send(wonders)
})

router.post('/wonder', function (req, res) {
    const newWonder = req.body
    newWonder.visited = false
    wonders.push(newWonder)
    console.log("Someone's trying to make a post request")
    res.end()
})
router.put('/wonder/:name', function (req, res) {

    const name = req.params.name
    wonders.find(w => w.name == name).visited = true

    res.end()
})

router.delete('/wonder/:name', function (req, res) {
const name = req.params.name
const index = wonders.findIndex(w => w.name == name)
wonders.splice(index,1)
res.end()
})

module.exports=router