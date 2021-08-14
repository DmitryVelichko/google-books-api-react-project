import React, { useState } from "react";
import "./App.css";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  Label,
  Spinner,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import BookCard from "./BookCard.js";

function App() {
  // States
  const [maxResults, setMaxResults] = useState(30);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  // Поиск по нажатию Enter

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then((res) => {
          setCards(res.data.items);
          setLoading(false);
        });
    }
  };
  // Handle Search
  const handleSubmit = () => {
    setLoading(true);

    if ((query === "") || (query.includes(" ", 0))) {
      toast.error("ПОЛЕ НЕ МОЖЕТ БЫТЬ ПУСТЫМ, ВВЕДИТЕ ТЕКСТ");
    }

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
      )
      .then((res) => {
        if (res.data.items.length > 0) {
          setCards(res.data.items);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(true);
        console.log(err.response);
      });
  };

  const handleSubmit2 = () => {
    setLoading(true);

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex + 30}`
      )
      .then((res) => {
        if (res.data.items.length > 0) {
          setCards(res.data.items);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(true);
        console.log(err.response);
      });
  };

  // Main Show Case
  const mainHeader = () => {
    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        {/* Overlay */}
        <div className="filter"></div>
        <h1
          className="display-2 text-center text-white mb-3"
          style={{ zIndex: 2 }}
        >
          Гугол Книги
        </h1>
        <div style={{ width: "60%", zIndex: 2 }}>
          <InputGroup size="lg" className="mb-3">
            <Input
              placeholder="Book Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleKeyPress}
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary" onClick={handleSubmit}>
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>

          {/* 2 КНОПКИ */}
          <div className="twoButtons d-flex text-white justify-content-center">
            <FormGroup className="ml-5">
              <Label for="categories">Категории</Label>
              <Input
                type="text"
                id="categories"
                placeholder="Категории"
                value={maxResults}
                onChange={(e) => setMaxResults(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="ml-5">
              <Label for="SortingBy">Сортировать по</Label>
              <Input
                type="text"
                id="SortingBy"
                placeholder="Сортировать по"
                value={startIndex}
                onChange={(e) => setStartIndex(e.target.value)}
              />
            </FormGroup>
            <Button className='loadMore' onClick={handleSubmit2}>Load More</Button>
          </div>
        </div>
      </div>
    );
  };

  // Спиннер загрузки
  const handleCards = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let thumbnail = "";
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className="col-lg-4 mb-3" key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });
      return (
        <div className="container my-5">
          <div className="row">{items}</div>
        </div>
      );
    }
  };
  return (
    <div className="w-100 h-100">
      {mainHeader()}
      {handleCards()}
      <ToastContainer />
    </div>
  );
}

export default App;
