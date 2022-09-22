// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our fruits data
const vegetables = require('../models/vegetables')

// Setup "index" route
router.get('/', (req, res) => {  
    res.send(vegetables)
})

// Setup "new" route
router.get('/new', (req, res) => {     
    res.send('<form>Create vegetable</form>')
})

// Setup "create" route
router.post('/', (req, res) => {
    res.send('Creating a new vegetable! (in DB)')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    res.send(vegetables[req.params.index])
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit vegetable</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a vegetable at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a vegetable at index! (in DB)')
})

module.exports = router
