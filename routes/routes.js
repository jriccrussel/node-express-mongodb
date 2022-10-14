const express = require('express')
const router = express.Router()

const { 
    get_all,
    get_id,
    create_post,
    update_post,
    delete_post,
} = require('../controllers/person')
const { update } = require('../models/model')

// get all
router.get('/getAll', get_all)

// post method
router.post('/post', create_post)

// get by id method
router.get('/getOne/:id', get_id)

// update by id method
router.patch('/update/:id', update_post)

// delete by id method
router.delete('/delete/:id', delete_post)

module.exports = router 