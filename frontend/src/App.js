import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import CardComponent from "./components/CardComponent";
import Header from "./components/Header";
import Search from "./components/Search";
import Welcome from "./components/Welcome";

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
        setImages([{ ...data, title: searchInput }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setSearchInput("");
  };

  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Image Gallery" />
      <Search
        input={searchInput}
        onInput={setSearchInput}
        onHandleInput={handleInput}
      />
      <Container className="mt-4">
        {images.length > 0 ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image) => (
              <Col className="pb-3" key={image.id}>
                <CardComponent image={image} onDelete={handleDelete} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

export default App;
