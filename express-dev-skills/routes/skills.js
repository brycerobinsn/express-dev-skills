var express = require('express');
var router = express.Router();

// Require the controller that exports skills CRUD functions
var skillsCtrl = require('../controllers/skills')
// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)
// GET /skills/:id
router.get('/:id', skillsCtrl.show)
router.get('/:id/edit', skillsCtrl.edit)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)
router.put('/:id', skillsCtrl.update)

module.exports = router;
