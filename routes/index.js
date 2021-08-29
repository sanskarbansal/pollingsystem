const express = require('express'); 
const router = express.Router(); 

//Questions Router.
router.use('/questions', require('./questions.route')); 

//Options Router
router.use('/options', require('./options.route')); 



module.exports = router; 