import React from "react";
import "./App.css";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

function App() {
  const mainHeader = () => {
    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        <div className="filter"></div>
        <h1 className="googleBooks display-2 text-center text-white mb-3">
          Гугол книги
        </h1>
        <div className="inputContainer">
          <InputGroup className="mb-3" size="lg">
            <Input placeholder="Найти книгу" />
            <InputGroupAddon addonType="append">
              <Button color="secondary">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  };
  return <div>{mainHeader()}</div>;
}
export default App;
