const express = require('express');
const router = express.Router();
const {createTask, getTasks, getTaskById, updateTask, deleteTask} = require('../controllers/taskController');
const { protect } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');

router.use(protect);

router.post('/',  createTask);
router.get('/',  getTasks);
router.get('/:id',  getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', authorizeRoles('admin', 'manager'), deleteTask);

module.exports = router;
