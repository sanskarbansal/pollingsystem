const Option = require("../models/Option");
module.exports = {
    //FIND OPTION DOCUMENT IF VOTES > 0 THAN DO NOT DELETE OTHERWISE DELETE.
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const option = await Option.findById(id);
            if (!option) return res.json({ error: "Option not found" });
            if (option.votes > 0)
                return res.json({
                    error: "Option votes > 1",
                });
            option.remove();
            return res.json({
                message: "Option deleted successfully",
            });
        } catch (err) {
            return res.json({
                error: "Error while deleting option",
            });
        }
    },

    //[ALGORITHM]: FIND OPTION, ADD ONE TO VOTE, SAVE OPTION
    addVote: async (req, res) => {
        try {
            const { id } = req.params;
            const option = await Option.findById(id);
            option.votes += 1;
            await option.save();
            return res.json({
                message: "Voted Successfully",
            });
        } catch (err) {
            return res.json({
                error: "Error while voting",
            });
        }
    },
};
