import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { getHeroesByPublisher } from "../services/getHeroesByPublisher";
import { getHeroesByName } from "../services/getHeroesByName";

export const SearchComponent = ({ setHeroes }) => {
  const searchFormRef = useRef();

  const searchHero = (value) => {
    const heroes = getHeroesByName(value);
    setHeroes(heroes);
  };

  const searchReset = () => {
    const heroes = getHeroesByPublisher(null);
    searchFormRef.current.reset();
    setHeroes(heroes);
  };

  return (
    <Form
      ref={searchFormRef}
      className="d-flex w-100 justify-content-center align-items-center"
    >
      <InputGroup className="mb-3 w-50 mt-4">
        <Form.Control
          placeholder="Busqueda"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => searchHero(e.target.value)}
        />
        <InputGroup.Text id="basic-addon1">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
      </InputGroup>
      <Button onClick={searchReset} className="ms-2 mt-2" variant="primary">
        Reset
      </Button>
    </Form>
  );
};
