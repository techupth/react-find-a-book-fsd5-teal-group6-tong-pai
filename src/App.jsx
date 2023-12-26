import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [books, setBooks] = useState("");
  const [showBook, setShowBooks] = useState([]);
  const getBooks = async () => {
    try {
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${books}`
      );

      setShowBooks(result.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (books === "") {
      setShowBooks([]);
    } else {
      getBooks();
    }
  }, [books]);
  return (
    <>
      <div className="App">
        <p>Find A Book</p>
        <input
          type="text"
          value={books}
          onChange={(e) => {
            setBooks(e.target.value);
          }}
        />
        <div className="showBook">
          <ul>
            {showBook
              ? showBook.map((item) => {
                  return <li key={item.id}>{item.volumeInfo.title}</li>;
                })
              : ""}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
