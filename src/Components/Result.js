import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { books } from "../assets/data";
import Item from "./Item";
import AboutBookWrapper from "./AboutBookWrapper";

const Result = () => {
  const [booksToShow, setBooksToShow] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Simulate book recommendation logic
  React.useEffect(() => {
    // For simplicity, we will just show the first 3 books
    setBooksToShow(books.slice(0, 3));
  }, []);

  return (
    <div
      className=" d-flex justify-content-center align-items-end mt-3 p-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="row">
        {booksToShow.map((book, index) => (
          <div key={book._id} className="col-md-3 container ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <Item
                book={book}
                key={book._id}
                setSelectedBook={setSelectedBook}
              />

              <div className="d-flex justify-content-center mt-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 + 0.3 }}
                >
                  <span
                    className="badge btnS rounded-lg"
                    style={{ fontSize: "30px", cursor: "default" }}
                  >
                    {index + 1}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
        <AboutBookWrapper
          selectedBook={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      </div>
    </div>
  );
};

export default Result;
