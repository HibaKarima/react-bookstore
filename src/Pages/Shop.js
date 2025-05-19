import React, { useContext, useState, useEffect, useCallback } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { categories } from "../assets/data";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item";
import AboutBookWrapper from "../Components/AboutBookWrapper";
import Footer from "../Components/Footer";

function Shop() {
  const { books } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedBook, setSelectedBook] = useState(null);

  const resetFilters = () => {
    setCategory([]);
    setSearch("");
  };

  const toggleFilter = (value, setState) => {
    resetFilters();
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilters = useCallback(() => {
    let filtered = [...books];
    if (search) {
      filtered = filtered.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length) {
      filtered = filtered.filter((book) => category.includes(book.category));
    }
    return filtered;
  }, [books, search, category]);

  const applySorting = useCallback((booksList) => {
    switch (sortType) {
      case "low":
        return booksList.sort((a, b) => a.price - b.price);
      case "high":
        return booksList.sort((a, b) => b.price - a.price);
      default:
        return booksList;
    }
  }, [sortType]);

  useEffect(() => {
    let filtered = applyFilters();
    let sorted = applySorting(filtered);
    setFilteredBooks(sorted);
    setCurrentPage(1);
  }, [applyFilters, applySorting, category, sortType, books, search]);

  // Get books for the current page
  const getPaginatedBooks = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBooks.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  return (
    <section className="container">
      <div style={{ paddingTop: "7rem" }}>
        {/* Search box */}
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={{ maxWidth: "42rem" }}
        >
          <div
            className="d-inline-flex align-items-center justify-content-center overflow-hidden w-100 rounded-pill px-3 py-1"
            style={{ border: "1px solid grey" }}
          >
            <div className="fs-5 cursor-pointer me-1">
              <RiSearch2Line />
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search here ... "
              className="border-0 outline-0 w-100 form-control-sm pl-2"
            />
            <div className="ms-1 d-flex align-items-center justify-content-center cursor-pointer fs-5 border-1 pl-2">
              <LuSettings2 />
            </div>
          </div>
        </div>
        {/* Categories filter */}
        <div className="mt-5 mb-8">
          <h4
            className="mb-4 d-none d-sm-flex"
            style={{ color: "var(--color-txt-link)" }}
          >
            Categories :{" "}
          </h4>
          <div
            className="d-flex justify-content-center align-items-center flex-wrap justify-content-sm-start"
            style={{ gap: "3rem 1rem" }}
          >
            {/* Add the "ALL" button */}
            <button onClick={resetFilters} className="btn btnS px-3">
              ALL
            </button>
            {categories.map((cat) => (
              <label key={cat.name}>
                <input
                  type="checkbox"
                  value={cat.name}
                  onChange={(e) => toggleFilter(e.target.value, setCategory)}
                  className="d-none peer"
                />
                <div
                  className="d-flex flex-column align-items-center justify-content-center g-2 peer-checked:text-secondary"
                  style={{ gap: "0.5rem", cursor: "pointer" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-pill"
                    style={{ height: "5rem", width: "5rem" }}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", height: "2.5rem", width: "2.5rem" }}
                    />
                  </div>
                  <span
                    className="font-weight-medium"
                    style={{ fontSize: "14px", color: "var(--color-txt-hover)" }}
                  >
                    {cat.name}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
        {/* Books Container */}
        <div className="mt-5">
          {/* title and sort */}
          <div className="d-flex justify-content-between align-items-start flex-wrap pb-5 gap-3 pb-16 text-center">
            <style>
              {` @media (max-width: 576px) {
                .max-sm-flexCenter {
                  justifyContent: center;
                  alignItems: center
                }
              }`}
            </style>
            <Title
              title1={"Our"}
              title2={"Book List"}
              titleStyles={"pb-0 text-start"}
              paraStyles={"d-black"}
            />
            <div className="d-flex align-items-center justify-content-center">
              <span className="d-none d-sm-flex font-weight-medium">
                Sort by :
              </span>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="fs-6 p-2 border-0 text-secondary rounded"
              >
                <option value="relevant"> Relevant</option>
                <option value="low"> Low</option>
                <option value="high"> high</option>
              </select>
            </div>
          </div>
          {/* Books */}
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
            {getPaginatedBooks().length > 0 ? (
              getPaginatedBooks().map((book) => (
                <Item
                  book={book}
                  key={book._id}
                  setSelectedBook={setSelectedBook}
                />
              ))
            ) : (
              <p>No Books Found For Selected Filters</p>
            )}
            <AboutBookWrapper
              selectedBook={selectedBook}
              onClose={() => setSelectedBook(null)}
            />
          </div>
        </div>
        {/* Pagination */}
        <div className="d-flex align-items-center justify-content-center mt-5 mb-4 gap-1">
          {/* Previous button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`btn btnS py-1 px-3 ${currentPage === 1 && " opacity-50 cursor-not-allowed"}`}
          >
            Previous
          </button>
          {/* Page Number */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`btn btnS py-1 px-3 ${currentPage === index + 1 && "bg-secondary"}`}
            >
              {index + 1}
            </button>
          ))}
          {/* Next button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`btn btnS py-1 px-3 ${currentPage === totalPages && " opacity-50 cursor-not-allowed"}`}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Shop;