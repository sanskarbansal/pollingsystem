const express = require('express'); 
const router = express.Router(); 

const optionsController = require('../controllers/options.controller'); 

router.post("/:id/delete", optionsController.delete); 
router.post("/:id/add_vote", optionsController.addVote); 


module.exports = router; 