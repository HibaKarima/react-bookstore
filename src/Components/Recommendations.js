import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../assets/data";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
const Recommendations = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <h3
          style={{ color: "var( --color-txt-hover)" }}
          className="text-center"
        >
          If you can't choose a book, answer the following questions and you
          will get advice.
        </h3>
        <div className="row">
          <div className="col">
            <h2 className="my-3">{questions[currentQuestion].text}</h2>
            <ul className="list-group">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option)}
                  className="list-group-item d-flex justify-content-between align-items-center shadow border-0 p-2 "
                  style={{ color: "var(--color-txt-link)" }}
                >
                  {option}
                  <button className="btn btnS">Select</button>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
