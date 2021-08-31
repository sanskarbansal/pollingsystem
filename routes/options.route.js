const express = require("express");
const router = express.Router();

const optionsController = require("../controllers/options.controller");

//[EXAMPLE]: http://localhost:3000/options/612bbfd8164e90a0d4d96882/delete
router.post("/:id/delete", optionsController.delete);

//[EXAMPLE]: http://localhost:3000/options/612bbfd8164e90a0d4d96882/add_vote
router.post("/:id/add_vote", optionsController.addVote);

module.exports = router;
