import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>
        This is a simple application for calling Unsplash API. In order to start
        you should put a search term in the input field.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
