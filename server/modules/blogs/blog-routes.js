const express = require('express')
const router = express.Router();
const blogController = require('./blog-controller')

router.post('/new',blogController.createNewBlog )
router.get('/list',blogController.getListOfAllBlogs )
router.get('/:id',blogController.findRequestedBlog )

module.exports = router;    