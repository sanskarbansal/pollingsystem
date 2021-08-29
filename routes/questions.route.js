const express = require('express'); 
const router = express.Router(); 

const questionsController = require('../controllers/questions.controller'); 


router.post('/create', questionsController.create); 

router.post('/:id/options/create', questionsController.optionCreate); 
router.post('/:id/delete', questionsController.delete); 

router.get('/:id', questionsController.get); 



module.exports = router; 