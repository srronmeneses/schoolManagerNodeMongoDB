const express = require('express')
const router = express.Router()
const { getAll, createOne, updateOne, deleteOne } = require('../components/courses')

router.get('/', getAll)
router.post('/', createOne)
router.put('/', updateOne)
router.delete('/', deleteOne)

module.exports = router