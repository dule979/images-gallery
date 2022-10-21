import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    console.log(searchInput);
    fetch(`https://api.unsplash.com/photos/random/?query=${searchInput}&client_id=${UNSPLASH_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div>
      <Header title="Image Gallery" />
      <Search input={searchInput} onInput={setSearchInput} onHandleInput={handleInput} />
    </div>
  );
}

export default App;
