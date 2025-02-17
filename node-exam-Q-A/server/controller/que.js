const Question = require("../model/que");


module.exports.createQuestion = async (req, res) => {
  try {
    const { title, body, tags, author } = req.body;
    const question = new Question({
      title,
      body,
      tags,
      author,
    });
    await question.save();
    res.status(201).json({ message: "Question created", question });
  } catch (error) {
    console.error("Create question error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate("author", "name email");
    res.status(200).json({ questions });
  } catch (error) {
    console.error("Get questions error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
