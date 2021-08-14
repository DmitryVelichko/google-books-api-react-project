import React, { useState } from "react";
import "./App.css";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  Label,
} from "reactstrap";

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
          <div className="d-flex text-white justify-content-center">
            {/* <FormGroup className='ml-5'>
            <Label for='categories'>Категории</Label>
            <Input type='text' id='categories' placeholder='Категории'/>
          </FormGroup>
          <FormGroup className='ml-5'>
            <Label for='SortingBy'>Сортировать по</Label>
            <Input type='text' id='SortingBy' placeholder='Сортировать по'/>
          </FormGroup> */}
            <FormGroup className="ml-5">
              <Label for="maxResults">Макс Результат</Label>
              <Input type="number" id="maxResults" placeholder="Макс результат" />
            </FormGroup>
            <FormGroup className="ml-5">
              <Label for="startIndex">Начальный индекс</Label>
              <Input type="number" id="SortingBy" placeholder="Начальный индекс" />
            </FormGroup>
          </div>
        </div>
      </div>
    );
  };
  return <div>{mainHeader()}</div>;
}
export default App;
