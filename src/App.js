import React, { useState, useEffect } from "react";
import "./App.css";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Spinner
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import BookCard from "./BookCard.js";
import keyAPI from "./KeyAPI";

function App() {
  // Состояние
  const [maxResults, setMaxResults] = useState(2);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  

  // Функция поиска по нажатию Enter

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      
    if (query === "" || query.includes(" ", 0)) {
      toast.error("ПОЛЕ НЕ МОЖЕТ БЫТЬ ПУСТЫМ, ВВЕДИТЕ ТЕКСТ");
    }
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
        )
        .then((res) => {
          setCards(res.data.items);
          setLoading(false);
        }).catch((err) => {
          setLoading(true);
          console.log(err.response);
        });
    }
  };

  const loadMore = () => {
    setLoading(true);
    
    if (query === "" || query.includes(" ", 0)) {
      toast.error("ПОЛЕ НЕ МОЖЕТ БЫТЬ ПУСТЫМ, ВВЕДИТЕ ТЕКСТ");
    }

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
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
  }

  // Основная функция по реализации поиска книг с обработкой пустой строки и строки с пробелами
  const handleSubmit = () => {
    setLoading(true);

    if (query === "" || query.includes(" ", 0)) {
      toast.error("ПОЛЕ НЕ МОЖЕТ БЫТЬ ПУСТЫМ, ВВЕДИТЕ ТЕКСТ");
    }
    
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}&key=${keyAPI}`
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

  // Основной UI
  const mainHeader = () => {
    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        {/* Заголовок*/}
        <div className="filter"></div>
        <h1
          className="display-2 text-center text-white mb-3"
          style={{ zIndex: 2 }}
        >
          Гугол Книги
        </h1>

        {/*Поисковая строка */}
        <div style={{ width: "60%", zIndex: 2 }}>
          <InputGroup size="lg" className="mb-3">
            <Input
              placeholder="Book Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleKeyPress}
            />

            {/* Кнопка лупы */}
            <InputGroupAddon addonType="append">
              <Button color="secondary" onClick={handleSubmit}>
                <i className="fas fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>

          {/* 2 КНОПКИ (Категории и сортировка) */}
          <div className="twoButtons d-flex text-white justify-content-center">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Все</option>
              <option value="2">Art</option>
              <option value="3">Biography</option>
              <option value="4">Computers</option>
              <option value="5">Hisotry</option>
              <option value="6">Medical</option>
              <option value="7">Poetry</option>
            </select>

            <select className="form-select" aria-label="Default select example">
              <option defaultValue>По релевантности</option>
              <option value="2">Newest</option>
            </select>

            {/* Кнопка "загрузить ещё" */}
            <Button className="loadMore" onClick={loadMore}>
              Загрузить ещё
            </Button>
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
              mainCategory={item.volumeInfo.categories}
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
