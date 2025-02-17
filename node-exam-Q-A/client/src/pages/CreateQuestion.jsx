import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateQuestion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    tags: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:8090/api/questions/create",
        {
          ...formData,
          tags: formData.tags.split(",").map((tag) => tag.trim()),
          author: "user_id_here", // TODO: Replace with the logged-in user ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      console.error("Create Question Error:", error);
      setError("Failed to create question. Please try again.");
    }
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="body"
          placeholder="Question Details"
          value={formData.body}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
        />
        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
};

export default CreateQuestion;
