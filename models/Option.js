const mongoose = require('mongoose'); 

const optionSchema = new mongoose.Schema({
    text: {
        type: String, 
        required: true
    }, 
    votes: {
        type: Number, 
        default: 0
    }
});

optionSchema.virtual('link_to_vote').get(function(){
    return `http://localhost:${process.env.PORT || 3000}/options/${this.id}/add_vote`; 
}); 

const Option = mongoose.model("Option", optionSchema); 


module.exports = Option; 