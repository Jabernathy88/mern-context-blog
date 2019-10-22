const express = require('express')
const router = express.Router()
// const userController = require('../controllers/userController')
const postsController = require('../controllers/postsController')

// router.get('/api/users', userController.index)
// router.post('/api/users/', userController.create)
// router.get('/api/users/:userId', userController.show)
// router.patch('/api/users/:userId', userController.update)
// router.delete('/api/users/:userId', userController.delete)

router.get('/api/posts', postsController.index)
router.post('/api/posts', postsController.create)
router.get('/api/posts/:postId', postsController.show)
// router.get('/api/users/:userId/posts', postsController.index) // serialized by user
router.patch('/api/posts/:postId', postsController.update)
router.delete('/api/posts/:postId', postsController.delete)

module.exports = router
