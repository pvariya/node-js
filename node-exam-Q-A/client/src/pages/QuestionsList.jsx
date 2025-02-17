import axios from "axios";
import React, { useEffect, useState } from "react";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:8090/api/questions");
        setQuestions(res.data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <h3>{question.title}</h3>
            <p>{question.body}</p>
            <p>
              <strong>Author:</strong> {question.author.name}
            </p>
            <p>
              <strong>Tags:</strong> {question.tags.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsList;
