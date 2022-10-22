import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import CardComponent from "./components/CardComponent";
import Header from "./components/Header";
import Search from "./components/Search";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [images, setImages] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${searchInput}&client_id=${UNSPLASH_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages([...images, { ...data, title: searchInput }]);
      })
      .catch((err) => {
        console.log(err);
      });
    setSearchInput("");
  };

  return (
    <div>
      <Header title="Image Gallery" />
      <Search
        input={searchInput}
        onInput={setSearchInput}
        onHandleInput={handleInput}
      />
      <Container>
        <Row xs={1} md={2} lg={3}>
          {images.map((image) => (
            <Col key={image.id}>
              <CardComponent image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
