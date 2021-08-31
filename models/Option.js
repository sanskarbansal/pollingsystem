const mongoose = require("mongoose");
const hostname = process.env.HOST_NAME || `http://localhost:${process.env.PORT || 3000}`;

const optionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
});

optionSchema.virtual("link_to_vote").get(function () {
    return `${hostname}/options/${this.id}/add_vote`;
});

const Option = mongoose.model("Option", optionSchema);

module.exports = Option;
