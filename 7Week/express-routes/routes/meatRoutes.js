// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our fruits data
const meat = require('../models/meat')

// Setup "index" route
router.get('/', (req, res) => {  
    res.send(meat)
})

// Setup "new" route
router.get('/new', (req, res) => {     
    res.send('<form>Create meat</form>')
})

// Setup "create" route
router.post('/', (req, res) => {
    res.send('Creating a new meat! (in DB)')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    res.send(meat[req.params.index])
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit meat</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a meat at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a meat at index! (in DB)')
})

module.exports = router
