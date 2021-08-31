const Question = require("../models/Question");
const Option = require("../models/Option");

module.exports = {
    get: (req, res) => {
        const { id } = req.params;
        Question.findById(id)
            .populate("options")
            .exec((err, doc) => {
                if (!doc)
                    return res.json({
                        message: "No Question Found related to this ID.",
                    });
                let obj = doc.toJSON();
                for (let i = 0; i < obj.options.length; i++) {
                    obj["options"][i].link_to_save = doc["options"][i].link_to_vote;
                }
                return res.json(obj);
            });
    },
    create: async (req, res) => {
        const { title } = req.body;
        if (title.trim().length === 0) return res.json({ error: "Please provide question with title." });
        try {
            const question = await Question.create({
                title,
            });
            return res.json({
                message: "Question created successfully",
                question,
            });
        } catch (err) {
            return res.json({
                error: "Error while creating question",
            });
        }
    },
    optionCreate: async (req, res) => {
        const { id } = req.params;
        const { text } = req.body;
        if (!text || text.trim().lengh === 0)
            return res.json({
                error: "Please provide option text.",
            });
        const option = await Option.create({
            text,
        });
        const question = await Question.findById(id);
        question.options.push(option);
        await question.save();
        return res.json({
            message: "Created Successfully",
        });
    },
    delete: (req, res) => {
        try {
            const { id } = req.params;
            let flag = 0;
            Question.findById(id)
                .populate("options")
                .exec((err, doc) => {
                    let options = doc.options;
                    let votes = 0;
                    options.forEach((element) => {
                        votes += element.votes;
                    });
                    if (votes >= 1) {
                        return res.json({
                            error: "Question can not be deleted beacuse it's options has votes >= 1",
                        });
                    }
                    for (let option of options) {
                        Option.findByIdAndDelete(option, (err) => {
                            if (err) throw err;
                        });
                    }
                    doc.remove();
                    return res.json({
                        message: "Deleted successfully",
                    });
                });
        } catch (err) {
            return res.json({
                error: "Error while deleting.",
            });
        }
    },
};
