import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [searchText, setSearchText] = useState("Adobe");
  const [booklist, setBookList] = useState([]);

  useEffect(() => {
    getBookName();
  }, [searchText]);

  async function getBookName() {
    const getBookUrl =
      "https://www.googleapis.com/books/v1/volumes?q=" + searchText;
    const respond = await axios.get(getBookUrl);
    setBookList(respond.data.items);
  }

  return (
    <div className="App">
      <h3>Find a Book</h3>
      <input
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
      ></input>

    <ul>
      {booklist.map((item) => {
          return(

            <li>{item.volumeInfo.title}</li>
          )


      })}
      </ul>
    </div>
  );
}

export default App;
